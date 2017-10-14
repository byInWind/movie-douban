angular.module('search',[])

  .controller('searchCtrl', ['$scope','myService', '$stateParams', '$location',function ($scope, myService, $stateParams,$location) {
    var searchInfo = $stateParams.searchInfo;
    var page = $stateParams['page'];
    var count = 9;
    var start = (page - 1) * count;
    var totalPage = 0;
    myService.myJsonp('https://api.douban.com/v2/movie/search', {
      q:searchInfo,
      count:count,
      start:start
    }, function (res) {
      $scope.result = res;
      totalPage = Math.ceil(res.total/count);
      //由于是原生jsonp方法
      $scope.$apply();
    })
    $scope.changePage = function(type){
      if(type == 'next'){
        // 下一页
        page++;
        if(page > totalPage){
          page = totalPage
        }
      }else if(type == 'prev'){
        // 上一页
        page--;
        if(page < 1){
          page = 1;
        }

      }
      // 跳转页面
      $location.path('/search/'+page+'/searchInfo');
    }
  }])
