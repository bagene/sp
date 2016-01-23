
Apriori.config(['$interpolateProvider', function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);

Apriori.controller('playerController', [
    '$scope',
    '$http',
    function($scope,$http){

        SC.initialize({
            client_id: '28584cabeeb12dd1e9e08a24776e0684'
        });
        $scope.headtitle = 'All Songs';
        $scope.sortby = '';
        $scope.result = [];
        $scope.localsongs = [];
        $scope.nowplayingid = 0;
        $scope.nowplaying = [];
        $scope.nowplayingindex = 0;
        $scope.nowplayingimg = '';
        $scope.nowplayingtitle = '';
        $scope.nowplayingtime = 0;
        $scope.genre = [
            'All Songs',
            'Pop',
            'Rock',
            'RnB',
            'Reggae',
            '70s',
            '80s',
            '90s',
            'Japanese',
            'Korean',
            'Tagalog',
            'Love Song',
            'Alternative',
            'Acoustic',
            'Instrumental'
        ];
        $scope.playing = false;


        $scope.play = function(songid,songindex){
            $scope.playing = true;
            console.log(songindex);
            //console.log("nowplayingid = " + $scope.nowplayingid + "songid = " + songid);
            if($scope.nowplayingid == songid && songid !=0){
                $scope.nowplaying.resume();
                console.log("Resuming : " + $scope.localsongs[songindex].title);
            }else{
                if(songid == 0){
                    songid = $scope.localsongs[0].id;
                }

                $scope.nowplayingid = songid;
                $scope.nowplayingindex = songindex;
                $scope.updatenowplaying();
                $scope.addhistory(songindex);
                //console.log($scope.songhistory);
                SC.stream('/tracks/' + songid, {onfinish: function(){
                    console.log('track finished');
                    $scope.play($scope.localsongs[$scope.nowplayingindex+1].id,$scope.nowplayingindex+1);
                    $scope.$apply();
                },whileplaying: function () {
                    $scope.nowplayingtime = this.position;
                    $scope.$apply();
                }}, function(sound){
                    soundManager.stopAll();
                    $scope.nowplaying = sound;
                    $scope.nowplaying.play();
                    //console.log(sound);
                    console.log("Now Playing : " + $scope.localsongs[songindex].title);
                });
            }
        };

        $scope.songhistory = [];
        $scope.addhistory = function(songindex){
            $scope.songhistory.push($scope.localsongs[songindex]);
        };


        $scope.pause = function(){
            console.log("PAUSE");
            $scope.playing = false;
            $scope.nowplaying.pause();
        };

        $scope.next = function(){
            $scope.play($scope.localsongs[$scope.nowplayingindex+1].id,$scope.nowplayingindex+1);
        };

        $scope.prev = function(){
            $scope.play($scope.localsongs[$scope.nowplayingindex-1].id,$scope.nowplayingindex-1);
        };

        $scope.updatenowplaying = function(){
            $scope.nowplayingimg = $scope.localsongs[$scope.nowplayingindex].artwork_url;
            $scope.nowplayingtitle = $scope.localsongs[$scope.nowplayingindex].title;
        };



        $scope.onload = function(){
            $scope.loadlocaltracks();
        };

        /*$scope.getresult = [];
        $scope.gettracks = function(genre){

            SC.get('/tracks', { genres: genre, limit:100 }, function(tracks) {
                $scope.getresult = tracks;
                console.log($scope.getresult);
            });
            console.log($scope.getresult);
            return $scope.getresult;
        };


        $scope.loadlocaltracks2 = function(){
            angular.forEach($scope.genre, function(item){
                if($scope.genre.indexOf(item) > 0){
                    console.log(item);
                    angular.forEach($scope.gettracks(item), function(key){
                        $scope.localsongs.push(key);
                    });
                }
            });
            //console.log($scope.localsongs);
        };*/

        $scope.skip = function(){
            //$scope.nowplaying.seek(200000);
            console.log();
            $scope.nowplaying.currentTime()
        }

        $scope.changegenre = function(genre){
            if(genre == 'All Songs'){
                $scope.sortby = '';
            }else{
                $scope.sortby = genre;
            }
            $scope.headtitle = genre;
        };

        $scope.limiter = 100;
        $scope.durationlimitfrom = 150000;
        $scope.durationlimitto = 600000;
        $scope.loadlocaltracks = function(){

            SC.get('/tracks', { genres: $scope.genre[1] , limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[2] , limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[3] , limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[4] ,limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[5], limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[6], limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[7], limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[8], limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[9], limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[10], limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[11], limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[12],limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[13], limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[14] , limit:$scope.limiter }, function(tracks) {
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                    }
                });
                $scope.$apply();
            });

        };

        $scope.scplaying = false;

        $scope.pageSize = 10;
        $scope.selectedPage = 1;
        $scope.pageresult = 0;

        $scope.getrecommendation = function(){

            console.log($scope.localsongs);
            //$scope.result = $scope.gettracks('country');
            //console.log($scope.result);
            SC.get('/tracks', { genres: 'country', limit:100 }, function(tracks) {
                $scope.result = tracks;
                $scope.pageresult = $scope.result.length;
                $scope.maxPage = Math.ceil($scope.result.length/$scope.pageSize);
                $scope.$apply();
            });

        };

        $scope.scnowplaying = function(){
            $scope.scplaying = true;
        };

        $scope.scplayer = function(permalink_url) {
            $scope.scplaying = true;
            SC.oEmbed(permalink_url, { auto_play:true }, document.getElementById('player'));
        };

        $scope.backtolist = function(){
            $scope.scplaying = false;
        };

        $scope.index = 0;
        $scope.getresultperpage = function(){
            var result = [];
            var start_index = ($scope.selectedPage-1)*$scope.pageSize;
            var i = 0;

            angular.forEach($scope.result, function(item){
                if(start_index<=i && (i-start_index<$scope.pageSize)){
                    result.push(item);
                }
                i++;
            });

            $scope.index=i;
            return result;
        };

        $scope.selectPrevPage = function(){
            if($scope.selectedPage>1)
                $scope.selectedPage--;
        }

        $scope.selectNextPage = function(){
            if($scope.selectedPage<$scope.result.length/$scope.pageSize)
                $scope.selectedPage++;

        }

        $scope.activePage = function(index){
            return index==$scope.selectedPage ? "active" : "";
        };

        $scope.selectPage = function(page){
            $scope.selectedPage = page;
        }
    }
]);

Apriori.filter("pageCount", function(){
    return function(data,size,selected){
        var result = [];
        var min, max=1;
        if(selected<2){
            min=1;
        }else{
            min=selected-1;
            if(min+max>=Math.ceil(Object.keys(data).length/size)&&min>1){
                min-=1;
            }
        }
        if(angular.isObject(data)){
            for(var i=min;i<=min+2;i++){
                if(i<=Math.ceil(Object.keys(data).length/size))
                    result.push(i);
            }
            return result;
        }else{
            return [];
        }
    }
});

Apriori.filter('convertduration', function() {
    return function(millseconds) {
        var seconds = Math.floor(millseconds / 1000);
        var minutes = Math.floor(seconds/60);
        var second = Math.floor(seconds%60);
        var hours = Math.floor(minutes/60);
        var minute = Math.floor(minutes%60);

        var timeString = '';
        if(hours<=0){
            if(second<10){
                timeString = minutes + ':0' + second;
            }else{
                timeString = minutes + ':' + second;
            }

        }else{
            if(minute<10 && second<10){
                timeString = hours + ':0' + minute + ':0' + second;
            }else if(minute<10 && second>9){
                timeString = hours + ':0' + minute + ':' + second;
            }else if(minute>9 && second<10){
                timeString = hours + ':' + minute + ':0' + second;
            }else{
                timeString = hours + ':' + minute + ':' + second;
            }
        }
        return timeString;
    }
});