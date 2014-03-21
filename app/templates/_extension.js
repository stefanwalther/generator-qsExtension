define([
    'jquery',
    './<%= extensionName.toLowerCase() %>-properties'
],
function ($, properties) {

    return {

        //#region Properties
        definition: properties,
        //#endregion

        //#region Template
        //template: '',
        //#endregion

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

        //#region Snapshot Definition
        snapshot: {
            canTakeSnapshot: true
        },
        //#endregion

        //#region Resize
        resize : function() {
            //do nothing
        },
        //#endregion

        //#region clearSelectedValues
        clearSelectedValues : function($element) {

        },
        //#endregion

        //#region Controller
        controller: [
            ['$scope'],
            function ($scope) {}

        ],
        //#endregion

        //#region Paint
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
        //#endregion
    };

});