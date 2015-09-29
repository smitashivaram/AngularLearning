(function()
{
	var app=angular.module('gemStore',[]);
	app.controller('StoreController',function()
	{
		this.products=gems;
	});
	app.controller('PanelController',function()
	{
		this.tab=1;
		//this.printMessage=function()
		//{
		//	this.message="HelloWorld";
		//};
		this.selectTab=function(setTab){
			this.tab=setTab;
		};
		this.isSelected=function(checkTab){
			return this.tab==checkTab;
		};
	});
	var gems=[
	{name:'Topaz',colour:'Yellow',price:100.0,images:[{full:'topaz.jpg',thumb: 'topaz.jpg'}],canPurchase:true,soldOut:false,description:'Beautifully cut yellow topaz. Very high quality'},
	{name:'Turquoise',colour:'Blue',price:70.0,images:[{full:'turquoise.jpg',thumb: 'turquoise.jpg'}],canPurchase:true,soldOut:true,description:'Chinese Turqoise. Cabochon stone'},
{name:'Coral',colour:'Red',price:112,images:[{full:'coral.jpg',thumb: 'coral.jpg'}], canPurchase:false,soldOut:false,description:'Australian red coral. 2 carat'},
	{name:'Amethyst',colour:'Purple',price:60,images:[{full:'amethyst.jpg',thumb: 'amethyst.jpg'}], canPurchase:true,soldOut:false,description:'Cut and Polished Amethyst.Can be mounted on pendant, ring or earring'},
	{name:'Emerald',colour:'Green',price:119,images:[], canPurchase:true,soldOut:false, description: ' Beautiful Emeral gemstone'}]
})();	