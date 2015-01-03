(function () {
    angular.module('app')

    .factory('jQueryService', [function () {
        var jQueryService = {
            'addActiveClassToLi': function (elementIdName) {
                var element = $("#" + elementIdName);
                element.on('click', 'li', function (ev) {
                    $("#" + elementIdName + ' li').removeClass();
                    $(ev.target).parent().addClass('active');
                })
            },
        };



        return jQueryService;
    }]);
}())