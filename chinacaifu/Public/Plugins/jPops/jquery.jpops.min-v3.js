jQuery.jPops={conf:{title:"提示",content:"内容",width:"auto",height:"auto",okBtnTxt:"确定",cancelBtnTxt:"取消",showBtns:!0,verticalOffset:0,horizontalOffset:0,overlayOpacity:.5,overlayColor:"#000",callback:null,okCallback:null,cancelCallback:null},alert:function(a){var b=$.extend({},this.conf,a);b.type="alert",this.showAlerts(b)},confirm:function(a){var b=$.extend({},this.conf,a);b.type="confirm",this.showAlerts(b)},custom:function(a){var b=$.extend({},this.conf,a);b.type="custom",this.showAlerts(b)},message:function(a){this.conf.timing=1500;var b=$.extend({},this.conf,a);b.type="message",this.showAlerts(b)},showAlerts:function(a){var b=this;if($("#jpops").length<1){var c='<div id="jpops" style="display:none;"><div class="jpops-title"><div id="jpops-title-txt"></div><a href="javascript:;" id="jpops-close"></a></div><div id="jpops-container"></div><div id="jpops-actions"><a href="javascript:;" class="btn btn-blue" id="jpops-btn-ok">确定</a><a href="javascript:;" class="btn" id="jpops-btn-cancel">取消</a></div></div>';$("body").append(c)}var d=$("#jpops"),e=$("#jpops-title-txt"),f=$("#jpops-container"),g=$("#jpops-actions"),h=$("#jpops-close"),i=$("#jpops-btn-ok"),j=$("#jpops-btn-cancel");switch(e.text(a.title),i.text(a.okBtnTxt),j.text(a.cancelBtnTxt),a.type){case"message":f.html('<p style="padding:30px 0;font-size:14px;">'+a.content+"</p>"),g.hide();break;case"alert":f.html('<p style="padding:30px 0;font-size:14px;">'+a.content+"</p>"),a.showBtns?(g.show(),j.hide()):g.hide();break;case"confirm":f.html('<p style="padding:30px 0;font-size:14px;">'+a.content+"</p>"),a.showBtns?(g.show(),j.show()):g.hide();break;case"custom":f.html(a.content),a.showBtns?(g.show(),j.show()):g.hide()}if(i.bind("click",function(){var c=!1;null!=a.callback?c=a.callback(!0):null!=a.okCallback&&(c=a.okCallback()),c&&(b.hideAlerts(),a.callback=null,a.okCallback=null)}),j.bind("click",function(){var c=!1;null!=a.callback?c=a.callback(!1):null!=a.cancelCallback&&(c=a.cancelCallback()),c&&(b.hideAlerts(),a.callback=null,a.cancelCallback=null)}),d.show(),"auto"!=a.width)d.width(parseInt(a.width));else switch(a.type){case"message":case"alert":case"confirm":$("#jpops").css("width",400);break;case"custom":$("#jpops").width()>=900?$("#jpops").width(900):$("#jpops").width()<500&&$("#jpops").width(500)}if("auto"!=a.height&&f.height(parseInt(a.height)),this.showOverlay(a),this.reposition(a),"message"==a.type){var k=function(){var c=!0;null!=a.callback&&(c=a.callback()),c&&(b.hideAlerts(),a.callback=null)};b.timer&&clearTimeout(b.timer),b.timer=setTimeout(k,a.timing)}h.bind("click",function(){b.hideAlerts(b),"message"==a.type&&k(),a.callback=null,a.okCallback=null,a.cancelCallback=null})},hideAlerts:function(){$("#jpops").hide().removeAttr("style"),$("#jpops-container").removeAttr("style"),this.hideOverlay()},showOverlay:function(a){$("#jpops-overlay").length<1&&$("body").append('<div id="jpops-overlay"></div>');var b=$("body").height(),c=$(window).height(),d=0;d=c>b?c:b,$("#jpops-overlay").css({position:"absolute",zIndex:99998,top:"0px",left:"0px",width:"100%",height:d,background:a.overlayColor,opacity:a.overlayOpacity}),$("#jpops-overlay").show()},hideOverlay:function(){$("#jpops-overlay").hide()},showLoading:function(a){var b=$.extend({},this.conf,a);if($("#jpops-loading").length<1){var c='<div id="jpops-loading" style="display:none;"></div>';$("body").append(c)}this.showOverlay(b);var d=$("#jpops-loading");d.css({top:$(window).scrollTop()+$(window).height()/2-d.outerHeight()/2,left:$(window).width()/2-d.outerWidth()/2}),d.fadeIn(300)},hideLoading:function(){$("#jpops-loading").fadeOut(300),this.hideOverlay()},reposition:function(a){var b=$("#jpops"),c=$("#jpops-title-txt"),d=$("#jpops-container"),e=$("#jpops-actions"),f=b.outerWidth(),g=b.outerHeight(),h=$(window).width(),i=$(window).height(),j=0,k=0;if(a&&(j=a.verticalOffset,k=a.horizontalOffset),g>=i){var l=i-c.height()-e.height()-100;d.css({height:l,overflow:"auto"}),g=$("#jpops").outerHeight()}$("#jpops").css({top:$(window).scrollTop()+i/2-g/2+k,left:h/2-f/2+j})},timer:null};