define(['$'], function($) {
    return {
        context: {
            logo: function() {
                var $logo = $('.primary-logo img');
                return $logo;
            }
        }
    };
});
