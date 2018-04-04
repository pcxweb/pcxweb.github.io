
// 内容管理对象

var H5 = function() {
	this.id = ('h5_' + Math.random()).replace(".","_");
	this.el = $('<div class="h5" id="'+this.id+'">').hide();
	this.page = [];
	$('body').append(this.el);

	/*
	新增一个页：
	name :组件的名称 会加入到className中
	text：页内的默认文本
	@return{H5} H5对象。可以重复使用H5对象支持方法
	*/
	this.addPage = function(name,text){
		var page = $("<div class='h5_page section'>");
		if(name!=undefined){
			page.addClass("h5_page_"+name);
		}
		if(text!=undefined){
			page.text(text);
		}
		this.el.append(page);
		this.page.push(page);
		// debuger
		if(typeof this.whenAddPage === 'function'){
			this.whenAddPage();
		}
		return this;
	}
	this.addComponent = function(name,cft){
		var cft = cft || {};
		cft = $.extend({
			type:'base'
		},cft);
		var component;
		var page = this.page.slice(-1)[0];
		switch(cft.type){
			case 'base':
				component = new H5ComponentBase(name,cft);
				break;
			case 'polyline':
				component = new H5ComponentPolyline(name,cft);
				break;
			case 'pie':
				component = new H5ComponentPie(name,cft);
				break;
			case 'bar':
				component = new H5ComponentBar(name,cft);
				break;
			case 'bar_v':
				component = new H5ComponentBar_v(name,cft);
				break;
			case 'radar':
				component = new H5ComponentRadar(name,cft);
				break;
			case 'pie':
				component = new H5ComponentPie(name,cft);
				break;
			case 'ring':
				component = new H5ComponentRing(name,cft);
				break;
			case 'point':
				component = new H5ComponentPoint(name,cft);
				break;
			default:
		}
		page.append(component)
		return this;
	}
	this.loader = function(firstPage){
		this.el.fullpage({
			onLeave:function(index,nextIndex,direction){
				$(this).find(".h5_component").trigger('onLeave')
			},//滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算
			afterLoad:function(anchorLink,index){
				$(this).find(".h5_component").trigger('onLoad')
			}
		});
		this.page[0].find('.h5_component').trigger('onLoad')
		this.el.show()
		if(firstPage){
			$.fn.fullpage.moveTo(firstPage)
		}
	}
	return this;
}
