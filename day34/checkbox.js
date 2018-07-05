function CheckBox(container, lists, name, table){
    var all = '<label><input type="checkbox" name="'+name+'" value="all" checked="true">全选</label>';
    var others = '';
    for(var i=0,len=lists.length; i<len; i++){
        others += '<label><input type="checkbox" name="'+name+'" value="'+lists[i]+'" checked="true">'+lists[i]+'</label>';
    }
    container.innerHTML = all + others;

    container.addEventListener('change', function(event){
        var e = event ? event : window.event;
        var t = e.target || e.srcElement;
        if(t.nodeName.toLowerCase()==='input'){
            if(t.value==='all'){
                if(t.checked){//之前是未选状态
                    //选中其余未选中状态的选项 i = 1
                    var ipts = document.querySelectorAll("input[name='"+name+"']");
                    for(var i=1,len=ipts.length; i<len; i++){
                        if(!ipts[i].checked){
                            ipts[i].checked = true;
                        }
                    }
                }else{
                    alert('不可以取消全选');
                    t.checked = true;
                }
            }else{
                //计算当前选中状态的数量 i = 1
                var ipts = document.querySelectorAll("input[name='"+name+"']");
                var count = 0;
                for(var i=1,len=ipts.length; i<len; i++){
                    if(ipts[i].checked){
                        count++;
                    }
                }
                console.log(count);

                if(t.checked){//当前已经切换为选中状态
                    if(count === 3){
                        ipts[0].checked = true;
                    }
                }else{
                    if(count===0){
                        alert('不可以一个不选择');
                        t.checked = true;
                    }else{
                        ipts[0].checked = false;
                    }
                }
                
            }
            renderTable(table, getCheckedBoxValue('region'), getCheckedBoxValue('product'));
        }
    })
}

function getCheckedBoxValue(key){
    var lists = [];
    var ipts = document.querySelectorAll("input[name='"+key+"']");
    for(var i=1,len=ipts.length; i<len; i++){
        if(ipts[i].checked){
            lists.push(ipts[i].value);
        }
    }
    return lists;
}