
(function () {
    angular.module('app')

    .factory('jQueryService', ['userSession', '$routeParams', '$location', function (userSession, $routeParams, $location) {
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
            logUser: function logUser(currentViewLiInnerText, isRightSideMenuVisible, isMyAdsMenuVisible, headerName, isAdmin) {
                $('#header').text(headerName)
                //do this only when left menu don't have elements
                if ($('#left-side-menu #menu-panel ul li').length === 1) {

                    if (isAdmin) {
                        $('#header').parent()
                       .append($('<a>').text('Logout').addClass('pull-right logout-li').attr('href', '#/admin/logout'))
                       .append($('<span>').text(userSession.getCurrentUser().username).addClass('user-span pull-right'));
                    } else {
                        $('#header').parent()
                       .append($('<a>').text('Logout').addClass('pull-right logout-li').attr('href', '#/user/logout'))
                       .append($('<span>').text(userSession.getCurrentUser().username).addClass('user-span pull-right'));
                    }


                    if (isAdmin) {
                        $('#left-side-menu #menu-panel ul')
                          .html("")
                          .append('<li><a href="#/admin/ads/">Ads</a></li>')
                          .append('<li><a href="#/admin/users">Users</a></li>')
                          .append('<li><a href="#/admin/categories">Categories</a></li>')
                          .append('<li><a href="#/admin/towns">Towns</a></li>');

                        $('#header')
                            .parent()
                            .css('background-color', '#ffd966')
                            .css('color', 'black');
                    } else {
                        $('#left-side-menu #menu-panel ul')
                           .html("")
                           .append('<li><a href="#/user/home/">Home</a></li>')
                           .append('<li><a href="#/user/ads">My Ads</a></li>')
                           .append('<li><a href="#/user/ads/publish">Publish New Ad</a></li>')
                           .append('<li><a href="#/user/profile">Edit Profile</a></li>');
                    }


                    jQueryService.addActiveClassToLi('menu-panel');
                }

                $('#login-register-menu').hide();
                $('#left-side-menu #menu-panel ul li').removeClass();
                $('#left-side-menu #menu-panel ul li a').each(function (number, element) {
                    if ($(element).text() == currentViewLiInnerText) {
                        $(element).parent().addClass('active');
                    }
                })

                if (isRightSideMenuVisible) {
                    $('#right-side-menu').show();
                } else {
                    $('#right-side-menu').hide();
                }

                if (isMyAdsMenuVisible) {
                    $('#user-ads-menu').show();
                } else {
                    $('#user-ads-menu').hide();
                }
            }

        }

        return jQueryService;
    }]);
}())