(function(){
	var app = angular.module('store-products',[]);
	
	app.directive('productTitle',function(){
		return {
			restrict: 'E',  //here E because its whole element tag itself. it will be A if it is inside <h3> tag like <h3 product-title>
			templateUrl: 'product-title.html'
		};
		
	});
	
	app.directive('productPanels',function(){
		return{
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;
				
				this.selectTab = function (setTab){
					this.tab = setTab;
				};
				
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs:'panels'
		};
	});
})();