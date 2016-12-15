$(function(){

    //我的收藏，卡片切换
    collectMove();
    //我的收藏全选
    collectCheck();
    
    //收藏全选
    function collectCheck(){
    	var checkall = $('#checkall');
    	var goodscheckO = $('#collect-goods :checkbox');
    	var shopcheckO = $('#collect-shop :checkbox');
    	checkAll(checkall, goodscheckO);
    }

    //全选操作
    function checkAll(checkall, checkone){
        checkall.click(function(){            
            checkone.attr('checked', this.checked); 
        })
    }
    //删除选中商品操作
    function deleteO(btn, checkone){
        btn.click(function(){
                checkone.remove();
                console.log(checkone);
        	});
       
    }
    //我的收藏，卡片切换
    function collectMove(){
    	var liO = $('#myapple-collect-page .myapple-collect-nav').find('li');
        var tabBox = $('#myapple-collect-page div.collect-box');
        var tablist = $('#myapple-collect-page div.myapple-collect-content');
        var H = 727;
        var Hnav = 40; //加上导航的高度
        var Hgoods = tablist.eq(1).height();
        
        liO.each(function(index){       	
        	//点击事件
            $(this).click(function(){
                //取得当前运动后盒子的高度，index为this的index,如果写外面，index始终为1
                Hthis = tablist.eq(index).height();
                if (!$(this).is(".on")) {

                   $(this).addClass("on").siblings().removeClass("on");
                   tabBox.animate({left : index*(-96) + '%'},500);  

                    //让右边盒子高度大于或者等于右边最小值
                   if (Hthis <= H) {
                   	   tabBox.css({'height' : H + 'px'});
                   }else{
                   	   tabBox.css({'height' : Hthis + Hnav + 'px'});
                   }  
                //console.log( Hthis+','+tabBox.height());               
                }
            });
        });
    }

})