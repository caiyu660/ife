function renderBar(data){
    var SVG_NS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(SVG_NS, 'svg');

    svg.setAttribute("width", "800");
    svg.setAttribute("height", "600");
    //清空之前的绘制
    document.getElementById("svg").innerHTML = '';
    document.getElementById("svg").appendChild(svg);

    var xz = document.createElementNS(SVG_NS, 'line');
    xz.setAttribute("x1", 100);
    xz.setAttribute("y1", 500);
    xz.setAttribute("x2", 700);
    xz.setAttribute("y2", 500);
    xz.setAttribute("stroke", "#000");
    svg.appendChild(xz);

    var yz = document.createElementNS(SVG_NS, 'line');
    yz.setAttribute("x1", 100);
    yz.setAttribute("y1", 500);
    yz.setAttribute("x2", 100);
    yz.setAttribute("y2", 100);
    yz.setAttribute("stroke", "#000");
    svg.appendChild(yz);

    //横坐标
    for(var i=0;i<12;i++){
        var x = 125 + 50 * i;//第一个坐标（125，500）
        var line = document.createElementNS(SVG_NS, 'line');
        line.setAttribute("x1", x);
        line.setAttribute("y1", 500);
        line.setAttribute("x2", x);
        line.setAttribute("y2", 505);
        line.setAttribute("stroke", "#000");
        svg.appendChild(line);

        var text = document.createElementNS(SVG_NS, 'text');
        text.setAttribute("style", "text-anchor:middle");
        text.setAttribute("x", x);
        text.setAttribute("y", 520);
        text.innerHTML = i+1+"月";
        svg.appendChild(text);
    }

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

    //纵坐标
    for(var i=1;i<=6;i++){
        var y = 500 - 400/6*i;
        var line = document.createElementNS(SVG_NS, 'line');
        line.setAttribute("x1", 100);
        line.setAttribute("y1", y);
        line.setAttribute("x2", 95);
        line.setAttribute("y2", y);
        line.setAttribute("stroke", "#000");
        svg.appendChild(line);

        var text = document.createElementNS(SVG_NS, 'text');
        text.setAttribute("style", "dominant-baseline:middle");
        text.setAttribute("x", 60);
        text.setAttribute("y", y);
        text.innerHTML = gap*i;
        svg.appendChild(text);
    }

    //
    for(var i=0,len=data.length;i<len;i++){
        var width = 10;
        var height = data[i]*atm;
        var x = 125 + 50 * i - width/2;
        var y = 500;

        var rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("fill", "#5bc49f");
        rect.setAttribute("transform", "translate(0,"+(0-height)+")");
        svg.appendChild(rect);
    }
}