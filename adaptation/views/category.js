define([
    '$',
    'views/base',
    'dust!templates/category'
],
function($, BaseView, template) {
    return {
        template: template,
        extend: BaseView,
        context: {
            templateName: 'category',
            categories: function() {
                return $('div.category-refinement ul');
            }
        }
    };
});
