
armstrong.controller("amrCtrl",['$scope', function($scope){
    $scope.armstrong=function(){
        $scope.Math=Math;
        $scope.rem=0;
        $scope.l=0;
        $scope.q=0;
        $scope.num2=$scope.num;
        $scope.num1=$scope.num;
        while($scope.num2>0){
            $scope.num2=parseInt($scope.num2/10);
            $scope.l++;
            
        }
        while($scope.num>0)
        {
            $scope.rem=parseInt($scope.num%10);
            $scope.q=($scope.q)+Math.pow($scope.rem,$scope.l);
            $scope.num=parseInt($scope.num/10);
        }
        if($scope.num1==$scope.q)
        {
            $scope.result= "it is armstrong number";
        }
        else{
            $scope.result="it is not an armstrong number";
        }

    }

}]);