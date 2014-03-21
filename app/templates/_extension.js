define([
    'jquery',
    './<%= extensionName.toLowerCase() %>-properties'
],
function ($, properties) {

    return {

        <%= vsRegion('Properties') %>
        definition: properties,
        <%= vsRegionEnd() %>

        <%= vsRegion('Template') %>
        //template: '',
        <%= vsRegionEnd() %>

        <%= vsRegion('Initial Properties') %>
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
        <%= vsRegionEnd() %>

        <%= vsRegion('Snapshot Definition') %>
        snapshot: {
            canTakeSnapshot: true
        },
        <%= vsRegionEnd() %>

        <%= vsRegion('Resize') %>
        resize : function() {
            //do nothing
        },
        <%= vsRegionEnd() %>

        <%= vsRegion('clearSelectedValues') %>
        clearSelectedValues : function($element) {

        },
        <%= vsRegionEnd() %>

        <%= vsRegion('Controller') %>
        controller: [
            ['$scope'],
            function ($scope) {}

        ],
        <%= vsRegionEnd() %>

        <%= vsRegion('Paint') %>
        paint: function ($element, layout) {
      
            <%= vsRegion('Console: Basic objects') %>
            console.groupCollapsed('Basic Objects');
            console.info('$element:');
            console.log($element);
            console.info('layout:');
            console.log(layout);
            console.groupEnd();
            <%= vsRegionEnd() %>

            $element.html('This is extension <%= extensionName%>');


        }
        <%= vsRegionEnd() %>
    };

});