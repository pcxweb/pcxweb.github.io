// 散点图组件对象

var H5ComponentPoint = function(name,cft){
	var component = new H5ComponentBase(name,cft);

	var base = cft.data[0][1]; //以第一个数据的 比例为大小的 100%

	$.each(cft.data,function(idx,item){
		var point = $('<div class="point point_'+idx+'">');


		var name = $('<div class="name">'+item[0]+'</div>')
		var pre = $('<div class="pre">'+item[1]*100+'%</div>')
		name.append(pre);
		point.append(name);

		var pre = (item[1]/base)*100 + "%";
		// console.log(pre)
		point.width(pre).height(pre);

		if(item[2]){
			point.css("backgroundColor",item[2])
		}
		if(item[3] !==undefined && item[4] !==undefined ){
			point.css({left:item[3],top:item[4]})
			//  任务一：暂存left、top到元素上
            point.data('left',item[3]).data('top',item[4]);
		}
		//  任务二：设置zIndex、重设位置
        point.css('zIndex',100-idx);
        point.css('left',0).css('top',0);
        

        point.css('transition','all 1s '+idx*.5+'s')
        component.append( point );
	})
	//  任务三：onLoad之后取出暂存的left、top 并且附加到 CSS 中
	    component.on('onLoad',function(){
	      component.find('.point').each(function(idx,item){
	        $(item).css('left',$(item).data('left')).css('top',$(item).data('top'));
	      })
	    });
	   // 任务 四：onLeave之后，还原初始的位置
	    component.on('onLeave',function(){
	      component.find('.point').each(function(idx,item){
	        $(item).css('left',0).css('top',0);
	      })
	    })

	    component.find('.point').on('click',function(){

	        component.find('.point').removeClass('point_focus');
	        $(this).addClass('point_focus');

	        return false;
	    }).eq(0).addClass('point_focus')

	return component;
}