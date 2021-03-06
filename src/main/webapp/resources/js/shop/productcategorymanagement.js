$(function (){
    var listUrl = '/o2o/shopadmin/getproductcategorylist';
    var addUrl = '/o2o/shopadmin/addproductcategories';
    var deleteUrl = '/o2o/shopadmin/removeproductcategory';
    getList();
    function getList(){
        $.getJSON(listUrl, function (data){
            if(data.success){
                var dataList = data.data;
                $('.category-wrap').html('');
                var tempHtml = '';
                dataList.map(function(item, index){
                    tempHtml += '' +
                        '<div class="row row-product-category now">' +
                        '<div class="col-33 product-category-name">' +
                        item.productCategoryName +
                        '</div>' +
                        '<div class="col-33">' +
                        item.priority +
                        '</div>' +
                        '<div class="col-33"><a href="#" class="button delete" data-id="' +
                        item.productCategoryId +
                        '">删除</a></div>' +
                        '</div>';
                });
                $('.category-wrap').append(tempHtml);
            }
        });
    }
    $("#new").click(function (){
       var tempHtml = '<div class="row row-product-category temp">' +
           '<div class="col-33"><input class="category-input category" type="text" placeholder="商品分类"/></div>'+
           '<div class="col-33"><input class="category-input priority" type="number" placeholder="优先级"/></div>'+
           '<div class="col-33"><a href="#" class="button delete">删除</a></div>' +
           '</div>';
       $('.category-wrap').append(tempHtml);
    });
    $("#submit").click(function (){
        var tempArr = $('.temp');
        var productCategoryList = [];
        tempArr.map(function(index, item){
           var tempObj = {};
           tempObj.productCategoryName = $(item).find('.category').val();
           tempObj.priority = $(item).find('.priority').val();
           if(tempObj.productCategoryName && tempObj.priority){
               productCategoryList.push(tempObj);
           }
        });
        $.ajax({
            url: addUrl,
            type: "POST",
            data: JSON.stringify(productCategoryList),
            contentType: 'application/json',
            success:function (data){
                if(data.success){
                    getList();
                }else{
                    $.toast("提交失败!");
                }
            }
        })
    });
})