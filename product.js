(function() {
  var app = angular.module('store-products', []);

  app.directive('productTitle', function() {
    return {
      restrict: 'E', // element
      templateUrl: 'product-title.html'
    };
  });


  app.directive('productTabs', function() {
    return {
      restrict: 'E', // element
      templateUrl: 'product-tabs.html',
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
          this.tab = setTab;
        };
      },
      controllerAs: 'tab'
    };
  });

  app.directive('productGallery', function() {
    return {
      restrict: 'E', // element
      templateUrl: 'product-gallery.html',
      controller: function() {
        this.current = 0;

        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

})();
