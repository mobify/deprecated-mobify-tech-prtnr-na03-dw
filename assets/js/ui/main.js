// Scripts required in via this file will be combined into ui.js
require(
    [
        'view-scripts/global',
        'view-scripts/home',
        'view-scripts/category',
        'view-scripts/productlist'

        // Add additional UI scripts here
    ],
    function(
        globalUI,

        home,
        category,
        productlist
    ) {
        globalUI();
    },
    null,
    // ForceSync makes sure all templates have loaded before page scripts are
    // invoked
    true
);
