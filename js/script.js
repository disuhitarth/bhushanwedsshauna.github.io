/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Set the date we're counting down to
var countDownDateWedding = new Date("June 29, 2024 14:30:00").getTime();
var countDownDateMerriage = new Date("June 28, 2024 09:30:00").getTime();
var countDownDateSangeet = new Date("June 26, 2024 18:00:00").getTime();
var countDownDateMahendi = new Date("June 25, 2024 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDateWedding - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    //document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDateWedding - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    //document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    document.getElementById("timeWedding").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeWedding").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

var a = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDateMerriage - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    //document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    document.getElementById("timeMerriage").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeMerriage").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

var b = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDateSangeet - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    //document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    document.getElementById("timeSangeet").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeSangeet").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

var c = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDateMahendi - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    //document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    document.getElementById("timeMahendi").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeMahendi").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 28th and 29th June, 2024!', styles);


console.log('%cYour presence is requested!%c\n\nRegards: Nehal Rao', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)

// $(function() {
//     var targetDate  = new Date("June 29, 2024 14:30:00")
//     // var targetDate  = new Date(Date.UTC(2024,06,29));
//     var now   = new Date();
  
//     window.days = daysBetween(now, targetDate);
//     var secondsLeft = secondsDifference(now, targetDate);
//     window.hours = Math.floor(secondsLeft / 60 / 60);
//     secondsLeft = secondsLeft - (window.hours * 60 * 60);
//     window.minutes = Math.floor(secondsLeft / 60 );
//     secondsLeft = secondsLeft - (window.minutes * 60);
//     console.log(secondsLeft);
//     window.seconds = Math.floor(secondsLeft);
  
//     startCountdown();
//   });
//   var interval;
  
//   function daysBetween( date1, date2 ) {
//     //Get 1 day in milliseconds
//     var one_day=1000*60*60*24;
  
//     // Convert both dates to milliseconds
//     var date1_ms = date1.getTime();
//     var date2_ms = date2.getTime();
  
//     // Calculate the difference in milliseconds
//     var difference_ms = date2_ms - (date1_ms + one_day);
      
//     // Convert back to days and return
//     return Math.round(difference_ms/one_day); 
//   }
  
//   function secondsDifference( date1, date2 ) {
//     //Get 1 day in milliseconds
//     var one_day=1000*60*60*24;
  
//     // Convert both dates to milliseconds
//     var date1_ms = date1.getTime();
//     var date2_ms = date2.getTime();
//     var difference_ms = date2_ms - date1_ms;
//     var difference = difference_ms / one_day; 
//     var offset = difference - Math.floor(difference);
//     return offset * (60*60*24);
//   }
  
  
  
//   function startCountdown() {
//     $('#input-container').hide();
//     $('#countdown-container').show();
    
//     displayValue('#js-days', window.days);
//     displayValue('#js-hours', window.hours);
//     displayValue('#js-minutes', window.minutes);
//     displayValue('#js-seconds', window.seconds);
  
//     interval = setInterval(function() {
//       if (window.seconds > 0) {
//         window.seconds--;
//         displayValue('#js-seconds', window.seconds);
//       } else {
//         // Seconds is zero - check the minutes
//         if (window.minutes > 0) {
//           window.minutes--;
//           window.seconds = 59;
//           updateValues('minutes');
//         } else {
//           // Minutes is zero, check the hours
//           if (window.hours > 0)  {
//             window.hours--;
//             window.minutes = 59;
//             window.seconds = 59;
//             updateValues('hours');
//           } else {
//             // Hours is zero
//             window.days--;
//             window.hours = 23;
//             window.minutes = 59;
//             window.seconds = 59;
//             updateValues('days');
//           }
//           // $('#js-countdown').addClass('remove');
//           // $('#js-next-container').addClass('bigger');
//         }
//       }
//     }, 1000);
//   }
  
  
//   function updateValues(context) {
//     if (context === 'days') {
//       displayValue('#js-days', window.days);
//       displayValue('#js-hours', window.hours);
//       displayValue('#js-minutes', window.minutes);
//       displayValue('#js-seconds', window.seconds);
//     } else if (context === 'hours') {
//       displayValue('#js-hours', window.hours);
//       displayValue('#js-minutes', window.minutes);
//       displayValue('#js-seconds', window.seconds);
//     } else if (context === 'minutes') {
//       displayValue('#js-minutes', window.minutes);
//       displayValue('#js-seconds', window.seconds);
//     }
//   }
  
//   function displayValue(target, value) {
//     var newDigit = $('<span></span>');
//     $(newDigit).text(pad(value))
//       .addClass('new');
//     $(target).prepend(newDigit);
//     $(target).find('.current').addClass('old').removeClass('current');
//     setTimeout(function() {
//       $(target).find('.old').remove();
//       $(target).find('.new').addClass('current').removeClass('new');
//     }, 900);
//   }
  
//   function pad(number) {
//     return ("0" + number).slice(-2);
//   }