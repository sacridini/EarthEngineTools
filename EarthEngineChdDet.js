// Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'image');
// LANDSAT/LT5_L1T_TOA_FMASK    LANDSAT/LT5_SR 

var rio2000 = ee.Image(l5
    .filterBounds(roi)
    .filterDate('2000-01-01', '2000-12-31')
    .sort('CLOUD_COVER')
    .select('B1', 'B2', 'B3', 'B4', 'B5', 'B7')
    .first()); 
    
var rio2005 = ee.Image(l5
    .filterBounds(roi)
    .filterDate('2005-01-01', '2005-12-31')
    .sort('CLOUD_COVER')
    .select('B1', 'B2', 'B3', 'B4', 'B5', 'B7')
    .first()); 
    
var rio2010 = ee.Image(l5
    .filterBounds(roi)
    .filterDate('2010-01-01', '2010-12-31')
    .sort('CLOUD_COVER')
    .select('B1', 'B2', 'B3', 'B4', 'B5', 'B7')
    .first()); 
    
var rio2015 = ee.Image(l8
    .filterBounds(roi)
    .filterDate('2015-01-01', '2015-12-31')
    .sort('CLOUD_COVER')
    .select('B2', 'B3', 'B4', 'B5', 'B6', 'B7')
    .first()); 
    
// var rioComp = ee.ImageCollection.fromImages([rio2000, rio2005, rio2010, rio2015]);

// var newfc = urban.merge(vegetation).merge(water);

// Gera índices para Landsat 5
function indices_l5(image) {
  var ndvi = image.normalizedDifference(['B4', 'B3']);
  var ndbi = image.normalizedDifference(['B5', 'B4']);
  var ndwi = image.normalizedDifference(['B2', 'B4']);
  var idx_1 = image.addBands(ndvi); // nd = NDVI
  var idx_2 = idx_1.addBands(ndbi); //nd_1 = NDBI
  var idx_final = idx_2.addBands(ndwi) //nd_2 = NDWI
  return idx_final; // imagem final com os 3 índices + bandas anteriores
}

// Gera índices para Landsat 8
function indices_l8(image) {
  var ndvi = image.normalizedDifference(['B5', 'B4']);
  var ndbi = image.normalizedDifference(['B6', 'B5']);
  var ndwi = image.normalizedDifference(['B3', 'B5']);
  var idx_1 = image.addBands(ndvi); // nd = NDVI
  var idx_2 = idx_1.addBands(ndbi); //nd_1 = NDBI
  var idx_final = idx_2.addBands(ndwi) //nd_2 = NDWI
  return idx_final; // imagem final com os 3 índices + bandas anteriores
}

// Calcula os índicex (NDVI, NDBI e NDWI) e adiciona como bandas
var rio2000_idx = indices_l5(rio2000);
var rio2005_idx = indices_l5(rio2005);
var rio2010_idx = indices_l5(rio2010);
var rio2015_idx = indices_l8(rio2015);

// Map.addLayer(amp_wi, {min: -1, max: 1, palette: ['00FFFF', '0000FF']}, 'amplitude');

// var bands = ['B2', 'B3', 'B4', 'B5', 'B7'];
var bands_idx = ['B2', 'B3', 'B4', 'B5', 'B7', 'nd', 'nd_1', 'nd_2'];
var newfc = urbano.merge(verde).merge(agua);


function classificacao(image) {
  var training = image.select(bands_idx).sampleRegions({
  collection: newfc, 
  properties: ['landcover'], 
  scale: 30
  });

  var classifier = ee.Classifier.cart().train({
  features: training, 
  classProperty: 'landcover', 
  inputProperties: bands_idx
  });
  
  // Create an SVM classifier with custom parameters.
  var class_svm = ee.Classifier.svm({
    kernelType: 'RBF',
    gamma: 0.5,
    cost: 10
  });
  
  // Train the classifier.
  var trained = class_svm.train(training, 'landcover', bands_idx);

  // Classify the image.
  var classified = image.classify(trained);
  print(classifier.explain());
  print(image)
  // var classified = image.select(bands_idx).classify(classifier);
  return classified;
}

var res_class = classificacao(rio2000_idx)
Map.addLayer(res_class, {min: 0, max: 2, palette: ['blue', 'red', 'green']});


// Export the image, specifying scale and region.
Export.image.toDrive({
  image: res_class,
  description: 'resultado_idx',
  scale: 30
});