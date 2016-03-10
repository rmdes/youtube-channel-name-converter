angular.module('app', ['jtt_aping']);

angular.module('app')
    .controller('appController', function ($scope, jsonloaderFactory) {

        $scope.isError = false;
        $scope.errorMessage = "";
        $scope.channelId = "";

        $scope.getChannelId = function () {

            $scope.channelId = "";
            $scope.isError = false;
            $scope.errorMessage = "";

            if ($scope.channelName) {
                jsonloaderFactory.getJsonData({path: "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDsGZDPI461UR5JvTysAqv7PW7HSzj50KU&forUsername=" + $scope.channelName + "&part=id"})
                    .then(function (_data) {

                        console.log(_data);

                        if (_data.data && _data.data.items && _data.data.items[0] && _data.data.items[0].id) {
                            $scope.channelId = _data.data.items[0].id;
                        } else {
                            $scope.isError = true;
                            $scope.errorMessage = "No matching channel";
                        }
                    });
            } else {
                $scope.isError = true;
                $scope.errorMessage = "No Channel Name defined";
            }
        };
    });