// 散点图组件对象

var H5ComponentPolyline = function(name,cft){
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
		component.append(cns)

	// 水平网格线 100份 -- 10份  背景层

		var step = 10;
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#aaa"

		window.ctx = ctx;
		for (var i = 0; i < step+1; i++) {
			var y = (h/step)*i
			ctx.moveTo(0,y);
			ctx.lineTo(w,y);
		}
		step = cft.data.length+1;
		var text_w = w/step >> 0  //去除小数点后面的数（取整）
		for (var i = 0; i < step+1; i++) {
			var x = (w/step)*i
			ctx.moveTo(x,0);
			ctx.lineTo(x,h);

			if(cft.data[i]){
				var text = $('<div class="text">');
				text.text(cft.data[i][0]);
				text.css('width',text_w/2).css('left',x/2+text_w/4)
			}
			component.append(text)
		}
		ctx.stroke();



		// 加入画布  --折线   数据层
		var cns = document.createElement("canvas");
		var ctx = cns.getContext('2d');
		cns.width = ctx.width = w;
		cns.height = ctx.height = h;
	var draw = function(per){
		// 清空画布
		ctx.clearRect(0,0,w,h)

		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.strokeStyle = "#ff8878";
		ctx.fillStyle = "#ff8878"

		// 画点	
		var x = 0;
		var y = 0;
		var row_w = (w/(cft.data.length+1));
		for(i in cft.data){
			var item = cft.data[i];
			x = row_w*i+row_w;
			y = h-(item[1]*h*per);

			ctx.moveTo(x,y);
			ctx.arc(x,y,5,0,2*Math.PI)
		}
		ctx.stroke();
		ctx.fill()

		// 连线

		ctx.moveTo(row_w,h-(cft.data[0][1]*h*per));
		for(i in cft.data){
			var item = cft.data[i];
			x = row_w*i+row_w;
			y = h-(item[1]*h*per);
			ctx.lineTo(x,y);
		}
		ctx.stroke();
		ctx.strokeStyle = "rgba(255,255,255,0)"
		// 绘制阴影
		ctx.lineTo(x,h);
		ctx.lineTo(row_w,h);
		ctx.fillStyle = "rgba(255,136,129,.2)"
		ctx.fill();

		// 写数据
		for(i in cft.data){
			var item = cft.data[i];
			x = row_w*i+row_w;
			y = h-(item[1]*h*per);
			ctx.fillStyle = item[2] ? item[2] :"#595959"
			ctx.fillText((item[1]*100)+"%",x-10,y-10);
		}
		ctx.stroke();
		
	}
	draw(1)
		component.append(cns)

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