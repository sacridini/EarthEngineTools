var roi = ee.Geometry.Point ([-43.25,-22.90]);
var start = ee.Date('2005-01-01');
var finish = ee.Date('2005-12-31');

var image = ee.Image(l5
    .filterBounds(roi)
    .filterDate(start, finish)
    .sort('CLOUD_COVER')
    .first());
Map.setCenter(-43.25,-22.90, 10);  

var rio2005_ndvi = image.normalizedDifference(['B4','B3']).rename('NDVI');
var rio2005_ndbi = image.normalizedDifference(['B5','B4']).rename('NDBI');
var rio2005_ndwi = image.normalizedDifference(['B2','B4']).rename('NDWI');
var rio2005_idx = image.addBands([rio2005_ndvi, rio2005_ndbi, rio2005_ndwi]);

var newfc = urbano.merge(verde).merge(agua).merge(pasto);
var bands = ['B1', 'B2', 'B3', 'B4', 'B5', 'B7'];
var bands_idx = ['B1', 'B2', 'B3', 'B4', 'B5', 'B7','NDVI','NDBI','NDWI'];

var training = rio2005_idx.select(bands_idx).sampleRegions({
  collection: newfc, 
  properties: ['landcover'], 
  scale: 30
});
// print(training)

var classifier = ee.Classifier.svm({
  kernelType: 'RBF',
  gamma: 0.5,
  cost: 10
});

var trained = classifier.train(training, 'landcover', bands_idx);

// print(classifier.explain());
var classified = rio2005_idx.classify(trained);
var trainAccuracy = trained.confusionMatrix();
print('Resubstitution error matrix: ', trainAccuracy);
print('Training overall accuracy: ', trainAccuracy.accuracy());


Map.addLayer(classified, {min: 0, max: 3, palette: ['red', '#0099ff', '#003300', '#00cc00']});

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: classified,
  description: 'rio2005_svm_idx',
  scale: 30,
  maxPixels: 429001276
});