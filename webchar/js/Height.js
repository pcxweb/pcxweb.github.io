// 宽高计算
//获取屏幕高度
$(function(){
function bianhua(){
	var sw =document.documentElement.offsetWidth || document.body.offsetWidth;
	var sh =document.documentElement.offsetHeight || document.body.offsetHeight;
	var h = 0;
	var w = 0
	if(sh>=sw/0.63+20){
		h = sw/0.63;
		w = sw;
	}else{
		h = sh;
		w = 0.63*h
	}
	var _html = document.getElementsByTagName('html')[0];  
	console.log(w)
	if(w>=320){
		_html.style.fontSize = "100px";
		// console.log(1)
	}
	if(w>=360){
		_html.style.fontSize = "112.5px";
		// console.log(2)
	}
	if(w>=400){
		_html.style.fontSize = "125px";
		// console.log(3)
	}
	if(w>640){
		_html.style.fontSize = "200px";
		// console.log(4)
	}
	
	$(".fp-tableCell").width(w)
	$(".fp-tableCell").height(h)
	$(".fp-tableCell").css({position:"relative",top:"50%",left:"50%",transform:"translate(-50%,-50%)"});
	//第一页
	var titleH = ($(".h5_component_name_title").height())/h*100;
	var beforeH = titleH+15;
	$(".h5_component_name_img").css({top:beforeH+"%"})
	$(".h5_component_name_img .img1").css({height:(100-beforeH)*0.4*h/100})
	$(".h5_component_name_img .img2").css({height:(100-beforeH)*0.4*h/100})
	$(".h5_component_name_img .img3").css({height:(100-beforeH)*0.5*h/100})

	//标题
	var captions = $(".h5_component_name_caption");
	
	for (var i = 0; i < captions.length; i++) {
		var caption = $(".h5_component_name_caption").eq(i).height()/h*100;
		var school = $(".h5_component_name_school").eq(i).height()/h*100;
		var remark = $(".h5_component_name_remark").eq(i).height()/h*100;
		var total
		if(remark){
			total =100-(caption+school+remark+5);
			$(".h5_component_name_caption_img").eq(i).css({top:caption+10+"%",height:total*0.6+"%"})
			$(".h5_component_name_school").eq(i).css({top:caption+10+total*0.65+"%"})
			$(".h5_component_name_remark").eq(i).css({top:caption+10+total*0.7+school+"%"})

		}else{
			//地理位置
			total =100-(caption+school+5);
			$(".h5_component_name_caption_img").eq(i).css({top:caption+total*0.2+"%",height:total*0.6+"%"})
			$(".h5_component_name_school").eq(i).css({top:caption+10+total*0.72+"%"})
		}
		var listlon = $(".h5_component_name_list").eq(i).height()/h*100;
		var lesslon =100-(listlon+caption+10);
		var divlen = $(".h5_component_name_list").eq(i).find("div").length

		$(".h5_component_name_list").eq(i).css({top:caption+10+"%"})
		$(".h5_component_name_list").eq(i).find("div").css({marginTop:lesslon/divlen+"%"})
	}

	//排行
	var rankH = $(".h5_component_name_rank").height()/h*100
	// console.log(rankH,h)
	$(".h5_component_name_rank_img").css({height:(95-rankH)*0.6+"%"})
	$(".h5_component_name_rank").css({top:(95-rankH)*0.8+"%"})

	//入学要求

}
	bianhua()
	//监听窗口的变化
	$(window).resize(function () {          //当浏览器大小变化时
    	bianhua();
	});

	// 到最后一页时隐藏
	$(".h5_component_name_back").siblings(".h5_component_name_slide_up").css("display","none")

})
