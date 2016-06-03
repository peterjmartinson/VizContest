define("populationpyramid-bundle", ["sap_viz_ext_populationpyramid-src/js/flow", "css!sap_viz_ext_populationpyramid-src/style/default.css"], function(flowDefinition,cssStyleDeclaration) {
    var cssString="", rules, i;
    if (cssStyleDeclaration && cssStyleDeclaration.cssRules) {
            rules = cssStyleDeclaration.cssRules;
        for (i=0;i<rules.length;i++) {
            cssString += rules.item(i).cssText;
        }
    }
    var vizExtImpl = {
        viz   : [flowDefinition],
        module: [],
        feeds : [],
        cssString : cssString
    };
    var vizExtBundle = sap.bi.framework.declareBundle({
        "id" : "sap.viz.ext.populationpyramid",
        "version" : "1.0.0",
        "components" : [{
            "id" : "sap.viz.ext.populationpyramid",
            "provide" : "sap.viz.impls",
            "instance" : vizExtImpl,
            "customProperties" : {
                "name" : "Population Pyramid",
                "description" : "",
                "icon" : {"path" : ""},
                "category" : [],
                "resources" : [{"key":"sap.viz.api.env.Template.loadPaths", "path":"./sap_viz_ext_populationpyramid-src/resources/templates"}]
            }
        }]
   });
   // sap.bi.framework.getService is defined in BundleLoader, which is
   // always available at this timeframe
   // in standalone mode sap.viz.js will force load and active the
   // "sap.viz.aio" bundle
   if (sap.bi.framework.getService("sap.viz.aio", "sap.viz.extapi")) {
       // if in standalone mode, sap.viz.loadBundle will be available,
       // and we load the bundle directly
       return sap.bi.framework.getService("sap.viz.aio", "sap.viz.extapi").core.registerBundle(vizExtBundle);
   } else {
       // if loaded by extension framework, return the "sap.viz.impls"
       return vizExtBundle;
   }
});