// 基本图文组件对象

var H5ComponentBase = function(name,cft){
	var cft = cft || {};
	// parseInt(Math.random()
	var id = ('h5_c_'+Math.random()).replace('.','_') ;
	var cls ='h5_component_'+cft.type;
	var component = $('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">')

	cft.text && component.text(cft.text);
	cft.width && component.width(cft.width/2);
	cft.height && component.height(cft.height/2);
	cft.css && component.css(cft.css);
	
	cft.bg && component.css("backgroundImage","url("+cft.bg+")");

	if(cft.center === true){
		component.css({left:"50%",marginLeft:(cft.width/4*-1)+"px"})
	}
	// ......很多自定义参数
	if(typeof cft.onclick === 'function'){
		component.on('click',cft.onclick) 
	}

	component.on('onLoad',function(){
		// console.log(cls+"_load")
		setTimeout(function(){
			component.addClass(cls+"_load").removeClass(cls+'_leave')
			cft.animateIn && component.animate(cft.animateIn)
		},cft.delay || 0)
		return false;
	})
	component.on('onLeave',function(){
		setTimeout(function(){
			component.addClass(cls+"_leave").removeClass(cls+'_load')
			cft.animateOut && component.animate(cft.animateOut)
		},cft.delay || 0)
		return false;
	})

	return component;
}