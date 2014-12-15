define([
    '$'
],
function($) {
    var homeUI = function() {
        // Add any scripts you would like to run only on the home page here
        $('.m-scooch').scooch();
    };

    return homeUI;
});
