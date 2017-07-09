// 获取id
function id(obj) {
	return document.getElementById(obj);
}
// 事件绑定
function bind(obj, ev, fn) { 
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
// 视口宽高
function view(){
	return {
		// documentElement可返回根节点，document.documentElement（html）是文档对象根节点(html)的引用。
		w:document.documentElement.clientWidth,
		h:document.documentElement.clientHeight
	}
}

// 添加类
function addClass(obj,sClass){
	var aClass = obj.className.split(' ');
	// console.log(aClass)
	if(!obj.className){
		obj.className = sClass;
		return;
	}
	for (var i = 0; i < aClass.length; i++) {
		if(aClass[i] === sClass) return
	}
	obj.className +=' '+sClass;
}
// 删除类
function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}
// 页面跳转,图片加载完之后跳转

function fnLoad(){
	var oTime = new Date().getTime()
	var  oW = id("welcome");
	var arr = [""];
	var bImgLoad = true;//图片是否加载完
	var bTime = false;
	var oTimer = 0;
	bind(oW,"webkitTransitionEnd",end);
	bind(oW,"transitionend",end);
	oTimer = setInterval(function(){
		if(new Date().getTime() - oTime>=5000){
			bTime = true;
		}
		if(bImgLoad && bTime){
			clearInterval(oTimer)
			oW.style.opacity = 0;
		}
	},1000)
	function end(){
		removeClass(oW,"pageShow");
		fnTab()
	}
	// for (var i = 0; i < arr.length; i++) {
	// 	var oImg = new Image();
	// 	Image.src = arr[i];
	// 	oImg.onload = function(){

	// 	}
	// }
	// var imgNum=$('img').length;
	// $('img').load(function(){
	//     if(!--imgNum){
	//         // 加载完成
	//     }
	// });
}
// 去掉默认事件,当有滚动条的时候不需要添加
// bind(document,"touchmove",function(ev){
// 	ev.preventDefault();
// })
// 轮播图
function fnTab(){
	var oTab = id("tabPic");
	var oList = id("piclist");
	var aNav = oTab.getElementsByTagName('nav')[0].children;
	// alert(aNav.length)
	var iNow = 0;
	var iX = 0;
	var iW = view().w;
	var oTimer = 0;
	var iStartTouchX=0;
	var iStartX=0;
	if(!window.bfnScore){
		fnScore()
		window.bfnScore = true;
	}
	auto();
	function auto(){
		oTimer = setInterval(function(){
			iNow++;
			iNow = iNow%aNav.length;
			tab()
		},2000)
	}
	bind(oTab,"touchstart",funstart)
	bind(oTab,"touchmove",funmove)
	bind(oTab,"touchend",funend)
	function funstart(ev){
		oList.style.transition = "none"
		ev = ev.changedTouches[0];
		startTouchX = ev.pageX;
		iStartX = iX;
		clearInterval(oTimer)
	}
	function funmove(ev){
		ev = ev.changedTouches[0];
		var iDis = ev.pageX - startTouchX;
		iX = iStartX + iDis;
		oList.style.WebkitTransform =oList.style.transform  = "translateX("+iX+"px)";
	}
	function funend(ev){
		iNow = iX/iW;
		iNow = -Math.round(iNow);
		// console.log(iNow)
		if(iNow<0){
			iNow = 0;
		}
		if(iNow>aNav.length-1){
			iNow = aNav.length-1
		}
		tab();
		auto()
	}
	function tab(){
		iX = -iNow*iW;
		oList.style.transition = "0.5s";
		oList.style.WebkitTransform =oList.style.transform  = "translateX("+iX+"px)";
		for (var i = 0; i < aNav.length; i++) {
			removeClass(aNav[i],"active");
		}
		addClass(aNav[iNow],"active")
	}
}

// 星星评分
function fnScore(){
	var oScore = id("score");
	var aLi = oScore.getElementsByTagName("li");
	
	var arr = ["很糟糕","差评","一般","良好","五星好评"];
	for (var i = 0; i < aLi.length; i++) {
		fn(aLi[i])
	}
	function fn(oli){
		var aNav = oli.getElementsByTagName("a");
		var oInput = oli.getElementsByTagName("input")[0];
		for (var i = 0; i < aNav.length; i++) {
			aNav[i].index = i;
			bind(aNav[i],"touchstart",function(){
				// alert(this.index)
				for (var i = 0; i < aNav.length; i++) {
					if(i<=this.index){
						addClass(aNav[i],"active")
					}else{
						removeClass(aNav[i],"active")
					}
				}
				oInput.value = arr[this.index];
			});
			
		}

	}
	if(!window.bfnIndex){
		fnIndex()
		window.bfnIndex = true;
	}
	
}

function fnInfo(oInfo,sInfo){
	oInfo.innerHTML = sInfo;
	oInfo.style.WebkitTransform = "scale(1)";
	oInfo.style.opacity = 1;
	setInterval(function(){
		oInfo.style.WebkitTransform = "scale(0)";
		oInfo.style.opacity = 0;
	},1000)
}

function fnIndex(){
	var oIndex = id("index");
	var oBtn = oIndex.getElementsByClassName('btn')[0];
	var oInfo = oIndex.getElementsByClassName("info")[0];
	var bscore = false;
	bind(oBtn,"touchend",fnEnd);

	function fnEnd(){
		var  bscore = fnScoreChecked()
		if(bscore){

			if(fnTag()){
				fnIndexOut();
			}else{
				fnInfo(oInfo,"给景区添加标签");
			}

		}else{
			fnInfo(oInfo,"给景区评分")
		}
	}

	function fnScoreChecked(){
		var oScore = id("score");
		var oInput = oScore.getElementsByTagName("input");
		for (var i = 0; i < oInput.length; i++) {
			if(oInput[i].value == 0){
				return false;
			}
				
		}
		return true
	}
	function fnTag(){
		var oTag = id("indexTag");
		var aInput = oTag.getElementsByTagName("input");
		for (var i = 0; i < aInput.length; i++) {
			if(aInput[i].checked){
				return true;
			}
		}
		return false;
	}


}


function fnIndexOut(){
	var oMask = id("mask");
	var oIndex = id("index");
	var oNew = id("news");
	addClass(oMask,"pageShow");
	addClass(oNew,"pageShow");
	if(!window.bfnNews){
		fnNews()
		window.bfnNews = true;
	}
	
	setTimeout(function(){
		mask.style.opacity = 1;
		oIndex.style.WebkitFilter = oIndex.style.filter = "blur(5px)"
	},14)
	setTimeout(function(){
		oNew.style.transition = "0.5s"
		mask.style.opacity = 0;
		oIndex.style.WebkitFilter = oIndex.style.filter = "blur(0px)";
		oNew.style.opacity = 1;
		removeClass(oMask,"pageShow");
	},3000)
}
window.onload = function(){
	bind(id("newslink"),"touchend",function(){
		var oNew = id("news");
		addClass(oNew,"pageShow");
		setTimeout(function(){
			oNew.style.transition = "0.5s"
			oNew.style.opacity = 1;
		},14)
	})
}

function fnNews(){
	var oNews = id("news");
	var aform = id("form");
	var oInput = oNews.getElementsByTagName("input");
	var oInfo = oNews.getElementsByClassName("info")[0];
	oInput[0].onchange = function(){
		// console.log(this.files[0].type.split("/")[0])
		if(this.files[0].type.split("/")[0]=="video"){
			fnNewOut();
			this.value=""; //提交成功后清空
		}else{
			fnInfo(oInfo,"请导入视频")
		}
	}
	oInput[1].onchange = function(){
		// console.log(this.files[0].type.split("/")[0])
		if(this.files[0].type.split("/")[0]=="image"){
			fnNewOut()
			this.value="";
		}else{
			fnInfo(oInfo,"请上传图片")
		}
	}
}

function fnNewOut(){
	var oNews = id("news");
	var aform = id("form");
	addClass(aform,"pageShow");
	oNews.style.cssText="";
	removeClass(oNews,"pageShow");
	if(!window.bfnFormIn){
		fnFormIn()
		window.bfnFormIn = true;
	}
	
}
function fnFormIn(){
	var oForm=id("form");
	var oOver=id("over");
	var aFormTag=id("formTag").getElementsByTagName("label");
	var oBtn=oForm.getElementsByClassName("btn")[0];
	var bOff=false;
	for (var i = 0; i < aFormTag.length; i++) {
		bind(aFormTag[i],"touchend",function(){
			bOff = true;
			addClass(oBtn,"submit");
		})
	}
	bind(oBtn,"touchend",function(){
		if(bOff){
			for(var i=0;i<aFormTag.length;i++)
			{
				aFormTag[i].getElementsByTagName("input")[0].checked=false;
			}
			bOff = false;
			addClass(oOver,"pageShow");
			removeClass(oForm,"pageShow");
			removeClass(oBtn,"submit");
			Over();
		}
	})
	
	
}

function Over(){
	var oOver=id("over");
	var oBtn=oOver.getElementsByClassName("btn")[0];
	bind(oBtn,"touchstart",function(){
		addClass(oBtn,"submit");
	})
	bind(oBtn,"touchend",function(){
		removeClass(oOver,"pageShow");
		removeClass(oBtn,"submit");
	})
}