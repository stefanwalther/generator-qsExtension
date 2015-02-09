/*global
            define,
            require,
            window,
            console,
            _
*/
/*jslint    devel:true,
            white: true
 */
define([
        'jquery',
        'underscore',
        './properties',
        './initialproperties',
        './lib/js/extensionUtils',
        'text!./lib/css/style.css'
],
function ($, _, props, initProps, extensionUtils, cssContent) {
    'use strict';

    extensionUtils.addStyleToHeader(cssContent);

    return {

        definition: props,
        initialProperties: initProps,
        snapshot: { canTakeSnapshot: true },
        resize : function( $element, layout ) {
            //do nothing
        },
//        clearSelectedValues : function($element) {
//
//        },


        // Angular Support (uncomment to use)
        //template: '',
        // Angular Controller
        //controller: ['$scope', function ($scope) {
		//
        //}],
        // (Angular Controller)


        paint: function ( $element, layout ) {

            console.groupCollapsed('Basic Objects');
            console.info('$element:');
            console.log($element);
            console.info('layout:');
            console.log(layout);
            console.groupEnd();

            $element.empty();
            var $helloWorld = $(document.createElement('div'));
            $helloWorld.addClass('hello-world');
            $helloWorld.html('Hello World from the extension "<%= extensionName%>"');
            $element.append($helloWorld);

        }
    };

});
