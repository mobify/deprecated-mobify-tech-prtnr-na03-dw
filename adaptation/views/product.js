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
                var $products = $('#pdpMain');

                $products.find('div.product-image-container').remove();
                $products.find('#product-content div.product-review-links').remove();
                $products.find('div.recommendations.cross-sell').remove();
                $products.find('div.product-tabs').remove();
                $products.find('h1.product-name').remove();
                $products.find('div.product-actions').remove();

                return $products;
            },
            minicart: function() {
                return $('#mini-cart');
            }
        }
    };
});
