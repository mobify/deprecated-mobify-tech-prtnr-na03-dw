define([
    '$',
    'views/base',
    'dust!templates/product'
],
function($, BaseView, template) {
    return {
        template: template,
        extend: BaseView,
        context: {
            templateName: 'product',
            name: function() {
                return $('h1.product-name');
            },
            images: function() {
                var collection = [];

                $('div.product-image-container img').each(function() {
                    var $this = $(this).attr('x-src').replace(/\/small\//, '/large/');
                    collection.push($this);
                });

                return collection;
            },
            products: function() {
                return $('#pdpMain');
            },
            minicart: function() {
                return $('#mini-cart');
            }
        }
    };
});
