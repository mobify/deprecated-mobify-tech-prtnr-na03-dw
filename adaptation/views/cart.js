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

                $primary.children('div.cart-footer').remove();

                var $img = $primary.find('.item-image img').each(function() {
                    var $this = $(this);
                    var imagesrc = $this.attr('x-src').replace('/small/', '/large/');
                    $this.attr('x-src', imagesrc);
                });

                $primary.find('.item-price').prepend('<span class="sales">Sale Price</span>');
                $primary.find('.item-total').prepend('<span class="total">Total</span>');

                return $primary;
            }
        }
    };
});
