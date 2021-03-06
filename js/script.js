console.log('jquery is working!');

document.addEventListener('DOMContentLoaded', function () {
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
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
  document.getElementById("showDays").innerHTML = "00<span class='has-text-weight-normal is-size-7'>d</span>";
  document.getElementById("showHours").innerHTML = "00<span class='has-text-weight-normal is-size-7'>h</span>";
  document.getElementById("showMins").innerHTML = "00<span class='has-text-weight-normal is-size-7'>m</span>";
  document.getElementById("showSecs").innerHTML = "00<span class='has-text-weight-normal is-size-7'>s</span>";
  
  document.getElementById("showcsDays").innerHTML = "00<span class='has-text-weight-normal is-size-7'>d</span>";
  document.getElementById("showcsHours").innerHTML = "00<span class='has-text-weight-normal is-size-7'>h</span>";
  document.getElementById("showcsMins").innerHTML = "00<span class='has-text-weight-normal is-size-7'>m</span>";
  document.getElementById("showcsSecs").innerHTML = "00<span class='has-text-weight-normal is-size-7'>s</span>";
  document.getElementById("showcsDays").style.color = "whitesmoke";
  document.getElementById("showcsHours").style.color = "whitesmoke";
  document.getElementById("showcsMins").style.color = "whitesmoke";
  document.getElementById("showcsSecs").style.color = "whitesmoke";

  document.getElementById("day2Title").innerHTML = "Under or Over?";
  document.getElementById("day2Title").style.color = "black";
  
}

function getDateNow() {
  var datenow = new Date();
  datenow = String(datenow);
  var ddatenow = datenow.split(" ");

  switch (ddatenow[1]) {
    case "Jan": 
      ddatenow[1] = "01";
      break;
    case "Feb": 
      ddatenow[1] = "02";
      break;
    case "Mar": 
      ddatenow[1] = "03";
      break;
    case "Apr": 
      ddatenow[1] = "04";
      break;
    case "May": 
      ddatenow[1] = "05";
      break;
    case "Jun": 
      ddatenow[1] = "06";
      break;
    case "Jul": 
      ddatenow[1] = "07";
      break;
    case "Aug": 
      ddatenow[1] = "08";
      break;
    case "Sep": 
      ddatenow[1] = "09";
      break;
    case "Oct": 
      ddatenow[1] = "10";
      break;
    case "Nov": 
      ddatenow[1] = "11";
      break;
    case "Dec": 
      ddatenow[1] = "12";
      break;
    default:
  }
  document.getElementById("exampleDate").innerHTML = " " + ddatenow[1] + "/" + ddatenow[2] + "/" + ddatenow[3] + " " + ddatenow[4];
  // setTimeout(getDateNow, 1000);
}

getDateNow();
emptyBox();

function showDiff() {
  var csStatus = "";
  var date1 = document.getElementById('date1').value;

  var date1 = date1.substr(6, 4) + "-" + date1.substr(0, 2) + "-" + date1.substr(3, 2) + "T" + date1.substr(11, 8);

  var date1 = new Date(date1);
  var date2 = new Date();

  var diff = (date2 - date1)/1000;

  var diff = Math.abs(Math.floor(diff));

  var days = Math.floor(diff/(24*60*60));
  var leftSec = diff - days * 24*60*60;

  var weeks = Math.floor(days /7);
  
  
  var day1 = date1.getDay();
  var day2 = date2.getDay();
  
  if (weeks == 0) {
    if (day1 - day2 > 0 ) {
      days = days - 2;
    } else if (day2 == 6) {
      days = days - 1;
    } 
  } else {
    days = days - (weeks *2);
  }
  
  var hrs = Math.floor(leftSec/(60*60));
  var leftSec = leftSec - hrs * 60*60;
  
  var min = Math.floor(leftSec/(60));
  var leftSec = leftSec - min * 60;
  
  var csleftSec = Math.abs(60 - leftSec);
  var csmin = Math.abs(60 - min);
  var cshrs = 23 - hrs;
  var csdays = days;

  if (cshrs < 0 || days >= 1) {
    document.getElementById("showcsDays").style.color = "red";
    document.getElementById("showcsHours").style.color = "red";
    document.getElementById("showcsMins").style.color = "red";
    document.getElementById("showcsSecs").style.color = "red";
    document.getElementById("showStatus1").innerHTML = "over TAT";
    document.getElementById("showStatus2").innerHTML = "NOT GOOD!";
    document.getElementById("day2Title").innerHTML = "EXCESS TIME";
    document.getElementById("showStatus2").style.color = "red";
    document.getElementById("day2Title").style.color = "red";
    csdays = days - 1;
    cshrs = hrs;
    csmin = min;
    csleftSec = leftSec;
  } else {
    document.getElementById("showcsDays").style.color = "green";
    document.getElementById("showcsHours").style.color = "green";
    document.getElementById("showcsMins").style.color = "green";
    document.getElementById("showcsSecs").style.color = "green";
    document.getElementById("showStatus1").innerHTML = "within TAT";
    document.getElementById("showStatus2").innerHTML = "SAFE";
    document.getElementById("day2Title").innerHTML = "REMAINING TIME";
    document.getElementById("showStatus2").style.color = "green";
    document.getElementById("day2Title").style.color = "green";
  }
  cshrs = Math.abs(cshrs);

  document.getElementById("showDays").innerHTML = get2D(days) + "<span class='has-text-weight-normal is-size-7'>d</span>";
  document.getElementById("showHours").innerHTML = get2D(hrs) + "<span class='has-text-weight-normal is-size-7'>h</span>";
  document.getElementById("showMins").innerHTML = get2D(min) + "<span class='has-text-weight-normal is-size-7'>m</span>";
  document.getElementById("showSecs").innerHTML = get2D(leftSec) + "<span class='has-text-weight-normal is-size-7'>s</span>";

  document.getElementById("showcsDays").innerHTML = get2D(csdays) + "<span class='has-text-weight-normal is-size-7'>d</span>";
  document.getElementById("showcsHours").innerHTML = get2D(cshrs) + "<span class='has-text-weight-normal is-size-7'>h</span>";
  document.getElementById("showcsMins").innerHTML = get2D(csmin) + "<span class='has-text-weight-normal is-size-7'>m</span>";
  document.getElementById("showcsSecs").innerHTML = get2D(csleftSec) + "<span class='has-text-weight-normal is-size-7'>s</span>";

  
  if (isNaN(date1) || date1 > date2) {
    emptyBox();
    document.getElementById("showDate2").innerHTML = "";
    document.getElementById("showStatus1").innerHTML = "";
    document.getElementById("showStatus2").innerHTML = "";
    if (!document.getElementById('date1').value) 
      document.getElementById("showDate1").innerHTML = "";
    else {
      if (date1 > date2) 
        document.getElementById("showDate1").innerHTML = "<span class='has-text-danger'>Future Date</span>"; 
      else 
        document.getElementById("showDate1").innerHTML = "<span class='has-text-danger'>Invalid Date</span>"; 
    }
  } else {
    date1 = String(date1);
    date2 = String(date2);
    var ddate1 = date1.split(" ");
    var ddate2 = date2.split(" ");
    document.getElementById("showDate1").innerHTML = "<strong>from: </strong>" + ddate1[1] + " " + ddate1[2] + ", " + ddate1[3] + " | " + ddate1[4] + " " + ddate1[5];
    document.getElementById("showDate2").innerHTML = "<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to: </strong>" + ddate2[1] + " " + ddate2[2] + ", " + ddate2[3] + " | " + ddate2[4] + " " + ddate2[5];
  }
  // getDateNow();
  setTimeout(showDiff, 1000);
}

var copytext = document.getElementById("CopyBoxText").value + " ";
console.log (copytext);

function textChange() {
  var texytext = document.getElementById("TexyBoxText").value;
  var holdselect = document.getElementById("HoldsSelect").value;
  var reasonselect = document.getElementById("ReasonsSelect").value;
  if (holdselect == "TSF/TAX/DOA" && reasonselect == "select a reason") {
    copytext = String(copytext);
    var ccopytext = copytext.split("*");
    var newcopytext = "*" + ccopytext[1] + "* " + texytext + "\r*" + ccopytext[3] + "* " + texytext + " \r*" + ccopytext[5] + "* " + texytext;
    document.getElementById("CopyBoxText").innerHTML = newcopytext;
  } else if (holdselect == "CVDH/ITC" && reasonselect == "select a reason") {
    copytext = String(copytext);
    var ccopytext = copytext.split("*");
    var newcopytext = "*" + ccopytext[1] + "* " + texytext + "\r*" + ccopytext[3] + "* " + texytext;
    document.getElementById("CopyBoxText").innerHTML = newcopytext;
  } else if (holdselect == "CREDIT RISK" && reasonselect == "select a reason") {
    copytext = String(copytext);
    var ccopytext = copytext.split("*");
    var newcopytext = "*" + ccopytext[1] + "* " + texytext + "\r*" + ccopytext[3] + "* " + texytext;
    document.getElementById("CopyBoxText").innerHTML = newcopytext;
  } else {
    var newcopytext = copytext + texytext;
    // console.log (newcopytext);
    document.getElementById("CopyBoxText").innerHTML = newcopytext;
  }
}

function holdChange() {
  var holdselect = document.getElementById("HoldsSelect").value;
  switch (holdselect) {
    case "REVISED PO":
      document.getElementById("ReasonsList").innerHTML = '<div class="select is-info is-fullwidth"><select id="ReasonsSelect" onchange="reasonChange()"><option>select a reason</option><option>INCORRECT / NO PRICING</option><option>INCORRECT / NO VENDOR ADDRESS</option><option>INCORRECT / NO PAY TERMS</option><option>INCORRECT / NO FREIGHT TERMS</option><option>INCOMPLETE ORDER INFORMATION</option><option>BELOW-MINIMUM ORDER</option><option>NO G.E. TERMS</option></select></div><span class="icon is-small is-left">2.</i></span>';
      document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
      document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-REVPO*</textarea>';
      break;
    case "TSF/TAX/DOA":
      document.getElementById("ReasonsList").innerHTML = '<div class="select is-info is-fullwidth"><select id="ReasonsSelect" onchange="reasonChange()"><option>select a reason</option><option>INCOMPLETE / NO TSF</option><option>TAX CONFIRMATION</option><option>DOA / HOTLINE ISSUES</option></select></div><span class="icon is-small is-left">2.</i></span>';
      document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
      document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-TSF*\r*CD-TAX*\r*CD-DOA*</textarea>';
      break;
    case "TECH REVIEW":
      document.getElementById("ReasonsList").innerHTML = '<div class="select is-info is-fullwidth"><select id="ReasonsSelect" onchange="reasonChange()"><option>select a reason</option><option>PRICE CONFIRMATION</option><option>PART CONFIRMATION</option><option>NO QUOTE UPLOADED</option></select></div><span class="icon is-small is-left">2.</i></span>';
      document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
      document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*NCD-TECH*</textarea>';
      break;
    case "CREDIT RISK":
      document.getElementById("ReasonsList").innerHTML = '<div class="select is-info is-fullwidth"><select id="ReasonsSelect" onchange="reasonChange()"><option>select a reason</option><option>CREDIT SHIPMENT HOLD</option><option>C1 CREDIT HOLD</option></select></div><span class="icon is-small is-left">2.</i></span>';
      document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
      document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-CRISK*\r*NCD-C1*</textarea>';
      break;
    case "CREDIT CARD":
      document.getElementById("ReasonsList").innerHTML = '<div class="select is-info is-fullwidth"><select id="ReasonsSelect" onchange="reasonChange()"><option>select a reason</option><option>PRE-AUTH FAILED</option><option>INCOMPLETE CARD DETAILS</option></select></div><span class="icon is-small is-left">2.</i></span>';
      document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
      document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-CC*</textarea>';
      break;
    case "CVDH/ITC":
      document.getElementById("ReasonsList").innerHTML = '<div class="select is-info is-fullwidth"><select id="ReasonsSelect" onchange="reasonChange()"><option>select a reason</option><option>WAITING FOR CVDH</option><option>WAITING FOR ITC</option></select></div><span class="icon is-small is-left">2.</i></span>';
      document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
      document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*NCD-CVDH*\r*NCD-ITC*</textarea>';
      break;
    case "OTHERS":
      document.getElementById("ReasonsList").innerHTML = '<div class="select is-info is-fullwidth"><select id="ReasonsSelect" onchange="reasonChange()" disabled><option>specify reason</option></select></div><span class="icon is-small is-left">2.</i></span>';
      document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
      document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*NCD-OTHERS*</textarea>';
      break;
    default:
      document.getElementById("ReasonsList").innerHTML = '<div class="select is-info is-fullwidth"><select disabled><option></option></select></div><span class="icon is-small is-left">2.</i></span>';
      document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" disabled></textarea>';
      document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText"></textarea>';
      }
      copytext = document.getElementById("CopyBoxText").value + " ";
    }
    
    function reasonChange() {
      var reasonselect = document.getElementById("ReasonsSelect").value;
      switch (reasonselect) {
        case "INCORRECT / NO PRICING":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-REVPO* Incorrect / No Pricing.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "INCORRECT / NO VENDOR ADDRESS":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-REVPO* Incorrect / No Vendor Address.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "INCORRECT / NO PAY TERMS":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-REVPO* Incorrect / No Payment Terms.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "INCORRECT / NO FREIGHT TERMS":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-REVPO* Incorrect / No Freight Terms.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "INCOMPLETE ORDER INFORMATION":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-REVPO* Incomplete Order Information.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "BELOW-MINIMUM ORDER":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-REVPO* Below-Minimum Order.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "NO G.E. TERMS":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-REVPO* No GE Terms and Conditions.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "INCOMPLETE / NO TSF":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-TSF* Incomplete / No TSF.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "TAX CONFIRMATION":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-TAX* Tax confirmation.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "DOA / HOTLINE ISSUES":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-DOA* Invalid / No DOA provided.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "PRICE CONFIRMATION":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*NCD-TECH* Price confirmation.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "PART CONFIRMATION":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*NCD-TECH* Part number confirmation.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "NO QUOTE UPLOADED":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*NCD-TECH* Requesting Quote, not in OCM.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "CREDIT SHIPMENT HOLD":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-CRISK* Credit shipment hold due to credit limit issues.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "C1 CREDIT HOLD":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*NCD-C1* Credit Hold pending release.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "PRE-AUTH FAILED":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-CC* Pre-authorization failed.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "INCOMPLETE CARD DETAILS":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*CD-CC* Incorrect / Incomplete Credit Card details.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "WAITING FOR CVDH":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*NCD-CVDH* Waiting for CVDH to setup address.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        case "WAITING FOR ITC":
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText">*NCD-ITC* Waiting for ITC approval.</textarea>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" placeholder="You may enter additional info here..." id="TexyBoxText"></textarea>';
        break;
        default:
          document.getElementById("HoldsList").innerHTML = '<div class="select is-info is-fullwidth"><select id="HoldsSelect" onchange="holdChange()"><option>select a hold</option><option>REVISED PO</option><option>TSF/TAX/DOA</option><option>TECH REVIEW</option><option>CREDIT RISK</option><option>CREDIT CARD</option><option>CVDH/ITC</option><option>OTHERS</option></select></div><span class="icon is-small is-left">1.</span>';
        document.getElementById("ReasonsList").innerHTML = '<div class="select is-info is-fullwidth"><select disabled><option></option></select></div>';
        document.getElementById("TexyBox").innerHTML = '<textarea onkeyup="textChange()" class="textarea is-info" disabled></textarea>';
        document.getElementById("CopyBox").innerHTML = '<textarea class="textarea is-secondary" type="text" readonly id="CopyBoxText"></textarea>';
      }
      copytext = document.getElementById("CopyBoxText").value + " ";
    }

    function fy18Change() {
      document.getElementById("fyear19").classList.remove("is-active");
      document.getElementById("fyear18").classList.add("is-active");
      document.getElementById("CodeList").innerHTML = '<div class="select is-info is-fullwidth"><select name="pricecode" id="priceCode" onchange="showICFactor()"><option class="selected" >------------</option><option>GC-1500XA</option><option>GC-2350A</option><option>GC-370XA</option><option>GC-500</option><option>GC-500NG</option><option>GC-700XA</option><option>GC-770XA</option><option>GC-AUX</option><option>GC-BTUSCS</option><option>GC-370SCS</option><option>GC-CAB</option><option>GC-370ENC</option><option>GC-SERV</option><option>GC-SP370</option><option>GC-SP</option><option>GC-ESP</option><option>GC-EUR</option></select></div>';
      
    }
    
    function fy19Change() {
      document.getElementById("fyear18").classList.remove("is-active");
      document.getElementById("fyear19").classList.add("is-active");
      document.getElementById("CodeList").innerHTML = '<div class="select is-info is-fullwidth"><select name="pricecode" id="priceCode" onchange="showICFactor()"><option class="selected" >------------</option><option>GC-1500XA</option><option>GC-2350A</option><option>GC-370XA</option><option>GC-500</option><option>GC-500NG</option><option>GC-700XA</option><option>GC-770XA</option><option>GC-AUX</option><option>GC-BTUSCS</option><option>GC-370SCS</option><option>GC-CAB</option><option>GC-370ENC</option><option>GC-SERV</option><option>GC-SP370</option><option>GC-SP</option><option>GC-ESP</option></select></div>';
    }
    
    // var stg = document.getElementById("showTotalGood");
    // var stb = document.getElementById("showTotalBad");
    // var sto = document.getElementById("showTotalOrders");
    // var sss = document.getElementById("showTATScore");
    // localStorage.totalgood = 0;
    // localStorage.totalbad = 0;
    
    // function ComputeTotalOrders() {
      //   var totalorders = parseInt(localStorage.totalgood) + parseInt(localStorage.totalbad);
      //   var TATscore = Number((parseInt(localStorage.totalgood) / totalorders) * 100).toFixed(2);
//   sto.innerHTML = totalorders;
//   if (isNaN(TATscore)) {
//     TATscore = "0.00";
//   }
//   sss.innerHTML = TATscore + " %";
//   if (TATscore >= 80) {
//     sss.style.color = "green";
//   } else {
//     sss.style.color = "red";
//   }
// }

// if(typeof(Storage) == "undefined") {
//   localStorage.totalgood = "0";
//   localStorage.totalbad = "0";
// }
// stg.innerHTML = localStorage.totalgood;
// stb.innerHTML = localStorage.totalbad;
// ComputeTotalOrders();


// function addGood() {
//     var goodvalue = document.getElementById("goodvalue");

//     if (goodvalue.value == "") {
//       goodvalue.value = 0;
//     }

//     if(typeof(Storage) !== "undefined") {
//         if (localStorage.totalgood) {
//             localStorage.totalgood = Number(localStorage.totalgood) + parseInt(goodvalue.value);
//         } else {
//             localStorage.totalgood = parseInt(goodvalue.value);
//         }
//         console.log(localStorage.totalgood);
//         if (Number(localStorage.totalgood) < 0) {
//           localStorage.totalgood = "0";
//         }
//         stg.innerHTML = localStorage.totalgood;
//     } else {
//         stg.innerHTML = "change browser";
//     }
//     ComputeTotalOrders()
// }

// function addBad() {
//     var badvalue = document.getElementById("badvalue");

//     if (badvalue.value == "") {
//       badvalue.value = 0;
//     }

//     if(typeof(Storage) !== "undefined") {
//         if (localStorage.totalbad) {
//             localStorage.totalbad = Number(localStorage.totalbad) + parseInt(badvalue.value);
//         } else {
//             localStorage.totalbad = parseInt(badvalue.value);
//         }
//         if (Number(localStorage.totalbad) < 0) {
//           localStorage.totalbad = "0";
//         }
//         stb.innerHTML = localStorage.totalbad;
//     } else {
//         stb.innerHTML = "change browser";
//     }
//     ComputeTotalOrders()
// }

var sicf = document.getElementById("showICF");
var sglp = document.getElementById("showGLP");
var sicd = document.getElementById("showICD")

function showICFactor() {
  var pricecode = document.getElementById('priceCode').value;
  var worldarea = document.getElementById('worldArea').value;
  if (!(pricecode == "------------" || worldarea == "------------")) {
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
  computeIntercoDiscPrice();
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
    var snb = document.getElementById("snackbar");
    snb.innerHTML = quotes[randomX];
    snb.className = "show";
    setTimeout(function(){ snb.className = snb.className.replace("show", ""); }, 10000);
    setTimeout(showToast,60000);
}


// $('input.show-comma').keyup(function(event) {
//   if(event.which >= 37 && event.which <= 40) return;
//   if(event.which == 110) return;
//   $(this).val(function(index, value) {
//     return value
//     .replace(/\D/g, "")
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//     ;
//   });
// });


function checkComputations() {
  computeDiscount();
  computeDiscPrice();
  computeIntercoDiscPrice();
}

function checkGLComputations() {
  computeGLPrice()
  computeIntercoDiscGLPrice();
}


function computeDiscount() {
  var listedPrice = Number(document.getElementById('uslprice').value);
  var discounted = document.getElementById('discount').value;
  
  if ((discounted == "")) {
    document.getElementById("discedprice").value = "";
  } else {
    var computedDiscount = (listedPrice*((100-discounted)/100));
    document.getElementById("discedprice").value = computedDiscount.toFixed(2);
  }
}

function computeGLPrice() {
  var glpresyo = Number(document.getElementById('glprice').value);
  
  var glPrice = sglp.innerHTML;
  if (glPrice == "") {
    sglp.innerHTML = "0.1880";
    glPrice = "0.1880";
  }
  
  var computeusprice = glpresyo * glPrice;

  if (glpresyo == "") {
    document.getElementById("uslprice").value = "";
  } else {
    document.getElementById("uslprice").value = computeusprice.toFixed(2);
  }

}

function computeDiscPrice() {
  var listedPrice = Number(document.getElementById('uslprice').value);
  var discedPrice = document.getElementById('discedprice').value;

  var computedDisc = (((discedPrice - listedPrice) / - listedPrice) * 100).toFixed(2);

  if ((listedPrice == "") || (discedPrice == "")) {
    document.getElementById("discount").value = "";
  } else if (computedDisc < 0){
    document.getElementById("discount").value = parseFloat((computedDisc*1).toFixed(2));
  } else {
    document.getElementById("discount").value = parseFloat((computedDisc*1).toFixed(2));
  }
}

function computeIntercoDiscPrice() {
  var listedPrice = Number(document.getElementById('uslprice').value);
  var icFactor = sicf.value;
  var glPrice = sglp.innerHTML;

  if (glPrice == "") {
    sglp.innerHTML = "0.1880";
    glPrice = "0.1880";
  }

  if (listedPrice == "") {
    document.getElementById("glprice").value = "";
  } else {
    var computedGLPrice = (listedPrice/glPrice);
    document.getElementById("glprice").value = computedGLPrice.toFixed(2);
  }


  if ((listedPrice == "") || (icFactor == "")) {
    document.getElementById("intercodiscedprice").value = "";
  } else {
    var computedIntercoDiscPrice = computedGLPrice * icFactor;
    document.getElementById("intercodiscedprice").value = computedIntercoDiscPrice.toFixed(2);
  }
}

function computeIntercoDiscGLPrice() {
  var listedPrice = Number(document.getElementById('uslprice').value);
  var icFactor = sicf.value;
  var computedGLPrice = Number(document.getElementById("glprice").value);


  if ((listedPrice == "") || (icFactor == "")) {
    document.getElementById("intercodiscedprice").value = "";
  } else {
    var computedIntercoDiscPrice = computedGLPrice * icFactor;
    document.getElementById("intercodiscedprice").value = computedIntercoDiscPrice.toFixed(2);
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
    console.log( "storage support available");
} else {
  console.log( "storage unsupported");
}
