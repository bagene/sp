
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
        $scope.searchlist = [];
        $scope.nowplayingid = 0;
        $scope.nowplaying = [];
        $scope.nowplayingindex = 0;
        $scope.nowplayingimg = '';
        $scope.nowplayingtitle = '';
        $scope.nowplayingtime = 0;
        $scope.nowplayinginfo = [];
        $scope.genre = [
            'All Songs',
            'Pop',
            'Rock',
            'RnB',
            'Reggae',
            'Blues',
            'Jazz',
            'Classical',
            'Electronic'
        ];
        $scope.playing = false;
        var ap = new AprioriMod();

        $scope.play = function(songid,songindex){
            //console.log("Song History");
            //console.log($scope.songhistory);
            //console.log("List of All Songs");
            //console.log($scope.localsongs);

            if(songid == undefined){
                if($scope.searching == false){
                    songid = $scope.localsongs[0].id;
                }else{
                    songid = $scope.searchlist[0].id;
                }
            }

            $scope.playing = true;
            //console.log("Song Index : " + songindex);
            //console.log("nowplayingid = " + $scope.nowplayingid + "songid = " + songid);
            if($scope.nowplayinginfo.id == songid && songid !=0){
                $scope.nowplaying.resume();
                //console.log("Resuming : " + $scope.nowplayinginfo.title);
            }else{

                if($scope.searching == false){
                    $scope.nowplayinginfo = $scope.localsongs[songindex];
                }else{
                    $scope.nowplayinginfo = $scope.searchlist[songindex];
                }


                $scope.nowplayingindex = songindex;
                $scope.updatenowplaying();
                $scope.addhistory();
                //console.log($scope.songhistory);
                SC.stream('/tracks/' + songid, {onfinish: function(){
                    //console.log('track finished');
                    if($scope.searching == false){
                        $scope.play($scope.localsongs[$scope.nowplayingindex+1].id,$scope.nowplayingindex+1);
                    }else{
                        $scope.play($scope.searchlist[$scope.nowplayingindex+1].id,$scope.nowplayingindex+1);
                    }
                    $scope.$apply();
                },whileplaying: function () {
                    $scope.nowplayingtime = this.position;
                    $scope.$apply();
                }}, function(sound,error){
                    //if (error) alert('Error: ' + error.message);
                    soundManager.stopAll();
                    $scope.nowplaying = sound;
                    $scope.nowplaying.play();
                    //console.log(sound);

                    //console.log("Now Playing : " + $scope.nowplayinginfo.title);
                    //console.log($scope.nowplayinginfo);
                });
            }
        };

        $scope.songhistory = [];
        $scope.addhistory = function(){
            $scope.songhistory.push($scope.nowplayinginfo);
        };

        $scope.searching = false;
        $scope.getsearch = function(){
            var search = prompt("Search");
            if(search != null){
                $scope.searchlist = [];
                $scope.headtitle = search;
                $scope.searching = true;
                SC.get('/tracks', { q:search , limit:$scope.limiter }, function(tracks) {
                    var counter = 0;
                    angular.forEach(tracks, function(item){
                        if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                            $scope.searchlist.push(item);
                            counter++;
                        }
                    });
                    //console.log("Search Result : " + counter);
                    $scope.$apply();
                });
            }
        };

        $scope.pause = function(){
            //console.log("PAUSE");
            $scope.playing = false;
            $scope.nowplaying.pause();
        };

        $scope.next = function(){
            if($scope.searching == false){
                $scope.play($scope.localsongs[$scope.nowplayingindex+1].id,$scope.nowplayingindex+1);
            }else{
                $scope.play($scope.searchlist[$scope.nowplayingindex+1].id,$scope.nowplayingindex+1);
            }
        };

        $scope.prev = function(){
            if($scope.searching == false){
                $scope.play($scope.localsongs[$scope.nowplayingindex-1].id,$scope.nowplayingindex-1);
            }else{
                $scope.play($scope.searchlist[$scope.nowplayingindex-1].id,$scope.nowplayingindex-1);
            }
        };

        $scope.updatenowplaying = function(){
            if($scope.searching == false){
                $scope.nowplayingimg = $scope.localsongs[$scope.nowplayingindex].artwork_url;
                $scope.nowplayingtitle = $scope.localsongs[$scope.nowplayingindex].title;
            }else{
                $scope.nowplayingimg = $scope.searchlist[$scope.nowplayingindex].artwork_url;
                $scope.nowplayingtitle = $scope.searchlist[$scope.nowplayingindex].title;
            }
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

        /*$scope.skip = function(){
            //$scope.nowplaying.seek(200000);
            console.log();
            $scope.nowplaying.currentTime()
        }*/

        $scope.changegenre = function(genre){
            $scope.searching = false;
            if(genre == 'All Songs'){
                $scope.sortby = '';
            }else{
                $scope.sortby = genre;
            }
            $scope.headtitle = genre;
        };

        $scope.limiter = 200;
        $scope.durationlimitfrom = 150000;
        $scope.durationlimitto = 600000;
        $scope.loadlocaltracks = function(){

            SC.get('/tracks', { genres: $scope.genre[1] , limit:$scope.limiter }, function(tracks) {
               var counter = 0;
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                        counter++;
                    }
                });
                console.log($scope.genre[1] + " : " + counter);

                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[2] , limit:$scope.limiter }, function(tracks) {
                var counter = 0;
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                        if(counter < 2){
                            $scope.songhistory.push(item);
                        }
                        counter++;
                    }
                });
                //console.log($scope.genre[2] + " : " + counter);
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[3] , limit:$scope.limiter }, function(tracks) {
                var counter = 0;
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                        if(counter < 3){
                            $scope.songhistory.push(item);
                        }
                        counter++;
                    }
                });
                //console.log($scope.genre[3] + " : " + counter);
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[4] ,limit:$scope.limiter }, function(tracks) {
                var counter = 0;
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                        if(counter == 0){
                            $scope.songhistory.push(item);
                        }
                        counter++;
                    }
                });
                //console.log($scope.genre[4] + " : " + counter);
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[5], limit:$scope.limiter }, function(tracks) {
                var counter = 0;
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                        counter++;
                    }
                });
                //console.log($scope.genre[5] + " : " + counter);
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[6], limit:$scope.limiter }, function(tracks) {
                var counter = 0;
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                        counter++;
                    }
                });
                //console.log($scope.genre[6] + " : " + counter);
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[7], limit:$scope.limiter }, function(tracks) {
                var counter = 0;
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                        if(counter < 4){
                            $scope.songhistory.push(item);
                        }
                        counter++;
                    }
                });
                //console.log($scope.genre[7] + " : " + counter);
                $scope.$apply();
            });

            SC.get('/tracks', { genres: $scope.genre[8], limit:$scope.limiter }, function(tracks) {
                var counter = 0;
                angular.forEach(tracks, function(item){
                    if(item.streamable == true && item.duration > $scope.durationlimitfrom && item.duration < $scope.durationlimitto) {
                        $scope.localsongs.push(item);
                        counter++;
                    }
                });
                //console.log($scope.genre[8] + " : " + counter);
                $scope.$apply();
            });


        };

        $scope.scplaying = false;

        $scope.pageSize = 10;
        $scope.selectedPage = 1;
        $scope.pageresult = 0;

        $scope.getrecommendation = function(){
            //console.log($scope.localsongs);
            //$scope.result = $scope.gettracks('country');
            //console.log($scope.result);

                ap.getBaseTracks($scope.songhistory);
                ap.getTracks($scope.localsongs);
                ap.run();

                $scope.result = ap.getFreqTracks();
                $scope.pageresult = $scope.result.length;
                $scope.maxPage = Math.ceil($scope.result.length/$scope.pageSize);


        };

        $scope.scnowplaying = function(){
            $scope.scplaying = true;
        };

        $scope.scplayer = function(permalink_url) {
            $scope.pause();
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
        };

        $scope.selectNextPage = function(){
            if($scope.selectedPage<$scope.result.length/$scope.pageSize)
                $scope.selectedPage++;

        };

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