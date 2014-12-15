define([
    '$',
    'adaptivejs/router',
    'views/home',
    'views/category',
    'views/productlist',
    'views/product'
],
function($, Router, Home, Category, ProductList, Product) {
    var router = new Router();

    router
        .add(Router.selectorMatch('div.pt_storefront'), Home)
        .add(Router.selectorMatch('div.category-main-banner'), Category)
        .add(Router.selectorMatch('#search-result-items'), ProductList)
        .add(Router.selectorMatch('#pdpMain'), Product)

    return router;
});
