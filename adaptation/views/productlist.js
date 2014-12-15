define([
    '$',
    'views/base',
    'dust!templates/productlist'
],
function($, BaseView, template) {
    return {
        template: template,
        extend: BaseView,
        context: {
            templateName: 'productlist',
            products: function() {
                var $products = $('#search-result-items');
                $products.find('div.product-compare').remove();
                return $products;
            }
        }
    };
});
