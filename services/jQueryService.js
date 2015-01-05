(function () {
    angular.module('app')

    .factory('jQueryService', [function () {
        var jQueryService = {
            addActiveClassToLi: function (elementIdName) {
                var element = $("#" + elementIdName);
                element.on('click', 'li', function (ev) {
                    $("#" + elementIdName + ' li').removeClass();
                    $(ev.target).parent().addClass('active');
                })
            },
            resizeImgHeight: function resizeImgHeight() {
                var imgWidth = $('#view img').width();
                if (imgWidth > 300) {
                    $('#view img').width(imgWidth / 2)
                    $('#view img').height(imgWidth / 2);
                } else {
                    $('#view img').removeAttr('style');
                    $('#view img').height(imgWidth);
                }
            },
    };



    return jQueryService;
}]);
}())