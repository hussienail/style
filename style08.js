$(`<style font="http://fonts.googleapis.com/css?family=Amiri&subset=arabic,latin"> 
a.label.label-primary.fl{padding:5px!important;margin-bottom:2px;text-align:center!important;background-image:radial-gradient(circle,#000000,#000000,#ff001466)!important;font-family:jazeera,FontAwesome}
ul.nav.nav-tabs>li>a{color:#fefffc;background:0 0;margin:auto;text-align:center;width:100%;border-radius:7px;margin-top:2px;font-family:jazeera,FontAwesome;border-right:2px ridge!important;border-left:3px ridge!important;background-image:linear-gradient( 
90deg,#ff0014ba 0,#000000 10%,#000000 51%,#000000 89%,#ff0014ba 100%);border:1px solid #f0ad4e;background-color:inherit!important;height:32px;text-align:center;border-radius:6px;margin:2px 0;padding:4px 0!important;width:113px!important;margin-left:5px!important;font-family:'jazeera',FontAwesome}
div#l1 button{display:block;width:50%;margin-left:90px;padding:1px 2px;text-align:center;border:none;background:linear-gradient( 
90deg,#ff00148a 0,#000000 10%,#000000 51%,#000000 89%,#ff00148a 100%);top:74px;border-radius:4px;font-size:.9rem;color:#fff;cursor:pointer;transition:.3s}
div#l2 button,div#l3 button{position:absolute;width:110px;margin-top:0;padding:1px 2px;text-align:center;border:none!important;background:linear-gradient( 
90deg,#ff00148a 0,#000000 10%,#000000 51%,#000000 89%,#ff00148a 100%);outline:none;border-radius:4px;font-size:.9rem;color:#fff;cursor:pointer;transition:.3s;font-family:jazeera,FontAwesome}
</style>`).insertBefore('body');
$('.nav-tabs').addClass('fl').css('width','100%');
$(`<style>

.ae.fa.label.label-primary.fa-user:hover::after {
     content: "التواجد الان";
    background-color: #f00;
    top: -32px;
    left: 4px;
    position: absolute;
    border-radius: 6px;
    border: 4px solid #888 !important;
}
.ae.fa.label.label-primary.fa-user:hover::before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    border-style: solid;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    left: calc(50% - 10px);
    top: -12px;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #888 transparent;
}

.ae.fa.chats.label.fa-comment.label-primary:hover::after {
    content: "الرسايل الخاصة";  
    background-color: #f00;
    top: -32px;
    left: -7px;
    position: absolute;
    border-radius: 6px;
    border: 4px solid #888 !important;
}
.ae.fa.chats.label.fa-comment.label-primary:hover::before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    border-style: solid;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    left: calc(50% - 10px);
    top: -12px;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #888 transparent;
}
.ae.fa.label.label-primary.fa-users:hover::after {
    content: "غرف الدردشة";
    background-color: #f00;
    top: -32px;
    left: -7px;
    position: absolute;
    border-radius: 6px;
    border: 4px solid #888 !important;
}
.ae.fa.label.label-primary.fa-users:hover::before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    border-style: solid;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    left: calc(50% - 10px);
    top: -12px;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #888 transparent;
}
.ae.fa.label.fa-commenting-o.label-primary:hover::after {
    content: "جدار النشر";  
    background-color: #f00;
    top: -32px;
    left: 0px;
    position: absolute;
    border-radius: 6px;
    border: 4px solid #888 !important;
}
.ae.fa.label.fa-commenting-o.label-primary:hover::before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    border-style: solid;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    left: calc(50% - 10px);
    top: -12px;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #888 transparent;
}
.ae.label.label-primary.fa.fa-gear:hover::after {
    content: "الاعدادات";  
    background-color: #f00;
    top: -32px;
    left: 2px;
    position: absolute;
    border-radius: 6px;
    border: 4px solid #888 !important;
}
.ae.label.label-primary.fa.fa-gear:hover::before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    border-style: solid;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    left: calc(50% - 10px);
    top: -12px;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #888 transparent;
}
div#tlogins img.fitimg.fl.u-pic {
    MARGIN-RIGHT: 5PX;
    border: .0001px solid #ffffff !important;
    background-image: url(pic.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 42px;
    height: 42px;
    user-select: none;
    cursor: default;
    vertical-align: middle;
    font-family: serif;
    font-weight: bold;
    text-shadow: none !important;
    font-size: 15px !important;
    margin-top: 1px;
    border-radius: 50%;
    box-shadow: inset 0 1px 1px #ffc107, 0 0 8px #888;
}
div#isfil.corner.border.label.label-primary {
    font-size: .6rem;
    text-align: center;
    margin: -14px auto 0;
    font-family: jazeera,FontAwesome;
    font-size: 11px!important;
    width: 50%;
    border: 1px solid #000;
    border-radius: 5px;
    line-height: 1.6;
}
div.hand.corner {
-webkit-animation: swoopOut 3s 1 ease forwards;
    text-align: center;
    color: #212529;
    font-family: jazeera,FontAwesome;
    font-size: 11px!important;
    border: 1px solid #212529;
    left: 15px;
    transform: translate(16px,6px);
    width: 90%;
    border-radius: 10px;
    box-shadow: 4px 4px 0 #000;
    background: linear-gradient(225deg,#fefffc,#f8f9fa,#fefffc,#fefffc)!important;
    -webkit-animation: swoopOut 10s ease 1 forwards;
} 

@-webkit-keyframes swoopOut {
  100% {
    position:absolute;
    left:50px;
    visibility:hidden;
  }
  24% {
    position:absolute;
    left:50px;
  }
.label-warning {
    background-color: #f0ad4e;
}

}
</style>`).insertBefore("body");
$('.checkbox label').html(`<input id="stealth" type="checkbox" value=""><img id="Yah13" src="https://i.top4top.io/p_1982g29mx1.gif" width="70%" style="">`)
$('.ae.label.label-primary.fa.fa-gear').html(` `);
$('label.ae.fa.label.label-primary.fa-commenting-o').html(` `);
$('.ae.fa.label.label-primary.fa-users').html(` `);
$('.fa.fa-send.fl.btn.btn-primary').html(` `);
$('.fa.fa-send.sndbc.fl.btn.btn-primary').html(` `);
$(document.getElementById("tbox").placeholder = "  حيـأكم شـأت نجمه الحب ");
$("[data-target=#wall]").attr('title',' ابداعات الحايط')
$("[data-target=#settings]").attr('title','اعدادات')
$("[data-target=#rooms]").attr('title','الغرف')
$("[data-target=#chats]").attr('title','الخاص')
$("[data-target=#users]").attr('title','المتواجدين')
$('.fl.ustat')
    .css('width', '3px'), $('.fa.fa-user-plus')
    .html(`تسجيل `), document.getElementById('u1')
    .placeholder = 'اكتب اسمك من 5 احرف فقط ', 
document.getElementById('pass1')
  .placeholder = 'كلمة المرور', document.getElementById('u2')
    .placeholder = 'فخأمة طلتك تنورنا', document.getElementById('pass2')
    .placeholder = ' ? بـاسوردك ولاتنساه يـ جميل ', document.getElementById('u3')
    .placeholder = '? أكتب اسمك ولازم تحفظه ';
$( "div#l1 button.btn.btn-primary" ).bind( "click", function() {
alert( "اهلا وسهلا بكم في شات نجمه الحب   سجل عضوية تحصل على 5000 لايك وزخرفة :: طريقة التسجيل اضغط على خيار (تسجيل) اكتب (اكتب اسمك المستعار + كلمة المرور ) وبعدها اضغط دخول" );
});

$("label.label.tc.border.cp.btn.label-danger.fl").html("<span class='fl fa fa-star-half-o'></span>لوحة تحكم نجمه الحب ")

$(`<div style=" color: #FC1717;text-align: center;margin-bottom: 10px; font-family:'jazeera-light', Fontawesome"> إعلانات نجمه الحب للضروره فقط </div>`).insertBefore('span.fl.fa.fa-send');
$(`<img src="/site/1632168440085.gif"class="img asim aetar"style="height: 26%;
width:100%;
margin-top: 1px;
background-color: white;
border-radius: 10px;
border: 2px dashed#544d4d">`).insertBefore('.nav-tabs');

$(`<!--<a class="fl fa fa-image btn ui-corner-all ui-shadow ui-btn ui-btn-inline borderg" style="color:purple;margin:2px;width: 106px;text-align: center;font-size:15px!important;"><span dir="rtl"> (0) </span><span style="font-size: 15px!important;>omar alhaded </span></a>-->
<a href="ASIM10" target="_blank" style="width:107px; margin-right: 5px;
margin-left: 2px;text-align: center;float: right;border-radius: 5px;
border-color: #990033;
padding: 3px;font-family: 'Cairo', sans-serif, Fontawesome;font-size: 13px!important;" class="SLPBeats fab fa-angellist" >Style By: ASIM</a>`).insertBefore('a.fl.fa.fa-ban.btn.ui-corner-all.ui-shadow.ui-btn.ui-btn-inline.umute.borderg');
$(`<span id="name" style="
    position: relative;
    color: #fff;
    display:block;
    top: 45px;
    font-size: 12px !important;
    background: #000;
    top: 68px!important;
    margin: -24px;
    border: 2px solid #dc3545;
    "</span>`).insertBefore
}
													catch (e){
															console.log(e)
														}
