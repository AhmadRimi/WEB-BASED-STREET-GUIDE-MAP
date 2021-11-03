ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([328054.099253, 1162360.072084, 335131.703427, 1165925.332504]);
var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 0.251000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_Roundabout_1 = new ol.format.GeoJSON();
var features_Roundabout_1 = format_Roundabout_1.readFeatures(json_Roundabout_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Roundabout_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roundabout_1.addFeatures(features_Roundabout_1);
var lyr_Roundabout_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roundabout_1, 
                style: style_Roundabout_1,
                interactive: true,
                title: '<img src="styles/legend/Roundabout_1.png" /> Roundabout'
            });
var format_ReligiousStructures_2 = new ol.format.GeoJSON();
var features_ReligiousStructures_2 = format_ReligiousStructures_2.readFeatures(json_ReligiousStructures_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_ReligiousStructures_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReligiousStructures_2.addFeatures(features_ReligiousStructures_2);
var lyr_ReligiousStructures_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReligiousStructures_2, 
                style: style_ReligiousStructures_2,
                interactive: true,
                title: '<img src="styles/legend/ReligiousStructures_2.png" /> Religious Structures'
            });
var format_RecreationalFacilities_3 = new ol.format.GeoJSON();
var features_RecreationalFacilities_3 = format_RecreationalFacilities_3.readFeatures(json_RecreationalFacilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_RecreationalFacilities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecreationalFacilities_3.addFeatures(features_RecreationalFacilities_3);
var lyr_RecreationalFacilities_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RecreationalFacilities_3, 
                style: style_RecreationalFacilities_3,
                interactive: true,
                title: '<img src="styles/legend/RecreationalFacilities_3.png" /> Recreational Facilities'
            });
var format_PoliceStation_4 = new ol.format.GeoJSON();
var features_PoliceStation_4 = format_PoliceStation_4.readFeatures(json_PoliceStation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_PoliceStation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoliceStation_4.addFeatures(features_PoliceStation_4);
var lyr_PoliceStation_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoliceStation_4, 
                style: style_PoliceStation_4,
                interactive: true,
                title: '<img src="styles/legend/PoliceStation_4.png" /> Police Station'
            });
var format_Pathway_5 = new ol.format.GeoJSON();
var features_Pathway_5 = format_Pathway_5.readFeatures(json_Pathway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Pathway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pathway_5.addFeatures(features_Pathway_5);
var lyr_Pathway_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pathway_5, 
                style: style_Pathway_5,
                interactive: true,
                title: '<img src="styles/legend/Pathway_5.png" /> Pathway'
            });
var format_MinorRoads_6 = new ol.format.GeoJSON();
var features_MinorRoads_6 = format_MinorRoads_6.readFeatures(json_MinorRoads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_MinorRoads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinorRoads_6.addFeatures(features_MinorRoads_6);
var lyr_MinorRoads_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MinorRoads_6, 
                style: style_MinorRoads_6,
                interactive: true,
                title: '<img src="styles/legend/MinorRoads_6.png" /> Minor Roads'
            });
var format_MarketPlace_7 = new ol.format.GeoJSON();
var features_MarketPlace_7 = format_MarketPlace_7.readFeatures(json_MarketPlace_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_MarketPlace_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarketPlace_7.addFeatures(features_MarketPlace_7);
var lyr_MarketPlace_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MarketPlace_7, 
                style: style_MarketPlace_7,
                interactive: true,
                title: '<img src="styles/legend/MarketPlace_7.png" /> Market Place'
            });
var format_MajorRoads_8 = new ol.format.GeoJSON();
var features_MajorRoads_8 = format_MajorRoads_8.readFeatures(json_MajorRoads_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_MajorRoads_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRoads_8.addFeatures(features_MajorRoads_8);
var lyr_MajorRoads_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MajorRoads_8, 
                style: style_MajorRoads_8,
                interactive: true,
                title: '<img src="styles/legend/MajorRoads_8.png" /> Major Roads'
            });
var format_Hotels_9 = new ol.format.GeoJSON();
var features_Hotels_9 = format_Hotels_9.readFeatures(json_Hotels_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Hotels_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotels_9.addFeatures(features_Hotels_9);
var lyr_Hotels_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hotels_9, 
                style: style_Hotels_9,
                interactive: true,
                title: '<img src="styles/legend/Hotels_9.png" /> Hotels'
            });
var format_HealthFacilities_10 = new ol.format.GeoJSON();
var features_HealthFacilities_10 = format_HealthFacilities_10.readFeatures(json_HealthFacilities_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_HealthFacilities_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthFacilities_10.addFeatures(features_HealthFacilities_10);
var lyr_HealthFacilities_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HealthFacilities_10, 
                style: style_HealthFacilities_10,
                interactive: true,
                title: '<img src="styles/legend/HealthFacilities_10.png" /> Health Facilities'
            });
var format_GraveSites_11 = new ol.format.GeoJSON();
var features_GraveSites_11 = format_GraveSites_11.readFeatures(json_GraveSites_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_GraveSites_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GraveSites_11.addFeatures(features_GraveSites_11);
var lyr_GraveSites_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GraveSites_11, 
                style: style_GraveSites_11,
                interactive: true,
                title: '<img src="styles/legend/GraveSites_11.png" /> Grave Sites'
            });
var format_GovernmentalStructures_12 = new ol.format.GeoJSON();
var features_GovernmentalStructures_12 = format_GovernmentalStructures_12.readFeatures(json_GovernmentalStructures_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_GovernmentalStructures_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GovernmentalStructures_12.addFeatures(features_GovernmentalStructures_12);
var lyr_GovernmentalStructures_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GovernmentalStructures_12, 
                style: style_GovernmentalStructures_12,
                interactive: true,
                title: '<img src="styles/legend/GovernmentalStructures_12.png" /> Governmental Structures'
            });
var format_FillingStation_13 = new ol.format.GeoJSON();
var features_FillingStation_13 = format_FillingStation_13.readFeatures(json_FillingStation_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_FillingStation_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FillingStation_13.addFeatures(features_FillingStation_13);
var lyr_FillingStation_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FillingStation_13, 
                style: style_FillingStation_13,
                interactive: true,
                title: '<img src="styles/legend/FillingStation_13.png" /> Filling Station'
            });
var format_AcademicStructures_14 = new ol.format.GeoJSON();
var features_AcademicStructures_14 = format_AcademicStructures_14.readFeatures(json_AcademicStructures_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_AcademicStructures_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademicStructures_14.addFeatures(features_AcademicStructures_14);
var lyr_AcademicStructures_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AcademicStructures_14, 
                style: style_AcademicStructures_14,
                interactive: true,
                title: '<img src="styles/legend/AcademicStructures_14.png" /> Academic Structures'
            });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_Roundabout_1.setVisible(true);lyr_ReligiousStructures_2.setVisible(true);lyr_RecreationalFacilities_3.setVisible(true);lyr_PoliceStation_4.setVisible(true);lyr_Pathway_5.setVisible(true);lyr_MinorRoads_6.setVisible(true);lyr_MarketPlace_7.setVisible(true);lyr_MajorRoads_8.setVisible(true);lyr_Hotels_9.setVisible(true);lyr_HealthFacilities_10.setVisible(true);lyr_GraveSites_11.setVisible(true);lyr_GovernmentalStructures_12.setVisible(true);lyr_FillingStation_13.setVisible(true);lyr_AcademicStructures_14.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_Roundabout_1,lyr_ReligiousStructures_2,lyr_RecreationalFacilities_3,lyr_PoliceStation_4,lyr_Pathway_5,lyr_MinorRoads_6,lyr_MarketPlace_7,lyr_MajorRoads_8,lyr_Hotels_9,lyr_HealthFacilities_10,lyr_GraveSites_11,lyr_GovernmentalStructures_12,lyr_FillingStation_13,lyr_AcademicStructures_14];
lyr_Roundabout_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ReligiousStructures_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Eastings': 'Eastings', 'Northings': 'Northings', });
lyr_RecreationalFacilities_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Eastings': 'Eastings', 'Northings': 'Northings', });
lyr_PoliceStation_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Eastings': 'Eastings', 'Northings': 'Northings', });
lyr_Pathway_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Rd Length': 'Rd Length', });
lyr_MinorRoads_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Rd Length': 'Rd Length', });
lyr_MarketPlace_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Eastings': 'Eastings', 'Northings': 'Northings', });
lyr_MajorRoads_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Rd Length': 'Rd Length', });
lyr_Hotels_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Eastings': 'Eastings', 'Northings': 'Northings', });
lyr_HealthFacilities_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Eastings': 'Eastings', 'Northings': 'Northings', });
lyr_GraveSites_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Eastings': 'Eastings', 'Northings': 'Northings', });
lyr_GovernmentalStructures_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Eastings': 'Eastings', 'Northings': 'Northings', });
lyr_FillingStation_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Eastings': 'Eastings', 'Northings': 'Northings', });
lyr_AcademicStructures_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Eastings': 'Eastings', 'Northings': 'Northings', });
lyr_Roundabout_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ReligiousStructures_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Eastings': 'TextEdit', 'Northings': 'TextEdit', });
lyr_RecreationalFacilities_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Eastings': 'TextEdit', 'Northings': 'TextEdit', });
lyr_PoliceStation_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Eastings': 'TextEdit', 'Northings': 'TextEdit', });
lyr_Pathway_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Rd Length': 'TextEdit', });
lyr_MinorRoads_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Rd Length': 'TextEdit', });
lyr_MarketPlace_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Eastings': 'TextEdit', 'Northings': 'TextEdit', });
lyr_MajorRoads_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Rd Length': 'TextEdit', });
lyr_Hotels_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Eastings': 'TextEdit', 'Northings': 'TextEdit', });
lyr_HealthFacilities_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Eastings': 'TextEdit', 'Northings': 'TextEdit', });
lyr_GraveSites_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Eastings': 'TextEdit', 'Northings': 'TextEdit', });
lyr_GovernmentalStructures_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Eastings': 'TextEdit', 'Northings': 'TextEdit', });
lyr_FillingStation_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Eastings': 'TextEdit', 'Northings': 'TextEdit', });
lyr_AcademicStructures_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Eastings': 'TextEdit', 'Northings': 'TextEdit', });
lyr_Roundabout_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_ReligiousStructures_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Eastings': 'inline label', 'Northings': 'inline label', });
lyr_RecreationalFacilities_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Eastings': 'inline label', 'Northings': 'inline label', });
lyr_PoliceStation_4.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Eastings': 'inline label', 'Northings': 'inline label', });
lyr_Pathway_5.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Rd Length': 'inline label', });
lyr_MinorRoads_6.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Rd Length': 'inline label', });
lyr_MarketPlace_7.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Eastings': 'inline label', 'Northings': 'inline label', });
lyr_MajorRoads_8.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Rd Length': 'inline label', });
lyr_Hotels_9.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Eastings': 'inline label', 'Northings': 'inline label', });
lyr_HealthFacilities_10.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Eastings': 'inline label', 'Northings': 'inline label', });
lyr_GraveSites_11.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Eastings': 'inline label', 'Northings': 'inline label', });
lyr_GovernmentalStructures_12.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Eastings': 'inline label', 'Northings': 'inline label', });
lyr_FillingStation_13.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Eastings': 'inline label', 'Northings': 'inline label', });
lyr_AcademicStructures_14.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Eastings': 'inline label', 'Northings': 'inline label', });
lyr_AcademicStructures_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});