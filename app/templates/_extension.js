/*global define,require,window,console,_ */
/*jslint    devel:true,
            white: true
 */
define([
        'jquery',
        'underscore',
        './<%= extensionName.toLowerCase() %>-properties'
],
function ($, _, properties) {

    'use strict';

    return {

        // Properties
        definition: properties,
        // (Properties)

        // Angular Template
        //template: '',
        // (Angular Template)

        // Initial Properties
        initialProperties: {
            qHyperCubeDef: {
                qDimensions: [],
                qMeasures: [],
                qInitialDataFetch: [{
                    qWidth: 2,
                    qHeight: 50
                }]
            }
        },
        // (Initial Properties)

        // Snapshot yes/no
        snapshot: {
            canTakeSnapshot: true
        },
        // (Snapshot)

        // Resize
        resize : function() {
            //do nothing
        },
        // (Resize)

//        clearSelectedValues : function($element) {
//
//        },

        // Angular Controller
        controller: ['$scope', function ($scope) {

        }],
        // (Angular Controller)

        // Paint
        paint: function ($element, layout) {
      
            console.groupCollapsed('Basic Objects');
            console.info('$element:');
            console.log($element);
            console.info('layout:');
            console.log(layout);
            console.groupEnd();

            $element.html('This is extension "<%= extensionName%>"');
        }
    };

});