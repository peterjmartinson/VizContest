/*<<dependency*/
define("sap_viz_ext_populationpyramid-src/js/flow", [ "sap_viz_ext_populationpyramid-src/js/module" ], function(moduleFunc) {
/*dependency>>*/
    var flowRegisterFunc = function(){
		var flow = sap.viz.extapi.Flow.createFlow({
			id : "sap.viz.ext.populationpyramid",
			name : "Population Pyramid",
			dataModel : "sap.viz.api.data.CrosstableDataset",
			type : "BorderSVGFlow"
		});
		var titleElement  = sap.viz.extapi.Flow.createElement({
			id : "sap.viz.chart.elements.Title",
			name : "Title"
		});
		flow.addElement({
			"element" : titleElement,
			"propertyCategory" : "title",
			"place" : "top"
		});
		var legendElement  = sap.viz.extapi.Flow.createElement({
			id : "sap.viz.chart.elements.ColorLegend",
			name : "Legend",
			dimensionIndex : [1]
		});
		flow.addElement({
			"element" : legendElement,
			"propertyCategory" : "legend",
			"place" : "right"
		});
		var element  = sap.viz.extapi.Flow.createElement({
			id : "sap.viz.ext.module.PopulationPyramid",
			name : "Population Pyramid"
		});
		element.implement("sap.viz.elements.common.BaseGraphic", moduleFunc);
		/*Feeds Definition*/
		//ds1: year, age, sex
		var ds1 = {
		    "id": "sap.viz.ext.module.PopulationPyramid.DS1",
		    "name": "X Axis",
		    "type": "Dimension",
		    "min": 1,
		    "max": 2,
		    "aaIndex": 1,
		    "minStackedDims": 1,
		    "maxStackedDims": Infinity
		};
		element.addFeed(ds1);
		
		//ms1: people
		var ms1 = {
		    "id": "sap.viz.ext.module.PopulationPyramid.MS1",
		    "name": "Y Axis",
		    "type": "Measure",
		    "min": 1,
		    "max": Infinity,
		    "mgIndex": 1
		};
		element.addFeed(ms1);
		
		flow.addElement({
			"element":element,
			"propertyCategory" : "plotArea"
		});
		sap.viz.extapi.Flow.registerFlow(flow);
    };
    flowRegisterFunc.id = "sap.viz.ext.populationpyramid";
    return {
        id : flowRegisterFunc.id,
        init : flowRegisterFunc
    };
});