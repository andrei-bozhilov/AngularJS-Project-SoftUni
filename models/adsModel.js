(function () {
    angular.module('app')

    .factory('adsModel', function (baseUrl, requester) {
        adsModel = {
            getAll: function (headers, pageSize, startPage, townId, categoryId) {
                var url = baseUrl + "/ads";
                var params = {
                    pagesize: pageSize,
                    startpage: startPage,
                    townid: townId,
                    categoryid: categoryId
                }
                return requester.get(url, headers, params);
            },



        };




        return adsModel;
    })
}())