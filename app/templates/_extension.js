/*global define,require,window,console,_ */
/*jslint    devel:true,
            white: true
 */
define([
        'jquery',
        'underscore',
        './<%= extensionNameSafe.toLowerCase() %>-properties',
        './<%= extensionNameSafe.toLowerCase() %>-initialproperties',
        'text!./lib/css/style.css'
],
function ($, _, props, initProps, cssContent) {
    'use strict';

    $("<style>").html(cssContent).appendTo("head");

    return {

        definition: props,
        initialProperties: initProps,

        snapshot: { canTakeSnapshot: true },

        resize : function() {
            //do nothing
        },

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
        // (Paint Method)
    };

});