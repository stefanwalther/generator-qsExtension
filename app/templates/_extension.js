/*global define,require,window,console,_ */
/*jslint    devel:true,
            white: true
 */
define([
        'jquery',
        'underscore',
        './<%= extensionName.toLowerCase() %>-properties',
        'text!./lib/css/style.css'
],
function ($, _, properties, css) {
    'use strict';

    return {

        // Properties
        definition: properties,
        // (Properties)

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


        // Angular Template
        //template: '',
        // (Angular Template)


        // Angular Controller
        controller: ['$scope', function ($scope) {

        }],
        // (Angular Controller)

        // Paint Method
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