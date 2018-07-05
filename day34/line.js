function renderChart(data){
    drawing.width = drawing.width;
    console.log(data);
    var max = 0;
    for(var i=0;i<data.length;i++){
        if(data[i]>max){
            max=data[i];
        }
    }

    max = Math.ceil(max/6) * 6;
    var gap = max/6;//数据每一格之间的gap
    console.log(max);
    var atm = 400/max;

    var context = drawing.getContext("2d");
    context.strokeStyle = "#000";
    context.beginPath();
    context.moveTo(100, 500);
    context.lineTo(700, 500);
    context.stroke();

    context.beginPath();
    context.moveTo(100, 500);
    context.lineTo(100, 100);
    context.stroke();

    context.font = "bold 14px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";

    //横坐标
    for(var i=0;i<12;i++){
        context.beginPath();
        var x = 100 + 50 * i;
        context.moveTo(x, 500);
        context.lineTo(x, 505);
        context.stroke();
        context.fillText(i+1+"月", x, 520);
    }
    //纵坐标
    for(var i=1;i<=6;i++){
        context.beginPath();
        var y = 500 - 400/6*i;
        context.moveTo(100, y);
        context.lineTo(95, y);
        context.stroke();
        context.fillText(gap*i, 80, y);
    }

    //绘制灰色线条
    context.strokeStyle = "gray";
    for(var i=1;i<=6;i++){
        context.beginPath();
        var y = 500 - 400/6*i;
        context.moveTo(100, y);
        context.lineTo(700, y);
        context.stroke();
    }

    context.strokeStyle = context.fillStyle = '#5bc49f';
    var temp = null;
    for(var i=0,len=data.length;i<len;i++){
        context.beginPath();
        var x = 100 + 50 * i;
        var y = 500 - data[i]*atm;

        context.arc(x,y,5,0,2*Math.PI,false);
        context.fill();
        if(i!=0){
            context.moveTo(temp.x, temp.y);
            context.lineTo(x, y);
            context.stroke();
        }
        temp = {
            x:x,
            y:y
        };
    }

    // 定义好折线图绘制区域的高度，宽度，轴的高度，宽度
    // 定义好每一个数据点的直径，颜色，线的颜色，宽度    
    // 定义好没两个数据点之间的横向间隔距离

    // 拿到折线图中的最大值Max
    // 根据Max和你用来绘制折线图图像区域的高度，进行一个数据和像素的折算比例

    // 绘制横轴及纵轴
    // 遍历数据 {
    //     计算将要绘制数据点的坐标
    //     绘制数据点        
    //     if 不是第一个点 {
    //         绘制这个数据点和上一个数据点的连线
    //     }
    //     记录下当前数据点的数据用于下一个点时绘制连线
    // }    
}