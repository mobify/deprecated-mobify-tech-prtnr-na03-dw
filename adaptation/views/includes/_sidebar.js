define(['$'], function($) {
    return {
        context: {
            navigation: function() {
                return $('ul.menu-category > li > a');
            }
        }
    };
});
