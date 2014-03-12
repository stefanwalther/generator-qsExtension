define([
    'jquery',
    './<%= extensionName.toLowerCase() %>-properties'
],
function ($, properties) {

    return {

        // Properties
        definition: properties,

        // Template
        //template: '',

        // Initial Properties
        //initialProperties: {
        //    qHyperCubeDef: {
        //        qDimensions: [],
        //        qMeasures: [],
        //        qInitialDataFetch: [{
        //            qWidth: 2,
        //            qHeight: 50
        //        }]
        //    }
        //},

        // Snapshot Definition
        snapshot: {
            canTakeSnapshot: true
        },

        // Paint
        paint: function ($element, layout) {
      
            //#region Console: Basic objects
            console.groupCollapsed('Basic Objects');
            console.info('$element:');
            console.log($element);
            console.info('layout:');
            console.log(layout);
            console.groupEnd();
            //#endregion

            $element.html('This is extension <%= extensionName%>');


        }
    };

});