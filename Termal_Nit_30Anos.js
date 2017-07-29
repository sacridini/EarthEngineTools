
var ano = ee.Number(1987);
var dataInicial = ee.Date('1987-01-01');
var dataFinal = ee.Date('1987-12-31');

var rio1987 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano,1,1), dataFinal.update(ano,12,31))
.sort('CLOUD_COVER')
.first());

var rio1988 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(1),1,1), dataFinal.update(ano.add(1),12,31))
.sort('CLOUD_COVER')
.first());

var rio1989 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(2),1,1), dataFinal.update(ano.add(2),12,31))
.sort('CLOUD_COVER')
.first());

var rio1990 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(3),1,1), dataFinal.update(ano.add(3),12,31))
.sort('CLOUD_COVER')
.first());

var rio1991 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(4),1,1), dataFinal.update(ano.add(4),12,31))
.sort('CLOUD_COVER')
.first());

var rio1992 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(5),1,1), dataFinal.update(ano.add(5),12,31))
.sort('CLOUD_COVER')
.first());    

var rio1993 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(6),1,1), dataFinal.update(ano.add(6),12,31))
.sort('CLOUD_COVER')
.first());    

var rio1994 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(7),1,1), dataFinal.update(ano.add(7),12,31))
.sort('CLOUD_COVER')
.first());    

var rio1995 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(8),1,1), dataFinal.update(ano.add(8),12,31))
.sort('CLOUD_COVER')
.first());    

var rio1996 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(9),1,1), dataFinal.update(ano.add(9),12,31))
.sort('CLOUD_COVER')
.first());    

var rio1997 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(10),1,1), dataFinal.update(ano.add(10),12,31))
.sort('CLOUD_COVER')
.first());    

var rio1998 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(11),1,1), dataFinal.update(ano.add(11),12,31))
.sort('CLOUD_COVER')
.first());    

var rio1999 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(12),1,1), dataFinal.update(ano.add(12),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2000 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(13),1,1), dataFinal.update(ano.add(13),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2001 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(14),1,1), dataFinal.update(ano.add(14),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2002 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(15),1,1), dataFinal.update(ano.add(15),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2003 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(16),1,1), dataFinal.update(ano.add(16),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2004 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(17),1,1), dataFinal.update(ano.add(17),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2005 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(18),1,1), dataFinal.update(ano.add(18),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2006 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(19),1,1), dataFinal.update(ano.add(19),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2007 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(20),1,1), dataFinal.update(ano.add(20),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2008 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(21),1,1), dataFinal.update(ano.add(21),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2009 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(22),1,1), dataFinal.update(ano.add(22),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2010 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(23),1,1), dataFinal.update(ano.add(23),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2011 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(24),1,1), dataFinal.update(ano.add(24),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2012 = ee.Image(l5
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(24),1,1), dataFinal.update(ano.add(24),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2013 = ee.Image(l8
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(25),1,1), dataFinal.update(ano.add(25),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2014 = ee.Image(l8
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(26),1,1), dataFinal.update(ano.add(26),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2015 = ee.Image(l8
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(27),1,1), dataFinal.update(ano.add(27),12,31))
.sort('CLOUD_COVER')
.first());    

var rio2016 = ee.Image(l8
.filterBounds(roi)
.filterDate(dataInicial.update(ano.add(28),1,1), dataFinal.update(ano.add(28),12,31))
.sort('CLOUD_COVER')
.first());    


var imageCol = ee.ImageCollection.fromImages([rio1987,
                                              rio1988,
                                              rio1989,
                                              rio1990,
                                              rio1991,
                                              rio1992,
                                              rio1993,
                                              rio1994,
                                              rio1995,
                                              rio1996,
                                              rio1997,
                                              rio1998,
                                              rio1999,
                                              rio2000,
                                              rio2001,
                                              rio2002,
                                              rio2003,
                                              rio2004,
                                              rio2005,
                                              rio2006,
                                              rio2007,
                                              rio2008,
                                              rio2009,
                                              rio2010,
                                              rio2011,
                                              rio2012,
                                              rio2013,
                                              rio2014,
                                              rio2015,
                                              rio2016]);

var imageCol_l5 = ee.ImageCollection.fromImages([rio1987,
                                              rio1988,
                                              rio1989,
                                              rio1990,
                                              rio1991,
                                              rio1992,
                                              rio1993,
                                              rio1994,
                                              rio1995,
                                              rio1996,
                                              rio1997,
                                              rio1998,
                                              rio1999,
                                              rio2000,
                                              rio2001,
                                              rio2002,
                                              rio2003,
                                              rio2004,
                                              rio2005,
                                              rio2006,
                                              rio2007,
                                              rio2008,
                                              rio2009,
                                              rio2010,
                                              rio2011,
                                              rio2012]);

var imageCol_l8 = ee.ImageCollection.fromImages([rio2013,
                                                 rio2014,
                                                 rio2015,
                                                 rio2016]); 

// Get the timestamp and convert it to a date.
var date = ee.Date(rio1987.get('system:time_start'));
print('Timestamp: ', date); // ee.Date
  
// Get the timestamp and convert it to a date.
var date2 = ee.Date(rio1988.get('system:time_start'));
print('Timestamp: ', date2); // ee.Date


