var buy_editor="";$(function(){var shop_uid="";if($("#shopuid").length>0){shop_uid=$("#shopuid").val();if(shop_uid=="10411039"){$(".edit_dianzhao_template_obj").append("<div class='wrapper' style='position:relative'><a style='display: block;height: 28px;width: 106px;position: absolute;background: #da251c url(http://shop.680.com/images/qe.gif) left center no-repeat;border-radius: 4px;top: 33px;right: -116px;' href='http://shop.680.com/ashx/towebqq.ashx?qq=1715487365&pos=inshop' target='_blank'></a></div>");}}
if($("#totalmoney3").length>0){var totalmoney3_v=$("#totalmoney3").html();if(totalmoney3_v!=""&&parseFloat(totalmoney3_v)>0){$(".shop_month_obj").show();}}else{$(".shop_month_obj").hide();}
$(".sssel").hover(function(){$(".kind_list").show();});$(".kind_list").hover(function(){},function(){$(".kind_list").hide();});$(".kind_list li").click(function(){if($(this).attr("t")=="1"){$(".inputss").attr("placeholder","请输入项目编号或标题");}else if($(this).attr("t")=="3"){$(".inputss").attr("placeholder","请输入服务标题");}else if($(this).attr("t")=="4"){$(".inputss").attr("placeholder","请输入服务商名称");}
$(".sssel").html($(this).html());$(".kind_list").hide();});$(".tsbt_search_btn").click(function(){var val=$(".inputss").val();var searchT=$(".sssel").html();if(searchT.indexOf("项")!=-1){window.location.href="http://www.680.com/task.html?key="+ encodeURIComponent(val);}else if(searchT.indexOf("服务商")!=-1){window.location.href="http://www.680.com/shop.html?key="+ encodeURIComponent(val);}else{window.location.href="http://www.680.com/fuwu.html?key="+ encodeURIComponent(val);}});var locurl=window.location.href;if(locurl.indexOf(".html")==-1){var bt_con="<style type='text/css'>.btn_1_bt{float: left;margin-left: 36px;width: 260px;}.btn_1_bt a{background: #ffd929;color: #333;font-size: 24px;width: 55px;line-height: 28px;text-align: center;display: block;height: 58px;padding: 8px;border-radius: 5px;}.yuyue_val {width: 185px;position: relative;padding-bottom: 6px;}.yuyue_val input {width: 165px;padding-left: 15px;border-radius: 3px;height: 32px;line-height: 32px;border: solid 1px #D8D8D8;}.btn_1_bt a:hover{background: #fdc82e;color: #222;text-decoration: none;}.err_yy_msg {position: absolute;background: #FCE7CC;z-index: 999;padding: 8px 15px;border: solid 1px #FDAF57;color: #6C6B6B;border-radius: 3px;top: 0px;right: 189px;display: block;width: 120px;text-align: center;}.err_yy_msg_arrow {width: 0;height: 0;border: solid 4px #34124c;border-left: solid 4px rgb(253, 175, 87);position: absolute;top: 14px;border-right: 0;z-index: 99999999;left: -4px;}.footer_float {bottom: 0px;position: fixed;left: 0;z-index: 9999;background: transparent url(http://shop.680.com/images/yuyue/ib.png) repeat scroll 0px 0px;padding-top: 2px;height: 100px;width: 100%;opacity: 1;}.r_arrow_1 {cursor: pointer;display: inline;position: fixed;left: 10px;bottom: 0px;}</style><div class=\"footer_float\" style='left: 0px;'><div style=\"width:1100px;margin:0 auto\"><div style=\"padding-left: 18px; padding-right: 0;\"><div onclick=\"closefloat(); \" style=\"cursor: pointer;float:right\">";bt_con+="<img src=\"http://shop.680.com/images/yuyue/close_1.png\" ></div><div style=\"clear:both\"></div><div style=\"padding-top:20px;float:left;width:740px\"><img src=\"http://shop.680.com/images/yuyue/soft_note.png\"></div>";bt_con+="<div class=\"btn_1_bt\"><div style=\"float:left\"> <div class=\"yuyue_val\"><input id=\"yy_fullname\" type=\"text\" placeholder=\"您的称呼\" maxlength=\"20\"></div>";bt_con+="<div class=\"yuyue_val\"><input id=\"yy_mobile\" type=\"text\" placeholder=\"您的手机号\" maxlength=\"20\"></div></div><div style=\"float:right\"><a href=\"javascript:;\" class=\"ract_qyqqdj\" onclick=\"fast_yuyue_tf();\">免费<br>预约</a></div>";bt_con+="<div class=\"clear\"></div></div><div class=\"clear\"></div></div></div><img class=\"r_arrow_1\" src=\"http://shop.680.com/images/yuyue/r_arrow_1.jpg\" style=\"display:none\"></div>";$("body").append(bt_con);$(".r_arrow_1").click(function(){var left=$(".footer_float").css("left");if(left=="0px"){left="-98%";$(".r_arrow_1").show();}else{left="0px";$(".r_arrow_1").hide();}
$(".footer_float").animate({left:left},{easing:"linear"});});}
$(".buyfuwubtn").bind("click",function(){return buy_gy_service(1);});$(".guyongta").bind("click",function(){return buy_gy_service(0);});on_scrollbrowser();$(".baozheng").hover(function(){if($(".credit_border").length>0){}else{$.ajax({type:"get",url:"/ashx/getbz.ashx",data:"uid="+ $("#shopuid").val()+"&rnd="+ Math.random(),success:function(data){$(".baozheng").append(data);getcreditfun();}});}});var locurl=window.location.href;if(locurl.indexOf("/fid-")==-1&&locurl.indexOf(".html")==-1){if(shop_uid!="10411039"){if($(".cuslxqqobj").length>0){}else{if(parseInt($("#t_check").val())>3){webJson("/ashx/getlianxi.ashx",{id:$("#t_tempid").val()},function(data){if(data.status=="0"){var strhtml="<style>.main-im{position:fixed;right:10px;top:300px;z-index:100;width:110px,height:272px;}.main-im .qq-a{display:block;width:106px;height:116px;font-size:14px;color:#0484cd;text-align:center;position:relative}.main-im .qq-a span{bottom:5px;position:absolute;width:90px;left:10px}.main-im .qq-hover-c{width:70px;height:70px;border-radius:35px;position:absolute;left:18px;top:10px;overflow:hidden;z-index:9}.main-im .qq-container{z-index:99;position:absolute;width:109px;height:118px;border-top-left-radius:10px;border-top-right-radius:10px;background:url(http://shop.680.com/template/default/images/qq-icon-bg.png) no-repeat center 8px}.main-im .img-qq{max-width:60px;display:block;position:absolute;left:6px;top:3px;-moz-transition:all .5s;-webkit-transition:all .5s;-o-transition:all .5s;transition:all .5s}.main-im .im-qq:hover .img-qq{max-width:70px;left:1px;top:8px;position:absolute}.main-im .im_main{background:#f9fafb;border:1px solid #ddd;border-radius:10px;background:#f9fafb;}.main-im .im_main .im-tel{color:#000;text-align:center;width:109px;height:60px;border-bottom:1px solid #ddd}.main-im .im_main .im-tel div{font-weight:bold;font-size:12px;margin-top:6px}.main-im .im_main .im-tel .tel-num{font-family:Arial;font-weight:bold;color:#e66d15}.main-im .im_main .im-tel:hover{background:#fafafa}.main-im .close-im{position:absolute;right:10px;top:-12px;z-index:100;width:24px;height:24px}</style>"
strhtml+="<div class='main-im'>";strhtml+="    <div class='im_main' id='im_main'>";if(!isValEmpty(data.zxqq)){strhtml+="        <a href='http://shop.680.com/ashx/towebqq.ashx?qq="+ data.zxqq+"&pos=inshop' target='_blank' class='im-qq qq-a' title='在线QQ客服'>";strhtml+="	        <div class='qq-container'></div>";strhtml+="	        <div class='qq-hover-c'><img class='img-qq' src='http://shop.680.com/template/default/images/qq.png'></div>";strhtml+="	        <span> QQ在线咨询</span>";strhtml+="        </a>";}
strhtml+="    </div>";strhtml+="</div>";$("body").append(strhtml);}});}}}}});function getcreditfun(){var tempidv=$("#t_tempid").val();var ubusv=$("#t_ubus").val();var shimingv=$("#t_shiming").val();var isshv=$("#t_issh").val();var mailsmv=$("#t_mailsm").val();var checkv=$("#t_check").val();var kaifwv=$("#t_kaifw").val();var kd=70;$.getScript("http://user.680.com/ashx/vk/vkdata.ashx?type=getcredit&tempid="+ tempidv+"&ubus="+ ubusv+"&shiming="+ shimingv+"&issh="+ isshv+"&mailsm="+ mailsmv+"&check="+ checkv+"&kaifw="+ kaifwv,function(){if(creditNum!=""&&parseInt(creditNum)>0){creditNum=parseInt(creditNum);}else{creditNum=0;}
if(creditNum>100)kd=kd*(creditNum/100);$(".t_xypf").html("<div style=\"position:relative;width:"+ kd+"px;height:26px;overflow:hidden\"><div style=\"width:"+ creditNum+"%;height:26px;background:url(http://user.680.com/images/pingfenorg.jpg?v) left center repeat-x; z-index:3;position:absolute\"></div><div style=\"width:100%;height:26px; background:url(http://user.680.com/images/pingfengray.jpg?v) left center repeat-x; z-index:2;position:absolute\"></div></div> ");if(creditNum>59){}
else{$(".t_tishi").html("");}});}
function buy_gy_service(t){$('html,body').animate({scrollTop:"140px"},200);if($(".load_buy_spacer").length>0){if(t==0){$("#buy_fuwuid").val("0");$(".buy_title").html("被雇佣威客信息");$(".buy_pro_img_obj").hide();$(".buy_fuwu_name").hide();$(".buy_vk_img_obj").show();$("#buy_itemname").val("");}else{var fwid_v=$("#fuwuid").val();$("#buy_fuwuid").val(fwid_v);if($(".buy_pro_img_obj").length<=0){$.ajax({type:"get",url:"/ashx/getfuwu.ashx",data:"fid="+ fwid_v+"&rnd="+ Math.random(),success:function(msg){if(msg!=""&&msg.indexOf("fid-")!=-1){$(".buy_vk_img_obj").before("<div class='fl buy_vk_pro_img buy_pro_img_obj'><a href=\""+ msg.split('>')[0]+"\" target=\"_blank\"><img src=\""+ msg.split('>')[1]+"\" onerror=\"this.style.display='none'\"/></a></div>");$(".buy_vk_nameobj").before("<div class='buy_vk_name buy_fuwu_name'><a href='"+ msg.split('>')[0]+"' target='_blank'>"+ msg.split('>')[2]+"</a></div>");$("#buy_itemname").val(msg.split('>')[2]);}}});}
$(".buy_title").html("购买的服务信息");$(".buy_vk_img_obj").hide();$(".buy_pro_img_obj").show();$(".buy_fuwu_name").show();}
$(".load_buy_spacer").show();$(".load_buy_spacer_con").show();}else{var winH=$(document).height();var winW=$(document).width();var leftW=(winW- 960)/ 2;$("body").append("<div class='load_buy_spacer' style='height:"+ winH+"px;width:"+ winW+"px;position:absolute;left:0;top:0;z-index:9999999;background:#676767;zoom:1;filter:alpha(opacity=50); -moz-opacity:0.5; opacity:0.5;'></div><div class='load_buy_spacer_con' style='width:1000px;margin:0 auto;position:absolute;left:"+ leftW+"px;top:150px;z-index:99999999;zoom:1'><div style='padding:100px;text-align:center;background:#fff'>加载中.....</div></div>");$.ajax({type:"get",url:"/ashx/buy.aspx",data:"vkuid="+ $("#shopuid").val()+"&fid="+(t==1?$("#fuwuid").val():"")+"&rnd="+ Math.random(),success:function(msg){$(".load_buy_spacer_con").html("<div style='float:left;background:#fff;'>"+ msg+"</div><div style='float:left'><a href='javascript:void(0);' style='width: 38px;height: 38px;display: block;background: #ffffff;color: #a5a0a0;text-align: center;font-size: 30px;line-height: 38px;border-left: solid 1px #cac8c8;text-decoration: none;' title='关闭' onclick='buy_close_winf();'>×</a></div><div style='clear:both;'></div>");if(t==1){$(".buy_vk_img_obj").hide();}else{$(".buy_vk_img_obj").show();}}});}
return false;}
function closefloat(){var left=$(".footer_float").css("left");if(left=="0px"){left="-98%";$(".r_arrow_1").show();}else{left="0px";$(".r_arrow_1").hide();}
$(".footer_float").animate({left:left},{easing:"linear"});}
function fast_yuyue_tf(){$(".err_yy_msg").remove();$(".err_yy_msg_arrow").remove();$(".loading").remove();var fst_u_s_v=$("#yy_fullname").val();if(isValEmpty(fst_u_s_v)){$("#yy_fullname").after("<span class='err_yy_msg'>请输入您的称呼！</span><span class='err_yy_msg_arrow'></span>");document.getElementById("yy_fullname").focus();return false;}
var fst_u_tel_v=$("#yy_mobile").val();if(isValEmpty(fst_u_tel_v)){$("#yy_mobile").after("<span class='err_yy_msg'>请输入您的手机号！</span><span class='err_yy_msg_arrow'></span>");document.getElementById("yy_mobile").focus();return false;}else{if(fst_u_tel_v.length>10){}else{$("#yy_mobile").after("<span class='err_yy_msg'>请输入正确手机号！</span><span class='err_yy_msg_arrow'></span>");document.getElementById("yy_mobile").focus();return false;}}
$(".ract_qyqqdj").hide();$(".ract_qyqqdj").after("<span class='loading' style='color:rgb(0, 129, 255)' >正在提交....</span>");webAjax("/ashx/yuyue.ashx","type=fastyuyueshop&user="+ escape(fst_u_s_v)+"&tel="+ escape(fst_u_tel_v)+"&shop="+ $("#shopuid").val(),function(data){$(".loading").html("");if(data=="nouser"){document.getElementById("yy_fullname").focus();$(".ract_qyqqdj").show();return false;}else if(data=="notel"){document.getElementById("yy_mobile").focus();$(".ract_qyqqdj").show();return false;}else if(data=="ok"){$("#yy_fullname").val("");$("#yy_mobile").val("");$(".btn_1_bt").html("<b style='color: #f7c228;font-size: 24px;display: block;padding-top: 21px;'>√ 提交预约信息成功！</b>");}else{alert("系统繁忙，请稍后再试！");$(".ract_qyqqdj").show();}});}
function webJson(action_url,data,callback){$.getJSON(action_url,data,function(result){callback(result);});}
function isValEmpty(val){if(val.replace(/^\s+|\s+$/igm,'')==""){return true;}else{return false;}}
function webAjax(action_url,data,callback,datatype){$.ajax({type:'POST',datatype:datatype||'text',url:action_url,contentType:'application/x-www-form-urlencoded; charset=gb2312',data:data,cache:false,beforeSend:function(){},complete:function(){},success:function(result){callback(result);},error:function(){}});}
function on_scrollbrowser(){var sp_fixStatus=function(){var scrollTop=$(window).scrollTop();var scobjH=$(".top_t").height();var htopH=$(".h-top").height();var editer_tmp_posH=$(".editer_tmp_pos").height();var top_htbgH=$(".top_htbg").height();if(scrollTop>(scobjH+ htopH+ editer_tmp_posH+ top_htbgH)){$(".mainmenu").css("position","fixed").css("top","0").css("width","100%").css("z-index","9999999");if($(".mainmenu .guyong_nav").length<=0){$(".mainmenu ul").append("<li class=\"guyong_nav\"><a href=\"http://www.680.com/fabu/guyong.asp?uid="+ $("#shopuid").val()+"\" target=\"_blank\" onclick=\"return buy_gy_service(0);\" class='currsnav'>雇佣TA</a></li>");}}else{$(".mainmenu").css("position","static");$(".mainmenu .guyong_nav").remove();}};$(window).scroll(function(){sp_fixStatus()});$(window).resize(function(){sp_fixStatus()});}
function guanzhu(){$.ajax({type:"post",url:"/inc/ajax_upload11.asp",data:"act=guanzhu&t="+ $("#shopuid").val()+"&rnd="+ Math.random(),success:function(msg){if(msg=="ok"){alert("收藏店铺成功！");}else{alert(msg);}}});}
function fmsg(){$.ajax({type:"post",url:"/inc/ajax_upload11.asp",data:"act=fmsg&t="+ $("#shopuid").val()+"&rnd="+ Math.random(),success:function(msg){$.dialog({title:"发送站内信",width:600,height:300,max:false,min:false,padding:0,content:msg});}})}
function sendMsg(){$.ajax({type:"post",url:"/inc/ajax_upload11.asp",data:"act=fmsgdo&t="+ $("#shopuid").val()+"&uname="+ escape($("#muser").val())+"&con="+ escape($("#mconts").val())+"&rnd="+ Math.random(),success:function(msg){if(msg=="ok"){$("#neir").html("<font color=#ff6600>信息已成功发送。</font><div style='padding-top:5px; padding-left:5px; color:#999999'>"+ $("#mconts").val()+"</div>");$(".btt").remove();}else{alert(msg);}}})}