// 雷达图组件对象

var H5ComponentRadar = function(name,cft){


	var component = new H5ComponentBase(name,cft);
	// component.text("Polyline")

	// 绘制网格线
		var w = cft.width;
		var h = cft.height;
	// 加入一个画布
		var cns = document.createElement("canvas");
		var ctx = cns.getContext('2d');
		cns.width = ctx.width = w;
		cns.height = ctx.height = h;
		component.append(cns);

		var r = w/2;
		var step = cft.data.length;

		// ctx.beginPath();
		// ctx.arc(r,r,5,0,2*Math.PI);
		// ctx.stroke()
		// ctx.beginPath();
		// ctx.arc(r,r,r-5,0,2*Math.PI);
		// ctx.stroke()
		
		// 计算一个圆周上的坐标（计算多边形的顶点坐标）
		// 已知：圆心的坐标(a,b)、半径r;角度deg
		// rad = (2*Math.PI/360)*(360/边数)*i(第几个点)；
		// x = a +Math.sin(rad)*r;
		// y = b +Math.cos(rad)*r;

		// 绘制网格背景(分面绘制 ，分为10份)
		var isBule = false;
		for (var s = 10; s >0; s--) {
			ctx.beginPath();
			for (var i = 0; i < step; i++) {
				var rad = (2*Math.PI/360)*(360/step)*i;
				var x = r +Math.sin(rad)*r*(s/10);
				var y = r +Math.cos(rad)*r*(s/10);
				
				// ctx.arc(x,y,5,0,2*Math.PI);
				ctx.lineTo(x,y)
			}
			ctx.closePath()
			ctx.fillStyle = (isBule = !isBule) ? '#99c0ff':"#f1f9ff"
			ctx.fill()
			
		}

		// 绘制伞骨
		ctx.beginPath();
		for (var i = 0; i < step; i++) {
			var rad = (2*Math.PI/360)*(360/step)*i;
			var x = r +Math.sin(rad)*r;
			var y = r +Math.cos(rad)*r;
			
			// ctx.arc(x,y,5,0,2*Math.PI);
			ctx.moveTo(r,r)
			ctx.lineTo(x,y)
			// 输出项目文字
			var text = $('<div class="text">');
			text.text(cft.data[i][0])
			text.css('transition',"all 0.5s "+i*.1+"s")
			if(x>w/2){
				text.css('left',x/2+5);
			}else{
				text.css('right',(w-x)/2+5);
			}
			if(x>h/2){
				text.css('top',y/2+5);
			}else{
				text.css('bottom',(h-y)/2+5);
			}

			if(cft.data[i][2]){
				text.css('color',cft.data[i][2])
			}
			text.css("opacity",0)

			component.append(text)
		}
		ctx.strokeStyle = "#eee"
		ctx.stroke()
	// 数据层绘制
		var cns = document.createElement("canvas");
		var ctx = cns.getContext('2d');
		cns.width = ctx.width = w;
		cns.height = ctx.height = h;
		component.append(cns);

		ctx.strokeStyle = "#f00";
		var draw = function(per){

			if(per>=1){
				component.find('.text').css("opacity",1)
			}else{
				component.find('.text').css("opacity",0)
			}
			// 绘制出数据折线
			ctx.clearRect(0,0,w,h)
			for (var i = 0; i < step; i++) {
				var rate = cft.data[i][1]*per;
				var rad = (2*Math.PI/360)*(360/step)*i;
				var x = r +Math.sin(rad)*r*rate;
				var y = r +Math.cos(rad)*r*rate;
				
				ctx.lineTo(x,y)
				// ctx.arc(x,y,5,0,2*Math.PI);
			}
			ctx.closePath()
			ctx.stroke();
			ctx.fillStyle = "#f00"
			for (var i = 0; i < step; i++) {
				var rate = cft.data[i][1]*per;
				var rad = (2*Math.PI/360)*(360/step)*i;
				var x = r +Math.sin(rad)*r*rate;
				var y = r +Math.cos(rad)*r*rate;
				
				ctx.beginPath()
				ctx.arc(x,y,5,0,2*Math.PI);
				ctx.stroke()
				ctx.fill()
			}	
		}
		
		// draw(1)

		component.on('onLoad',function(){
			// 折线图生长动画
			var s = 0;
			for (var i = 0; i < 100; i++) {
				setTimeout(function(){
					s+=.01;
					draw(s)
				},i*10+500)
			}
		});
		component.on('onLeave',function(){
			// 折线图生长动画
			var s = 1;
			for (var i = 0; i < 100; i++) {
				setTimeout(function(){
					s-=.01;
					draw(s)
				},i*10)
			}
		})


	return component;
}