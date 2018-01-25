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

$("#showCalc").click(function() {
  $(".modal").addClass("is-active");
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});



function emptyBox() {
  document.getElementById("showDays").innerHTML = "00";
  document.getElementById("showHours").innerHTML = "00";
  document.getElementById("showMins").innerHTML = "00";
  document.getElementById("showSecs").innerHTML = "00";

  document.getElementById("showccDays").innerHTML = "00";
  document.getElementById("showccHours").innerHTML = "00";
  document.getElementById("showccMins").innerHTML = "00";
  document.getElementById("showccSecs").innerHTML = "00";

  document.getElementById("showcsDays").innerHTML = "00";
  document.getElementById("showcsHours").innerHTML = "00";
  document.getElementById("showcsMins").innerHTML = "00";
  document.getElementById("showcsSecs").innerHTML = "00";
}

emptyBox();


function showDiff() {

  var csStatus = "";
  var ccStatus = "";
  // var date1 = document.inputForm.date1.value;
  var date1 = document.getElementById('date1').value
  console.log(date1);


  // var date1 = "01/02/2018 02:51:00";
  var date1 = date1.substr(6, 4) + "-" + date1.substr(0, 2) + "-" + date1.substr(3, 2) + "T" + date1.substr(11, 8);
  console.log(date1);
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
  console.log(day1);
  var day2 = date2.getDay();
  console.log(day2);

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
  var ccleftSec = Math.abs(60 - leftSec);

  var csmin = Math.abs(60 - min);
  var ccmin = Math.abs(60 - min);

  var cshrs = 19 - hrs;
  if (cshrs < 0) {
    document.getElementById("showcsDays").style.color = "red";
    document.getElementById("showcsHours").style.color = "red";
    document.getElementById("showcsMins").style.color = "red";
    document.getElementById("showcsSecs").style.color = "red";
  } else {
    document.getElementById("showcsDays").style.color = "green";
    document.getElementById("showcsHours").style.color = "green";
    document.getElementById("showcsMins").style.color = "green";
    document.getElementById("showcsSecs").style.color = "green";
  }
  cshrs = Math.abs(cshrs);

  var cchrs = 3 - hrs;
  if (cchrs < 0) {
    document.getElementById("showccDays").style.color = "red";
    document.getElementById("showccHours").style.color = "red";
    document.getElementById("showccMins").style.color = "red";
    document.getElementById("showccSecs").style.color = "red";
  } else {
    document.getElementById("showccDays").style.color = "green";
    document.getElementById("showccHours").style.color = "green";
    document.getElementById("showccMins").style.color = "green";
    document.getElementById("showccSecs").style.color = "green";
  }
  cchrs = Math.abs(cchrs);

  document.getElementById("showDays").innerHTML = get2D(days);
  document.getElementById("showHours").innerHTML = get2D(hrs);
  document.getElementById("showMins").innerHTML = get2D(min);
  document.getElementById("showSecs").innerHTML = get2D(leftSec);

  document.getElementById("showccDays").innerHTML = get2D(days);
  document.getElementById("showccHours").innerHTML = get2D(cchrs);
  document.getElementById("showccMins").innerHTML = get2D(ccmin);
  document.getElementById("showccSecs").innerHTML = get2D(ccleftSec);

  document.getElementById("showcsDays").innerHTML = get2D(days);
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
