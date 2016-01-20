
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
        $scope.headtitle = 'All Songs'
        $scope.sortby = '';
        $scope.result = [];
        $scope.localsongs = [];
        $scope.nowplayingid = 0;
        $scope.nowplaying = [];
        $scope.nowplayingindex = 0;
        $scope.playing = false;
        $scope.play = function(songid,songindex){
            $scope.playing = true;
            console.log(songindex);
            console.log("nowplayingid = " + $scope.nowplayingid + "songid = " + songid);
            if($scope.nowplayingid == songid && songid !=0){
                $scope.nowplaying.resume();
                console.log("RESUMING");
            }else{
                console.log("NEW SONG PLAYING");
                if(songid == 0){
                    songid = $scope.localsongs[0].id;
                }

                $scope.nowplayingid = songid;
                $scope.nowplayingindex = songindex;
                SC.stream('/tracks/' + songid, {onfinish: function(){
                    console.log('track finished');
                    $scope.play($scope.localsongs[$scope.nowplayingindex+1].id,$scope.nowplayingindex+1);
                }}, function(sound){
                    soundManager.stopAll();
                    $scope.nowplaying = sound;
                    $scope.nowplaying.play();
                });
            }
        }



        $scope.pause = function(){
            console.log("PAUSE");
            $scope.playing = false;
            $scope.nowplaying.pause();
        };



        $scope.onload = function(){
            //$scope.loadlocaltracks()
        }

        /*$scope.getresult = [];
        $scope.gettracks = function(genre){
            if($scope.getresult.isEmpty == true){
                $scope.getresult = [];
            }
            SC.get('/tracks', { genres: genre, limit:100 }, function(tracks) {
                $scope.getresult = tracks;
                console.log($scope.getresult);
            });
            return $scope.getresult;
        }*/


        /*$scope.loadlocaltracks = function(){
            angular.forEach($scope.genres, function(item){
                angular.forEach($scope.gettracks(item), function(key){
                    $scope.localsongs.push(key);
                });
            });
            //console.log($scope.localsongs);
        }*/

        $scope.changegenre = function(genre){
            $scope.sortby = genre;
            if(genre == ''){
                $scope.headtitle = 'All Songs';
            }else{
                $scope.headtitle = genre;
            }
        }

        $scope.loadlocaltracks = function(){

            SC.get('/tracks', { genres: 'pop',duration: { from: 135000, to:500000 }, limit:100 }, function(tracks) {
                angular.forEach(tracks, function(item){
                    $scope.localsongs.push(item);
                });
            });

            SC.get('/tracks', { genres: 'rock',duration: { from: 135000, to:500000 }, limit:100 }, function(tracks) {
                angular.forEach(tracks, function(item){
                    $scope.localsongs.push(item);
                });
            });

            SC.get('/tracks', { genres: 'RnB',duration: { from: 135000, to:500000 }, limit:100 }, function(tracks) {
                angular.forEach(tracks, function(item){
                    $scope.localsongs.push(item);
                });
            });

            SC.get('/tracks', { genres: 'reggae',duration: { from: 135000, to:500000 }, limit:100 }, function(tracks) {
                angular.forEach(tracks, function(item){
                    $scope.localsongs.push(item);
                });
            });

            SC.get('/tracks', { genres: '70s',duration: { from: 135000, to:500000 }, limit:100 }, function(tracks) {
                angular.forEach(tracks, function(item){
                    $scope.localsongs.push(item);
                });
            });

            SC.get('/tracks', { genres: '80s',duration: { from: 135000, to:500000 }, limit:100 }, function(tracks) {
                angular.forEach(tracks, function(item){
                    $scope.localsongs.push(item);
                });
            });

            SC.get('/tracks', { genres: '90s',duration: { from: 135000, to:500000 }, limit:100 }, function(tracks) {
                angular.forEach(tracks, function(item){
                    $scope.localsongs.push(item);
                });
            });

            SC.get('/tracks', { genres: 'japanese',duration: { from: 135000, to:500000 }, limit:100 }, function(tracks) {
                angular.forEach(tracks, function(item){
                    $scope.localsongs.push(item);
                });
            });

            SC.get('/tracks', { genres: 'korean',duration: { from: 135000, to:500000 }, limit:100 }, function(tracks) {
                angular.forEach(tracks, function(item){
                    $scope.localsongs.push(item);
                });
            });

            SC.get('/tracks', { genres: 'tagalog',duration: { from: 135000, to:500000 }, limit:100 }, function(tracks) {
                angular.forEach(tracks, function(item){
                    $scope.localsongs.push(item);
                });
            });


            console.log($scope.localsongs);
        }

        $scope.scplaying = false;

        $scope.pageSize = 10;
        $scope.selectedPage = 1;
        $scope.pageresult = 0;

        $scope.getinfo = function(){
            $scope.loadlocaltracks();

            //$scope.result = $scope.gettracks('country');
            //console.log($scope.result);
            SC.get('/tracks', { genres: 'country', limit:100 }, function(tracks) {
                $scope.result = tracks;
            });
            $scope.pageresult = $scope.result.length;
            $scope.maxPage = Math.ceil($scope.result.length/$scope.pageSize);

        }

        $scope.scnowplaying = function(){
            $scope.scplaying = true;
        }

        $scope.scplayer = function(permalink_url) {
            $scope.scplaying = true;
            SC.oEmbed(permalink_url, { auto_play:true }, document.getElementById('player'));
        }

        $scope.backtolist = function(){
            $scope.scplaying = false;
        }

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
        }

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
        }

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