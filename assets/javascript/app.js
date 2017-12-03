



//assignment of answer keys to the answers
$(document).ready(function(){
  var userGuess = "";
  $("#myCarousel").hide();

    $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);

  function checkAnswers(q1, q2, q3, q4){

      if(q1.prop("checked")){
        userGuess =  q1.val();
      }
      if(q2.prop("checked")){
        userGuess =  q2.val();
      } 
      if(q3.prop("checked")){
        userGuess =  q3.val();
      } 
      if(q4.prop("checked")){
        userGuess =  q4.val();
      }
  }
    
  $("#results1").click(function(){

      checkAnswers($("#q1a"), $("#q1b"), $("#q1c"), $("#q1d"));
      console.log(userGuess);
      // if (!$("#q1a").val() ||            
      //  !$("#q1b").val() ||            
      //  !$("#q1c").val() ||            
      //  !$("#q1d").val()){
      //  var cat1name = "1";            
      //  var cat2name = "2";            
      //  var cat3name = "3";            
      //  var cat4name = "4";            
      //  var cat5name = "5";            
      //  var cat6name = "6"; 
      //  var cat7name = "None"; 

      //  var cat1 = ($("#q1a").val() != "b");            
      //  var cat2 = ($("#q1b").val() != "d");  
      //  var cat3 = ($("input[@name=q3]:checked").val() != "c");  
      //  var cat4 = ($("input[@name=q4]:checked").val() != "d");  
      //  var cat5 = ($("input[@name=q5]:checked").val() != "a"); 
      //  var cat6 = ($("input[@name=q6]:checked").val() != "a");  
      //  var cat7 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5 && !cat6); var categories = [];


      //  if (cat1) { categories.push(cat1name) };            
      //  if (cat2) { categories.push(cat2name) };            
      //  if (cat3) { categories.push(cat3name) };            
      //  if (cat4) { categories.push(cat4name) };            
      //  if (cat5) { categories.push(cat5name) };            
      //  if (cat6) { categories.push(cat6name) };            
      //  if (cat7) { categories.push(cat7name) };


      //  if (cat1) { $("#category1").show("slow"); };            
      //  if (cat2) { $("#category2").show("slow"); };            
      //  if (cat3) { $("#category3").show("slow"); };            
      //  if (cat4) { $("#category4").show("slow"); };            
      //  if (cat5) { $("#category5").show("slow"); };            
      //  if (cat6) { $("#category6").show("slow"); };            
      //  if (cat7) { $("#category7").show("slow"); };            
        
      //  } else { $("#closing").show("slow"); };       

  });

});
	















//STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
// window.onload = function() {
// 
// };

// //  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 0,

  reset: function() {
    stopwatch.time = 0;
    $("#display").text("00:00");
  },


  start: function() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
        $("#myCarousel").show();
        $("#myCarousel").carousel({
               interval : false
        });
    }
  },


  stop: function() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },


  count: function() {
    stopwatch.time++;
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },



  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};


//Solution if you choose not to put it in an object

var time = 0;
var lap = 1;
function reset() {

  time = 0;
  lap = 1;

  $("#display").text("00:00");
  $("#laps").text("");

}

function start() {
  intervalId = setInterval(count, 1000);
}

function stop() {

  console.log("stopping");
  clearInterval(intervalId);

}

function recordLap() {

  var converted = timeConverter(time);
  $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
  lap++;

}

function count() {

  time++;
  var converted = timeConverter(time);
  $("#display").text(converted);

}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}


