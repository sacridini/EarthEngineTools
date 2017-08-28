// Delimita a região de interesse (roi) e 
// a data min e max para coleta das imagens
var roi = ee.Geometry.Point ([-43.25,-22.90])
var start = ee.Date('2010-01-01');
var finish = ee.Date('2010-12-31');

// Melhor imagem do ano 2000 (com menor quantidade de nuvem)
var image = ee.Image(l5
    .filterBounds(roi)
    .filterDate(start, finish)
    .sort('CLOUD_COVER')
    .first());

// Reseta o mapa nessas coordenadas.
// Esta etapa é importante para garantir que as imagens finais sejam exportadas
// com o mesmo tamanho
Map.setCenter(-43.25,-22.90, 10);  

// Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'image');

// Gera os índices (NDVI, NDBI e NDWI)
var rio2010_ndvi = image.normalizedDifference(['B4','B3']).rename('NDVI');
var rio2010_ndbi = image.normalizedDifference(['B5','B4']).rename('NDBI');
var rio2010_ndwi = image.normalizedDifference(['B2','B4']).rename('NDWI');
var rio2010_idx = image.addBands([rio2010_ndvi, rio2010_ndbi, rio2010_ndwi]);

// Junta todas as amostras coletadas em uma única variável
var newfc = urbano.merge(verde).merge(agua).merge(pasto);

// Seleciona as bandas para serem utilizadas pelo classificador
// Primeiro uma sem os índices
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];

// E outra com eles... Vamos usar esta! Viva os índices! :) 
var bands_idx = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7','NDVI','NDBI','NDWI'];

// Gera o treinador a partir das amostras coletadas
var training = rio2010_idx.select(bands_idx).sampleRegions({
  collection: newfc, 
  properties: ['landcover'], 
  scale: 30
});
// print(training)

// Inicializa (cria) o classificador
var classifier = ee.Classifier.cart().train({
  features: training, 
  classProperty: 'landcover', 
  inputProperties: bands_idx
});

// Imprime no console a árvore criada
print(classifier.explain());

// Gera a classificação
var classified = rio2010_idx.select(bands_idx).classify(classifier);

// Mostra a classificação na tela principal// Mostra a classificação na tela principal
Map.addLayer(classified, {min: 0, max: 3, palette: ['red', '#0099ff', '#003300', '#00cc00']});

// Exporta o resultado final para o Google Drive
Export.image.toDrive({
  image: classified,
  description: 'rio2010_cart_idx',
  scale: 30,
  maxPixels: 429001276
});