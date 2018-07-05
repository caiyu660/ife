window.onload = function(){
    var region = document.getElementById("region-radio-wrapper");
    var product = document.getElementById("product-radio-wrapper");
    var table = document.getElementById("table-container");

    //1
    CheckBox(region, getCheckBoxData('region'), 'region', table);
    CheckBox(product, getCheckBoxData('product'), 'product', table);

    renderTable(table, getCheckedBoxValue('region'), getCheckedBoxValue('product'));

    // setInterval(function(){
    //     var regions = getCheckedBoxValue('region');
    //     console.log(regions);
    // }, 2000);
    
    //2
    var drawing = document.getElementById("drawing");
    renderChart(sourceData[0].sale);

    table.addEventListener('mouseover', function(e){
        var e = window.event ? window.event : event;
        var t = e.target || e.srcElement;
        if(t.nodeName.toLowerCase() === 'td'){
            var v = t.firstChild.nodeValue;
            if(/^\d+$/.test(v)){
                var p = t.parentNode;
                var arr = [];
                for(var i=1,len=p.childNodes.length;i<len;i++){
                    var value = parseInt(p.childNodes[i].firstChild.nodeValue);
                    !isNaN(value) && arr.push(value);
                }
                console.log(arr);
                renderChart(arr);
                renderBar(arr);
            }
        }
    }, false);

    //2.1
    renderBar(sourceData[0].sale);
}