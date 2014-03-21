define([], function () {

    
    dimensions = {
        uses: "dimensions",
        min: 0,
        max: 1
    };

    measures = {
        uses: "measures",
        min: 0,
        max: 1
    };

    sorting = {
        uses: "sorting"
    };

    testSetting = {
        ref: "settings.test",
        label: "Test:",
        type: "string",
        expression: "optional",
        show: true
    };

    settings = {
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
            settings: settings

        }
    };

});