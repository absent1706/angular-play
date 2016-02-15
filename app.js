(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(tabNum) {
      this.tab = tabNum;
    }
    this.isSelected = function(tabNum) {
      return this.tab === tabNum;
    }
  });

  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [ ]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "http://lorempixel.com/100/100/food/1",
      "http://lorempixel.com/100/100/food/3",
      "http://lorempixel.com/100/100/food/4"
    ]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "http://lorempixel.com/100/100/food/6",
      "http://lorempixel.com/100/100/food/7",
      "http://lorempixel.com/100/100/food/9"
    ]
  }];
})();
