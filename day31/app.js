window.onload = function(){
    var region = document.getElementById("region-radio-wrapper");
    var product = document.getElementById("product-radio-wrapper");
    var table = document.getElementById("table-container");

    CheckBox(region, getCheckBoxData('region'), 'region', table);
    CheckBox(product, getCheckBoxData('product'), 'product', table);

    renderTable(table, getCheckedBoxValue('region'), getCheckedBoxValue('product'));

    // setInterval(function(){
    //     var regions = getCheckedBoxValue('region');
    //     console.log(regions);
    // }, 2000);
    
}