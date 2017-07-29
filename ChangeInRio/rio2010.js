var roi = ee.Geometry.Point ([-43.25,-22.90])
var start = ee.Date('2010-01-01');
var finish = ee.Date('2010-12-31');

var image = ee.Image(l5
    .filterBounds(roi)
    .filterDate(start, finish)
    .sort('CLOUD_COVER')
    .first());

Map.setCenter(-43.25,-22.90, 10);  
// Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'image');

var rio2010_ndvi = image.normalizedDifference(['B4','B3']).rename('NDVI');
var rio2010_ndbi = image.normalizedDifference(['B5','B4']).rename('NDBI');
var rio2010_ndwi = image.normalizedDifference(['B2','B4']).rename('NDWI');
var rio2010_idx = image.addBands([rio2010_ndvi, rio2010_ndbi, rio2010_ndwi]);

var newfc = urbano.merge(verde).merge(agua).merge(pasto);
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];
var bands_idx = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7','NDVI','NDBI','NDWI'];

var training = rio2010_idx.select(bands_idx).sampleRegions({
  collection: newfc, 
  properties: ['landcover'], 
  scale: 30
});
// print(training)

var classifier = ee.Classifier.cart().train({
  features: training, 
  classProperty: 'landcover', 
  inputProperties: bands_idx
});


print(classifier.explain());
var classified = rio2010_idx.select(bands_idx).classify(classifier);


Map.addLayer(classified, {min: 0, max: 3, palette: ['red', '#0099ff', '#003300', '#00cc00']});

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: classified,
  description: 'rio2010_cart_idx',
  scale: 30,
  maxPixels: 429001276
});