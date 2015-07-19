(function() { //closure
	var app = angular.module('gemStore', []);
	var gems = [ 
	    {
	    	name : 'Amber Gem',
	    	price : 11.66,
	    	description : 'Amber is fossilized tree resin (not sap), which has been appreciated for its color and natural beauty since Neolithic times.[2] Much valued from antiquity to the present as a gemstone, amber is made into a variety of decorative objects.[3] Amber is used as an ingredient in perfumes, as a healing agent in folk medicine, and as jewelry.',
	    	images : 'images/amber.png',
	    	reviews : [
	    	           {
	    	        	   stars: 5,
	    	        	   body: "I love this Product",
	    	        	   author: "joe@thomas.com"
	    	           },
	    	           {
	    	        	   stars: 1,
	    	        	   body: "this Product is not that great",
	    	        	   author: "tim@hater.com"
	    	           }
	    	           ],
	    	canPurchase : true,
	    	soldOut : false
	    },
	    {
	    	name : 'Emerald Gem',
	    	price : 62219.16,
	    	description : 'Emerald is a gemstone and a variety of the mineral beryl (Be3Al2(SiO3)6) colored green by trace amounts of chromium and sometimes vanadium.[2] Beryl has a hardness of 7.5–8 on the Mohs scale.[2] Most emeralds are highly included, so their toughness (resistance to breakage) is classified as generally poor.',
	    	images : 'images/emerald.png',
	    	reviews : [
	    	           {
	    	        	   stars: 5,
	    	        	   body: "I love this Product",
	    	        	   author: "joe@thomas.com"
	    	           },
	    	           {
	    	        	   stars: 1,
	    	        	   body: "this Product is not that great",
	    	        	   author: "tim@hater.com"
	    	           }
	    	           ],
	    	canPurchase : true,
	    	soldOut : false
	    },
	    {
	    	name : 'Opal Gem',
	    	price : 44.16,
	    	description : 'Opal is a hydrated amorphous form of silica; its water content may range from 3 to 21% by weight, but is usually between 6 and 10%. Because of its amorphous character, it is classed as a mineraloid, unlike the other crystalline forms of silica, which are classed as minerals. It is deposited at a relatively low temperature and may occur in the fissures of almost any kind of rock, being most commonly found with limonite, sandstone, rhyolite, marl, and basalt.',
	    	images : 'images/opal.png',
	    	reviews : [
	    	           {
	    	        	   stars: 5,
	    	        	   body: "I love this Product",
	    	        	   author: "joe@thomas.com"
	    	           },
	    	           {
	    	        	   stars: 1,
	    	        	   body: "this Product is not that great",
	    	        	   author: "tim@hater.com"
	    	           }
	    	           ],
	    	canPurchase : true,
	    	soldOut : false
	    },
	    {
	    	name : 'Peridot Gem',
	    	price : 62.83,
	    	description : 'Peridot is gem-quality olivine. Olivine is a silicate mineral with formula of (Mg, Fe)2SiO4. As peridot is the magnesium-rich variety (forsterite) the formula approaches Mg2SiO4.',
	    	images : 'images/peridot.png',
	    	reviews : [
	    	           {
	    	        	   stars: 5,
	    	        	   body: "I love this Product",
	    	        	   author: "joe@thomas.com"
	    	           },
	    	           {
	    	        	   stars: 1,
	    	        	   body: "this Product is not that great",
	    	        	   author: "tim@hater.com"
	    	           }
	    	           ],
	    	canPurchase : true,
	    	soldOut : false
	    },
	    {
	    	name : 'zircon Gem',
	    	price : 24,
	    	description : 'Zircon is a mineral belonging to the group of nesosilicates. Its chemical name is zirconium silicate and its corresponding chemical formula is ZrSiO4. A common empirical formula showing some of the range of substitution in zircon is (Zr1–y, REEy)(SiO4)1–x(OH)4x–y. Zircon forms in silicate melts with large proportions of high field strength incompatible elements. For example, hafnium is almost always present in quantities ranging from 1 to 4%. The crystal structure of zircon is tetragonal crystal system. The natural color of zircon varies between colorless, yellow-golden, red, brown, blue, and green. Colorless specimens that show gem quality are a popular substitute for diamond and are also known as "Matura diamond".',
	    	images : 'images/zircon.png',
	    	reviews : [
	    	           {
	    	        	   stars: 5,
	    	        	   body: "I love this Product",
	    	        	   author: "joe@thomas.com"
	    	           },
	    	           {
	    	        	   stars: 1,
	    	        	   body: "this Product is not that great",
	    	        	   author: "tim@hater.com"
	    	           }
	    	           ],
	    	canPurchase : true,
	    	soldOut : false
	    }
	    
	    ];

	app.controller('StoreController', function() {
		this.products = gems;
	});
	
	app.controller("PanelController", function(){
		this.tab = 1;
		
		this.selectTab = function (setTab){
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	
	app.controller("ReviewController", function(){
	this.review = {};
	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review = {};
	};
	});
	
})();
