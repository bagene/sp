
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

        $scope.play = function(){
           $scope.playing = true;
        };
        $scope.pause = function(){
            $scope.playing = false;
        };

        $scope.getinfo = function(){


            SC.initialize({
                client_id: '28584cabeeb12dd1e9e08a24776e0684'
            });

            var track_url = 'https://soundcloud.com/slaycaster/binay-x-roxas-ano-ano-ano-fistbump-remix';
            SC.oEmbed(track_url, { auto_play: true }).then(function(target) {
                console.log('oEmbed response: ', target);
                $scope.result = target;
                console.log($scope.result.title);
            });

        }


    }
]);
