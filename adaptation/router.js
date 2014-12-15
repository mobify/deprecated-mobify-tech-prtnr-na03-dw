define([
    '$',
    'adaptivejs/router',
    'views/home',
    'views/category',
    'views/productlist'
],
function($, Router, Home, Category, ProductList) {
    var router = new Router();

    router
        .add(Router.selectorMatch('div.pt_storefront'), Home)
        .add(Router.selectorMatch('div.category-main-banner'), Category)
        .add(Router.selectorMatch('#search-result-items'), ProductList)

    return router;
});
