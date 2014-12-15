define([
    '$'
],
function($) {
    var productUI = function() {
        // Add any scripts you would like to run only on the product page here
        $('.m-scooch').scooch();

        var $form = $('form.pdpForm');
        var action = $form.attr('action');
        var replacement = action.replace('Product-Detail', 'Product-Variation');
        $form.attr('action', replacement);
    };

    return productUI;
});
