/*global define*/
define([], function () {
  'use strict';

  // ****************************************************************************************
  // Dimensions & Measures
  // ****************************************************************************************
    var dimensions = {
        uses: "dimensions",
        min: 0,
        max: 1
    };

    var measures = {
        uses: "measures",
        min: 0,
        max: 1
    };

    var sorting = {
        uses: "sorting"
    };

  // ****************************************************************************************
  // Other Settings
  // ****************************************************************************************

    var testSetting = {
        ref: "settings.test",
        label: "Test Setting:",
        type: "string",
        expression: "optional",
        show: true
    };

  // ****************************************************************************************
  // Property Panel Definition
  // ****************************************************************************************

    var propertyPanelDefinition = {
        uses: "settings",
        items: {
            settings: {
                type: "items",
                label: "Settings",
                items: {
                    testSetting: testSetting
                }
            }
        }
    };


    // Return values
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorting: sorting,
            //addons: addons,
            settings: propertyPanelDefinition

        }
    };

});
