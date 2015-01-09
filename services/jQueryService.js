(function () {
    angular.module('app')

    .factory('jQueryService', ['userSession', function (userSession) {
        var jQueryService = {
            addActiveClassToLi: function (elementIdName) {
                var element = $("#" + elementIdName);
                element.on('click', 'li', function (ev) {
                    $("#" + elementIdName + ' li').removeClass();
                    $(ev.target).parent().addClass('active');
                })
                console.log("123");

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
            logUser: function logUser(currentViewLiInnerText, isRightSideMenuVisible) {
                //do this only when left menu don't have elements
                if ($('#left-side-menu ul li').length === 1) {
                    $('#header').text('Ads-Home').parent()
                        .append($('<a>').text('Logout').addClass('pull-right logout-li').attr('href', '#/user/logout'))
                        .append($('<span>').text(userSession.getCurrentUser().username).addClass('user-span pull-right'));

                    $('#left-side-menu ul')
                        .html("")
                        .append('<li><a href="#/user/home/">Home</a></li>')
                        .append('<li><a href="#/user/ads">My Ads</a></li>')
                        .append('<li><a href="#/user/ads/publish">Publish New Ad</a></li>')
                        .append('<li><a href="#/user/profile">Edit Profile</a></li>');

                    jQueryService.addActiveClassToLi('menu-panel');
                    $('#login-register-menu').hide();
                }

                $('#left-side-menu ul li').removeClass();
                $('#left-side-menu ul li a').each(function (number, element) {
                    if ($(element).text() == currentViewLiInnerText) {
                        $(element).parent().addClass('active');
                    }
                })

                if (isRightSideMenuVisible) {
                    $('#right-side-menu').show();
                } else {
                    $('#right-side-menu').hide();
                }
            },
            getBase64Image: function getBase64FromImageUrl(URL) {
                var img = new Image();
                img.src = URL;


                img.onload = function () {


                    var canvas = document.createElement("canvas");
                    canvas.width = this.width;
                    canvas.height = this.height;

                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(this, 0, 0);


                    var dataURL = canvas.toDataURL("image/png");

                    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

                }
            }
        }




        return jQueryService;
    }]);
}())