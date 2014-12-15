define([
    '$',
    'views/base',
    'dust!templates/cart'
],
function($, BaseView, template) {
    return {
        template: template,
        extend: BaseView,
        context: {
            templateName: 'cart',
            primary: function() {
                var $primary = $('#primary');

                $primary.find('div.cart-footer').remove();

                var $img = $primary.find('.item-image img');
                var imagesrc = $img.attr('x-src').replace('/small/', '/large/');
                $img.attr('x-src', imagesrc);

                $primary.find('.item-price').prepend('<span class="sales">Sale Price</span>');
                $primary.find('.item-total').prepend('<span class="total">Total</span>');

                return $primary;
            }
        }
    };
});
