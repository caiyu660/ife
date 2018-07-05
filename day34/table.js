function renderTable(table, region, product){
    var arr = region.concat(product);
    var lists = [];
    for(var i=0,len=sourceData.length; i<len; i++){
        if(arr.indexOf(sourceData[i].region) !== -1 && arr.indexOf(sourceData[i].product) !== -1){
            lists.push(sourceData[i]);
        }
    }
    console.log(lists)

    var trs = '';
    var count = 0;
    var flag = (region.length === 1 && product.length > 1)?true:false;//区分哪一项排在首位
    var temp = flag ? lists[0].region : lists[0].product;

    for(var i=0,len=lists.length; i<len; i++){
        var tr = '';
        if((flag && lists[i].region === temp) || (!flag && lists[i].product === temp)){
            count++;
        }else{
            //这段需要优化 
            trs = trs.replace('flag', 'rowspan="'+count+'"')
            .replace('<td flag>'+temp+'</td>', '')
            .replace('<td flag>'+temp+'</td>', '');
            count = 1;
        }
        temp = flag ? lists[i].region : lists[i].product;

        for(var j=0,l=lists[i].sale.length; j<l; j++){
            tr += '<td>'+lists[i].sale[j]+'</td>';
        }
        console.log(count);
        var region_product = '';
        if(region.length === 1 && product.length > 1){
            region_product = '<td flag>'+lists[i].region+'</td><td>'+lists[i].product+'</td>';
        }else{
            region_product = '<td flag>'+lists[i].product+'</td><td>'+lists[i].region+'</td>';
        }
        trs += '<tr>'+region_product+tr+'</tr>';

        if(i === lists.length-1){
            trs = trs.replace('flag', 'rowspan="'+count+'"')
            .replace('<td flag>'+temp+'</td>', '')
            .replace('<td flag>'+temp+'</td>', '');
        }
    }
    var headers = '';
    for(var i=0;i<12;i++){
        headers += '<td>'+(i+1)+'月</td>';
    }
    headers = flag ? '<td>地区</td><td>商品</td>'+headers : '<td>商品</td><td>地区</td>'+headers;

    table.innerHTML = '<table border="1">'+headers+trs+'</table>';
}