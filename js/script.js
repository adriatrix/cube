console.log('jquery is working!');

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});



function get2D(num) {
    if( num.toString().length < 2 ) // Integer of less than two digits
        return "0" + num; // Prepend a zero!
    return num.toString(); // return string for consistency
}

function emptyBox() {
  document.getElementById("showDays").innerHTML = "00";
  document.getElementById("showHours").innerHTML = "00";
  document.getElementById("showMins").innerHTML = "00";
  document.getElementById("showSecs").innerHTML = "00";

  document.getElementById("showcsDays").innerHTML = "00";
  document.getElementById("showcsHours").innerHTML = "00";
  document.getElementById("showcsMins").innerHTML = "00";
  document.getElementById("showcsSecs").innerHTML = "00";
}

emptyBox();

function showDiff() {

  var csStatus = "";
  // var date1 = document.inputForm.date1.value;
  var date1 = document.getElementById('date1').value;
  // console.log(date1);


  // var date1 = "01/02/2018 02:51:00";
  var date1 = date1.substr(6, 4) + "-" + date1.substr(0, 2) + "-" + date1.substr(3, 2) + "T" + date1.substr(11, 8);
  // console.log(date1);
  var date1 = new Date(date1);
  // console.log(date1);
  var date2 = new Date();
  // console.log(date2);

  var diff = (date2 - date1)/1000;
  var diff = Math.abs(Math.floor(diff));
  // console.log(diff);

  var days = Math.floor(diff/(24*60*60));
  var leftSec = diff - days * 24*60*60;

  var weeks = Math.floor(days /7);
  days = days - (weeks *2);

  var day1 = date1.getDay();
  // console.log(day1);
  var day2 = date2.getDay();
  // console.log(day2);

  if (day1 - day2 > 1) {
    days = days - 2;
  }

  if (day1 == 0 && day2 != 6) {
    days = days - 1;
  }

  if (day2 == 6 && day1 != 0) {
    days = days - 1;
  }

  var hrs = Math.floor(leftSec/(60*60));
  var leftSec = leftSec - hrs * 60*60;

  var min = Math.floor(leftSec/(60));
  var leftSec = leftSec - min * 60;

  var csleftSec = Math.abs(60 - leftSec);

  var csmin = Math.abs(60 - min);

  var cshrs = 23 - hrs;

  var csdays = days;
  // console.log(days);
  // console.log(cshrs);
  if (cshrs < 0 || days >= 1) {
    document.getElementById("showcsDays").style.color = "red";
    document.getElementById("showcsHours").style.color = "red";
    document.getElementById("showcsMins").style.color = "red";
    document.getElementById("showcsSecs").style.color = "red";
    document.getElementById("showStatus1").innerHTML = "over SLA";
    document.getElementById("showStatus2").innerHTML = "NOT GOOD!";
    document.getElementById("showStatus2").style.color = "red";
    csdays = days - 1;
    cshrs = hrs;
    csmin = min;
    csleftSec = leftSec;
  } else {
    document.getElementById("showcsDays").style.color = "green";
    document.getElementById("showcsHours").style.color = "green";
    document.getElementById("showcsMins").style.color = "green";
    document.getElementById("showcsSecs").style.color = "green";
    document.getElementById("showStatus1").innerHTML = "within SLA";
    document.getElementById("showStatus2").innerHTML = "SAFE";
    document.getElementById("showStatus2").style.color = "green";
  }
  cshrs = Math.abs(cshrs);

  document.getElementById("showDays").innerHTML = get2D(days);
  document.getElementById("showHours").innerHTML = get2D(hrs);
  document.getElementById("showMins").innerHTML = get2D(min);
  document.getElementById("showSecs").innerHTML = get2D(leftSec);

  document.getElementById("showcsDays").innerHTML = get2D(csdays);
  document.getElementById("showcsHours").innerHTML = get2D(cshrs);
  document.getElementById("showcsMins").innerHTML = get2D(csmin);
  document.getElementById("showcsSecs").innerHTML = get2D(csleftSec);

  if (date1 == "" || isNaN(date1)) {
    emptyBox();
    document.getElementById("showDate1").innerHTML = "<span class='has-text-danger'>" + date1 + "</span>";
  } else {
    document.getElementById("showDate1").innerHTML = "<strong>from: </strong>" + date1;
    document.getElementById("showDate2").innerHTML = "<strong>to: </strong>" + date2;
  }

  setTimeout(showDiff,1000);
}

document.getElementById("showTotalGood").innerHTML = "good orders: " + localStorage.totalgood;

function addGood() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.totalgood) {
            localStorage.totalgood = Number(localStorage.totalgood)+1;
        } else {
            localStorage.totalgood = 1;
        }
        document.getElementById("showTotalGood").innerHTML = "good: " + localStorage.totalgood;
    } else {
        document.getElementById("showTotalGood").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

// function addGood() {
//   var addgood = document.getElementById('addgood').value;
//   localStorage.setItem("totalgood", addgood+);
//
// }


var sicf = document.getElementById("showICF");
var sglp = document.getElementById("showGLP");
var sicd = document.getElementById("showICD")

function showICFactor() {
  var pricecode = document.getElementById('priceCode').value;
  var worldarea = document.getElementById('worldArea').value;
  if (!(pricecode == "------------" || worldarea == "------")) {
    switch (pricecode) {
      case "GC-1500XA":
      sicd.innerHTML = "30%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "EUR":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-2350A":
      sicd.innerHTML = "30%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "EUR":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-370XA":
      sicd.innerHTML = "35%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "EUR":
          sglp.innerHTML = "0.2350";
          sicf.value = "0.1528";
          break;
        case "AP":
          sglp.innerHTML = "0.2350";
          sicf.value = "0.1528";
          break;
        case "LATAM":
          sglp.innerHTML = "0.2350";
          sicf.value = "0.1528";
          break;
        case "MEA":
          sglp.innerHTML = "0.2350";
          sicf.value = "0.1528";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-500":
      sicd.innerHTML = "35%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "EUR":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-500NG":
      sicd.innerHTML = "35%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "EUR":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-700XA":
      sicd.innerHTML = "35%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "EUR":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-770XA":
      sicd.innerHTML = "35%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "EUR":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-AUX":
      sicd.innerHTML = "0%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1880";
          break;
        case "EUR":
          sglp.innerHTML = "0.2350";
          sicf.value = "0.2350";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1880";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1880";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1880";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-BTUSCS":
      sicd.innerHTML = "35%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "EUR":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-370SCS":
      sicd.innerHTML = "35%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "EUR":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1222";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-CAB":
      sicd.innerHTML = "20%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1504";
          break;
        case "EUR":
          sglp.innerHTML = "0.2350";
          sicf.value = "0.1880";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1504";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1504";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1504";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-370ENC":
      sicd.innerHTML = "20%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1504";
          break;
        case "EUR":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1504";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1504";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1504";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1504";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-SERV":
      sicd.innerHTML = "30%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "EUR":
          sglp.innerHTML = "0.2400";
          sicf.value = "0.1680";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-SP370":
      sicd.innerHTML = "30%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "EUR":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-SP":
      sicd.innerHTML = "30%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "EUR":
          sglp.innerHTML = "0.2200";
          sicf.value = "0.1540";
          break;
        case "AP":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "LATAM":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        case "MEA":
          sglp.innerHTML = "0.1880";
          sicf.value = "0.1316";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-ESP":
      sicd.innerHTML = "30%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "-";
          sicf.value = "";
          break;
        case "EUR":
          sglp.innerHTML = "0.1590";
          sicf.value = "0.1117";
          break;
        case "AP":
          sglp.innerHTML = "-";
          sicf.value = "";
          break;
        case "LATAM":
          sglp.innerHTML = "-";
          sicf.value = "";
          break;
        case "MEA":
          sglp.innerHTML = "-";
          sicf.value = "";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      case "GC-EUR":
      sicd.innerHTML = "25%";
      switch (worldarea) {
        case "NA":
          sglp.innerHTML = "-";
          sicf.value = "";
          break;
        case "EUR":
          sglp.innerHTML = "0.0220";
          sicf.value = "0.0164";
          fadeIn(el);
          break;
        case "AP":
          sglp.innerHTML = "-";
          sicf.value = "";
          break;
        case "LATAM":
          sglp.innerHTML = "-";
          sicf.value = "";
          break;
        case "MEA":
          sglp.innerHTML = "-";
          sicf.value = "";
          break;
        default:
          sglp.innerHTML = "";
          sicf.value = "";
        }
      break;
      default:
        sicd.innerHTML = "";
    }
  } else {
    sicf.value = "";
    sglp.innerHTML = "";
    sicd.innerHTML = "";
  }
}

function fadeIn(sicf) {
  sicf.style.opacity = 0;
  var tick = function() {
    sicf.style.opacity = +sicf.style.opacity + 0.01;
    if (+sicf.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };
  tick();
}

function showToast() {
  var quotes = [
    ['"The best way to predict the future is to create it." - Alan Kay'],
    ['"Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort." - Paul Meyer'],
    ['"There is no substitute for hard work." - Thomas Edison'],
    ['"Productivity is being able to do things that you were never able to do before." - Frank Kafka'],
    ['"If you don\'t pay appropriate attention to what has your attention, it will take more of your attention than it deserves." - David Allen'],
    ['"Either write something worth reading or do something worth writing." - Benjamin Franklin'],
    ['"Amateurs sit and wait for inspiration, the rest of us just get up and go to work." - Stephen King'],
    ['"If you spend too much time thinking about a thing, you\'ll never get it done." - Bruce Lee'],
    ['"Action is the foundational key to all success." - Pablo Picasso'],
    ['"Whatever you are by nature, keep to it; never desert your line of talent. Be what nature intended you for and you will succeed." - Sydney Smith'],
    ['"Don\'t argue for other people\'s weaknesses. Don\'t argue for your own. When you make a mistake, admit it, correct it, and learn from it, immediately." - Alan Kay'],
    ['"Never mistake motion for action" - Ernest Hemingway'],
    ['"There is no substitute for hard work." - Thomas Edison'],
    ['"Fame is vapor, popularity an accident, riches take wings. Only one thing endures, and that is character." - Horace Greeley'],
    ['"While one person hesitates because he feels inferior, the other is busy making mistakes and becoming superior." - Henry C. Link'],
    ['"Concentrate all your thoughts upon the work in hand. The sun\'s rays do not burn until brought to a focus." - Alexander Graham Bell'],
    ['"Simplicity boils down to two steps: Identify the essential. Eliminate the rest."  - Leo Babuta'],
    ['"If you have time to whine then you have time to find solution." - Dee Dee Artner'],
    ['"Don\'t interpret anything too much. This is time waster number 1."  - Dee Dee Artner'],
    ['"Great things in business are never done by one person,They are done by a team of people" - Steve Jobs'],
    ['"Never expect. Never assume. Never ask. Never demand. Just let it be.  If it\'s meant to be, it will happen." - Mary Joy Benedicto'],
    ['"If you can not do great things, Do small things in a great way." - Napoleon Hill'],
    ['"Until we can manage time, we can manage nothing else." - Peter Drucker'],
    ['"Being rich is having money; being wealthy is having time." - Margaret Bonnano'],
    ['"Life is too complicated not to be orderly." - Martha Stewart'],
    ['"It’s not knowing what to do, it’s doing what you know." - Tony Robbins'],
    ['"It is not enough to be busy… The question is: what are we busy about?" - Henry David Thoreau'],
    ['"Friends don\'t let friends be stupid alone, they do it together" - Sanosuke Sagara'],
    ['"Nothing is less productive than to make more efficient what should not be done at all." - Peter Drucker'],
    ['"I like thinking big. If you’re going to be thinking anything, you might as well think big." - Donald Trump'],
    ['"Success is often achieved by those who don’t know that failure is inevitable." - Coco Chanel'],
    ['"The key is not to prioritize what’s on your schedule, but to schedule your priorities." - Stephen Covey'],
    ['"Ordinary people think merely of spending time, great people think of using it." - Arthur Schopenhauer'],
    ['"Time is the scarcest resource and unless it is managed nothing else can be managed" - Peter Drucker'],
    ['"Focus on being productive instead of busy." - Tim Ferriss'],
    ['"I feel that luck is preparation meeting opportunity." - Oprah Winfrey'],
    ['"Think of many things, do one." - Portuguese proverb'],
    ['"The desire of knowledge, like the thirst for riches, increases ever with the acquisition of it." - Laurence Sterne'],
    ['"By failing to prepare, you are preparing to fail." - Benjamin Franklin'],
    ['"Efficiency is doing things right. Effectiveness is doing the right things." - Peter Drucker'],
    ['"Don’t confuse the urgent with the important." - Preston Ni'],
    ['"If there are nine rabbits on the ground, if you want to catch one, just focus on one." - Jack Ma'],
    ['"Working on the right thing is probably more important than working hard." - Caterina Fake'],
    ['"A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing" - George Bernard Shaw'],
    ['"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change." - Charles Darwin'],
    ['"Action is the foundational key to all success." - Picasso'],
    ['"Never mistake motion for action." - Ernest Hemingway'],
    ['"If you spend too much time thinking about a thing, you\'ll never get it done." - Bruce Lee'],
    ['"While one person hesitates because he feels inferior, the other is busy making mistakes and becoming superior." - Henry Link'],
    ['"With great power comes great responsibility." - Ben Parker']
  ];


    var randomX = Math.floor(Math.random() * 50);
    console.log(randomX);
    document.getElementById("snackbar").innerHTML = quotes[randomX];
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);

    setTimeout(showToast,60000);
}

function checkComputations() {
  computeDiscPrice();
  computeDiscount();
}


function computeDiscount() {
  var listedPrice = document.getElementById('listedprice').value;
  var discounted = document.getElementById('discount').value;

  if (listedPrice == "" || (discounted == "")) {
    document.getElementById("discedprice").value = "";
  } else {
    var computedDiscount = (listedPrice*((100-discounted)/100)).toFixed(2);
    document.getElementById("discedprice").value = computedDiscount;
    document.getElementById("discount").value = (discounted*1).toFixed(2);
  }
}

function computeDiscPrice() {
  var discedPrice = document.getElementById('discedprice').value;
  var listedPrice = document.getElementById('listedprice').value;

  var computedDisc = (((discedPrice - listedPrice) / - listedPrice) * 100).toFixed(2);
  console.log(computedDisc);

  if (listedPrice == "" || (discedPrice == "")) {
    document.getElementById("discount").value = "";
  } else if (computedDisc < 0){
    document.getElementById("discount").style.color = "red";
    document.getElementById("discount").value = computedDisc;
  } else {
    document.getElementById("discount").style.color = "green";
    document.getElementById("discount").value = computedDisc;
  }

}

$( document ).ready(function() {
  console.log( "document loaded" );
  showToast();
});

$( window ).on( "load", function() {
  console.log( "window loaded" );
});

if (typeof(Storage) !== "undefined") {
    console.log( "storage support available" );
} else {
  console.log( "storage unsupported" );
}
