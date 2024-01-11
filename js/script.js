var ofSec= $("#about").offset().top;

$(window).scroll(()=>{
    var wScroll = $(window).scrollTop();
        if( wScroll > ofSec -100 )
        {
            $(".nav").css("backgroundColor"," var(--main-color)");
            $(".nav").css("opacity"," .8");
        }
        else
        {
            $(".nav").css("backgroundColor"," rgba(0, 0, 0, 0.632)");
        }
})

$(document).ready(function (){
    $(".lading .sk-chase").fadeOut(1000, ()=>{
        $(".lading").fadeOut(1000,()=>{
            $("body").css("overflow-y", "auto");
    });
        })
})

$(window).scroll(()=>{
    var wScroll = $(window).scrollTop();
        if( wScroll > ofSec -170 )
        {
            $(".colorBox").css("color","black");
        }
        else
        {
            $(".colorBox").css("color"," white");
        }
});

var contWidth = $(".colorBox").outerWidth();
$(".colorOpstion").animate({left: `-${contWidth}`});

$("#toggelBtn").click(function(){
    if($(".colorOpstion").css("left")== "0px")
    {
        $(".colorOpstion").animate({left: `-${contWidth}`},1000);
    }
    else
    {
        $(".colorOpstion").animate({left: `0px`},1000);
    }
});

var color = $(".color");
color.eq(0).css("backgroundColor","#e5b87f")
color.eq(1).css("backgroundColor","#fe928a")
color.eq(2).css("backgroundColor","#fcf3ea")
color.eq(3).css("backgroundColor","#ace6f4")
color.eq(4).css("backgroundColor","#1d89aa")
color.eq(5).css("backgroundColor","#a0886c")
color.eq(6).css("backgroundColor","#aec671")
color.eq(7).css("backgroundColor","#f4d9c8")
color.eq(8).css("backgroundColor","#6f939f")
color.eq(9).css("backgroundColor","#394d67")
color.eq(10).css("backgroundColor","#fd1c03")
color.eq(11).css("backgroundColor","#0142c0")
color.eq(12).css("backgroundColor","#c02701")

color.click(function(e){
    colorVal = $(e.target).css("backgroundColor");
    $("body").css("--main-color",`${colorVal}`);
})