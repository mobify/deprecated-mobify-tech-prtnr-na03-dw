define([
    '$',
    'adaptivejs/router',
    'views/home',
    'views/category',
    'views/productlist',
    'views/product',
    'views/cart'
],
function($, Router, Home, Category, ProductList, Product, Cart) {
    var router = new Router();

    router
        .add(Router.selectorMatch('div.pt_storefront'), Home)
        .add(Router.selectorMatch('div.category-main-banner'), Category)
        .add(Router.selectorMatch('#search-result-items'), ProductList)
        .add(Router.selectorMatch('#pdpMain'), Product)
        .add(Router.selectorMatch('#wrapper.pt_cart'), Cart)

    return router;
});
