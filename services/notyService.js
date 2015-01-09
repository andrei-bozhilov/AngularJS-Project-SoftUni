(function () {
    angular.module('app')

    .factory('notyService', function () {
        var notyService = {}

        function generate(type, text, time) {
            var n = noty({
                text: text,
                type: type,
                dismissQueue: true,
                layout: 'topCenter',
                theme: 'relax',
                maxVisible: 10,
                timeout: time
            });
        }

        notyService = {
            success: function success(text) {
                generate('success', text, 2000);
            },
            error: function error(text) {
                generate('error', text, 5000);
            },
            information: function (text) {
                generate('information', text, 5000);
            }
        }

        return notyService;
    })
}())
