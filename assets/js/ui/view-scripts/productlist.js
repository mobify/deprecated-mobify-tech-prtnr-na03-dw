define([
    '$'
],
function($) {
    var productlistUI = function() {
        // Add any scripts you would like to run only on the productlist page here
        $('.product-tile').each(function() {
            $this = $(this).removeAttr('style');
        });
    };

    return productlistUI;
});
