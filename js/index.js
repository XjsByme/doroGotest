$(document).ready(function() {

    
    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');
         }
    });
    
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -50, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});
  
	  
	  
	 //点击二维码放大
//	$(".clientBtn").each(function(){
//		$(this).on("click",function(){
//			$("#bg_shadow").css("display","block").css("z-index","1");
//			$(this).siblings().css("width","90%").css("transition","1.5s");
//			$(this).siblings().find("img").css("z-index","2");
//		})
//		$("#bg_shadow").on("click",function(){
//			$("#bg_shadow").css("display","none").css("z-index","0");
//			$(".p_img").css("width","80%");
//			$(".p_img").find("img").css("z-index","0");
//		})
//	})
//申请入驻弹出框 
	$("#apply").on("click",function(){
		$(".apply_form").css("display","block");
		$(".apply_formBg").css("display","block");
		
	})
	$(".apply_formBg").on("click",function(){
		$(".apply_form").css("display","none");
		$(this).css("display","none");
		
	})
	$(".apply_success_btn").on("click",function(){
		$(".apply_success").css("display","none");
		$(".apply_formBg").css("display","none");
	})
	// 提交认证
	$("#apply_sub").on("click",function(){
		if ($("#apply_name").val()=="" || $("#apply_phone").val()=="" || $("#apply_business").val()=="") {
			$(".apply_div7 span").css("visibility","visible").html("*为必填项");
			return false;
		} else if(!$("#apply_phone").val().match(/^1[34578]\d{9}$/)){
			$(".apply_div7 span").css("visibility","visible").html("手机号码格式不正确！");
			return false;
		} else {
			$(".apply_div7 span").css("visibility","hidden");
			$.ajax({
				type:"post",
				url:"http://bao.dorabox.net/?c=indexs&a=make_info",
				async:true,
				data:"name=" + $("#apply_name").val() + "&tel_phone="+ $("#apply_phone").val() + "&business=" + $("#apply_business").val() + "&brand="+ $("#apply_brand").val() + "&mail="+ $("#apply_mail").val(),
				success:function(data){	
					$(".apply_form input").val("");								
					$(".apply_form").css("display","none");
					$(".apply_success").css("display","block");
					//$(".apply_formBg").css("display","none");
					//alert("提交成功！")
						
				},
				error:function(data){								
					// $(".apply_form").css("display","none");
					// $(".apply_formBg").css("display","none");
					alert("提交失败，请重新提交！");
							
				}
			});
		}
	})
	
});