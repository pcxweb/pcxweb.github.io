var svg = Snap("#svg");
var navTrigger = document.querySelector("#navTrigger");
var navContainer = document.querySelector(".navContainer");
var sectionHeader = document.querySelector(".sectionHeader");
var menu = document.querySelector("div.navContainer div.layout div.menu");
var p = svg.paper.path("M1000,0C1000,0,0,0,0,0C0,0,116,97,393,100C681,103,593,38,1000,0").attr({
	fill: "#ccc"	
});
var mark = true;
navTrigger.onclick = function(){
	if (mark)
	{
		p.animate({
		d : "M1000,0C1000,0,0,0,0,0C0,0,0,100,0,100C0,100,1000,100,1000,100",
		fill : "#ccc"
		},500,mina.linear);
		this.style.transform = "rotate(90deg)";
		navContainer.style.transform = "translate3d(0,0,0)";
		menu.classList.add("menu-show");
		menu.style.cssText = "opacity:1;transform:rotateX(0deg)";
		sectionHeader.style.margin = "5rem auto 0rem";
		mark = false;
	}else{
		p.animate({
		d : "M1000,0C1000,0,0,0,0,0C0,0,116,97,393,100C681,103,593,38,1000,0",
		fill : "#aaa"
		},500,mina.linear);
		this.style.transform = "rotate(0deg)";
		navContainer.style.transform = "translate3d(0,-80px,0)";
		menu.classList.remove("menu-show");
		menu.style.cssText = "opacity:0;transform:rotateX(-90deg)";
		sectionHeader.style.margin = "2rem auto";
		mark = true;
	}
	
}