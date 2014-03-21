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


    // Return values
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorting: sorting,
            //addons: addons,
            //settings: settings

        }
    };

});