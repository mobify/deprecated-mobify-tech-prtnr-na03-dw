define([
    '$',
    'fastclick',
    'pikabu',
    'deckard'
],
function($, fastclick, Ppikabu) {

    var globalUI = function() {
        fastclick.attach(document.body);

        // Add any scripts you would like to run on ALL pages here

        // Pikabu menu slideout
        var pikabu = new Pikabu({
        	viewportSelector: '.m-pikabu-viewport',
            widths: {
                left: '80%',
                right: '80%'
            }
        });
    };

    return globalUI;
});
