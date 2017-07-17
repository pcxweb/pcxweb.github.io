// 散点图组件对象

var H5ComponentBar = function(name,cft){
	var component = new H5ComponentBase(name,cft);

	$.each(cft.data,function(idx,item){
		// console.log(item)
		var line = $('<div class="line">');
		var name = $('<div class="name">');
		var rate = $('<div class="rate">');
		var pre = $('<div class="pre">');

		name.text(item[0]);
		var width = item[1]*100 + "%";
		rate.css("width",width);
		pre.text(width);

		//用来展现进度条动画
		var bgStyle = '';
		if(item[2]){
			bgStyle = 'style="background-color:'+item[2]+'"';
			pre.css("color",item[2])
		}
		rate.html("<div class='bg' "+bgStyle+"></div>")

		line.append(name).append(rate).append(pre);
		component.append(line)


	})
	return component;
}