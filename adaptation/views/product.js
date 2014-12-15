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
                $images = $('.product-image-container');

                var collection = [];

                var $thumbs = $images.find('img.productthumbnail').each(function() {
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
