

$(window).on('load', function() { // makes sure the whole site is loaded 

  $('#status').fadeOut(); // will first fade out the loading animation 

  $('#preloader').delay(10).fadeOut('slow'); // will fade out the white DIV that covers the website. 

  $('body').delay(10).css({'overflow':'visible'});

})





$('.nav-link').on('click',function() {

  $('.navbar-collapse').collapse('hide');

});



/*

$(document).ready(function(){

    var $nav = $('.top-nav-bg');//Caching element

    // hide .navbar first - you can also do this in css .nav{display:none;}



    // fade in .navbar

    $(function () {

        $(window).scroll(function () {

            // set distance user needs to scroll before we start fadeIn

            if (($(this).scrollTop() > 450)&&(screen.width > 767)) { //For dynamic effect use $nav.height() instead of '100'

                $('.top-nav-bg').css("margin-top", "0px");

                $nav.fadeIn();

            } else {

                $nav.fadeOut();

            }

        });

    });



});



  

*/





/*

    Smooth scroll functionality for anchor links (animates the scroll

    rather than a sudden jump in the page)

*/

$('.nav-link').click(function(e){

  e.preventDefault();

  var target = $($(this).attr('href'));

  if(target.length){

    var scrollTo = target.offset().top;

    $('body, html').animate({scrollTop: scrollTo+'px'}, 100,'swing');

  }

});





/* window resize 



$('.navbar-toggler').on('click', function () {

    $('.navbar').toggleClass('navbar-dark');

    $('.navbar').toggleClass('bg-dark');

    $('.navbar-nav >.nav-item>a').toggleClass('nav-btn-color');

});



*/

/*



$(window).scroll(function() {    // this will work when your window scrolled.

        var height = $(window).scrollTop();  //getting the scrolling height of window

        if((height  > 1)&&(screen.width < 768)) {

            $(".navbar").css({"z-index": "9998"});

            $(".navbar").css({"position": "fixed"});

            $(".navbar").css({"top": "100"});

            $(".navbar").css({"right": "0"});

             $(".navbar").css({"top": $(window).scrollTop() });

        } else{

            $(".navbar").css({"position": "relative"});

        }

    });





  */



/* data count */







var a = 0;

$(window).scroll(function() {



  var oTop = $('#counter').offset().top - window.innerHeight;

  if (a == 0 && $(window).scrollTop() > oTop) {

    $('.count').each(function() {

      var $this = $(this),

        countTo = $this.attr('data-count');

      $({

        countNum: $this.text()

      }).animate({

          countNum: countTo

        },



        {



          duration: 7000,

          easing: 'swing',

          step: function() {

            $this.text(Math.floor(this.countNum));

          },

          complete: function() {

            $this.text(this.countNum);

            //alert('finished');

          }



        });

    });

    a = 1;

  }



});









// ---------------------------------------------------------whatsappchat



document.getElementById('whatsapp-chat').addEventListener("mouseover", showchatbox);

document.getElementById('chat-top-right').addEventListener("click", closechatbox);

document.getElementById('send-btn').addEventListener("click", sendmsg);

window.addEventListener("load", showchatboxtime);

function showchatbox(){

document.getElementById('chat-box').style.right='8%';

}

function closechatbox(){

document.getElementById('chat-box').style.right='-500px';





}

function showchatboxtime(){

setTimeout(launchbox,5000);

}

function launchbox(){

document.getElementById('chat-box').style.right='8%';



}

function sendmsg(){

var msg = document.getElementById('whats-in').value;

var relmsg = msg.replace(/ /g,"%20");

window.open('https://api.whatsapp.com/send?phone=+971562531699text='+relmsg,'_blank');



}







// -------------------------------------------------------



