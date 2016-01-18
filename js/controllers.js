
Apriori.config(['$interpolateProvider', function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);

Apriori.controller('playerController', [
    '$scope',
    '$http',
    function($scope,$http){
        $scope.result = [];
        $scope.songs = [
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Pasko na Sinta ko',duration:'3:12'},
            {title:'Pasko na Sinta ko',duration:'3:12'},
            {title:'Pasko na Sinta ko',duration:'3:12'},
            {title:'Pasko na Sinta ko',duration:'3:12'},
            {title:'Pasko na Sinta ko',duration:'3:12'},
            {title:'Pasko na Sinta ko',duration:'3:12'},
            {title:'Pasko na Sinta ko',duration:'3:12'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Paano ang Puso Ko',duration:'4:25'},
            {title:'Buko',duration:'5:11'}
        ];
        $scope.playing = false;
        $scope.title = "hello";
        $scope.play = function(){
           $scope.playing = true;
        };
        $scope.pause = function(){
            $scope.playing = false;
        };


        SC.initialize({
            client_id: '28584cabeeb12dd1e9e08a24776e0684'
        });
        $scope.scplaying = false;

        $scope.pageSize = 10;
        $scope.selectedPage = 1;
        $scope.pageresult = 0;

        $scope.getinfo = function(){

            SC.get('/tracks', { genres: 'jrock', q:'one ok rock', limit:100 }, function(tracks) {
               $scope.result = tracks;
               console.log($scope.result);

                $scope.pageresult = $scope.result.length;
                $scope.maxPage = Math.ceil($scope.result.length/$scope.pageSize);
            });


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
