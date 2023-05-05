// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var g1 = $(".st1");
var g2 = $(".st2");
var g3 = $(".st3");
var g4 = $(".st4");
var g5 = $(".st5");
var g6 = $(".st6");
var g7 = $(".st7");
var g8 = $(".st8");
var g9 = $(".st9");
var p1 = $(".org1");
var p2 = $(".org2");
var p3 = $(".org3");
var p4 = $(".org4");
var p5 = $(".org5");
var p6 = $(".org6");
var p7 = $(".org7");
var p8 = $(".org8");
var p9 = $(".org9");
var toime = $("#currentDay");

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  toime.text(rightNow);
}
var date = new Date();
var hour = date.getHours();
console.log(hour);
displayTime();
$( ".org1" ).on( "click", function() {
 
  var thing = $(this).siblings('.description').val();
  localStorage.setItem("1",thing);
  if(hour > 9)
  {
    localStorage.setItem("a",g1.addClass("past"));
  }
  else if(hour == 9)
  {
    localStorage.setItem("b",g1.addClass("present"));
  }
  else
  {
    localStorage.setItem("c",g1.addClass("future"));
  }
 // console.log(thing);
  
  
} );
$( ".org2" ).on( "click", function() {
 
  var thing = $(this).siblings('.description').val();
  localStorage.setItem("2",thing);
 // console.log(thing);
 if(hour > 10)
  {
    localStorage.setItem("d",g2.addClass("past"));
  }
  else if(hour == 10)
  {
    localStorage.setItem("e",g2.addClass("present"));
  }
  else
  {
    localStorage.setItem("f",g2.addClass("future"));
  }
  
  
} );
$( ".org3" ).on( "click", function() {
 
  var thing = $(this).siblings('.description').val();
  localStorage.setItem("3",JSON.stringify(thing));
 // console.log(thing);
 if(hour > 11)
 {
   localStorage.setItem("g",g3.addClass("past"));
 }
 else if(hour == 11)
 {
   localStorage.setItem("h",g3.addClass("present"));
 }
 else
 {
   localStorage.setItem("i",g3.addClass("future"));
 }
  
  
} );
$( ".org4" ).on( "click", function() {
 
  var thing = $(this).siblings('.description').val();
  localStorage.setItem("4",JSON.stringify(thing));
 // console.log(thing);
 if(hour > 12)
 {
   localStorage.setItem("j",g4.addClass("past"));
 }
 else if(hour == 12)
 {
   localStorage.setItem("k",g4.addClass("present"));
 }
 else
 {
   localStorage.setItem("l",g4.addClass("future"));
 }
  
  
} );
$( ".org5" ).on( "click", function() {
 
  var thing = $(this).siblings('.description').val();
  localStorage.setItem("5",JSON.stringify(thing));
 // console.log(thing);
 if(hour > 13)
 {
   localStorage.setItem("m",g5.addClass("past"));
 }
 else if(hour == 13)
 {
   localStorage.setItem("n",g5.addClass("present"));
 }
 else
 {
   localStorage.setItem("o",g5.addClass("future"));
 }
  
} );
$( ".org6" ).on( "click", function() {
 
  var thing = $(this).siblings('.description').val();
  localStorage.setItem("6",JSON.stringify(thing));
 // console.log(thing);
 if(hour > 14)
 {
   localStorage.setItem("p",g6.addClass("past"));
 }
 else if(hour == 14)
 {
   localStorage.setItem("q",g6.addClass("present"));
 }
 else
 {
   localStorage.setItem("r",g6.addClass("future"));
 }
  
  
} );
$( ".org7" ).on( "click", function() {
 
  var thing = $(this).siblings('.description').val();
  localStorage.setItem("7",JSON.stringify(thing));
 // console.log(thing);
 if(hour > 15)
 {
   localStorage.setItem("s",g7.addClass("past"));
 }
 else if(hour == 15)
 {
   localStorage.setItem("t",g7.addClass("present"));
 }
 else
 {
   localStorage.setItem("u",g7.addClass("future"));
 }
  
  
} );
$( ".org8" ).on( "click", function() {
 
  var thing = $(this).siblings('.description').val();
  localStorage.setItem("8",JSON.stringify(thing));
 // console.log(thing);
 if(hour > 16)
 {
   localStorage.setItem("v",g8.addClass("past"));
 }
 else if(hour == 16)
 {
   localStorage.setItem("w",g8.addClass("present"));
 }
 else
 {
   localStorage.setItem("x",g8.addClass("future"));
 }
  
} );
$( ".org9" ).on( "click", function() {
 
  var thing = $(this).siblings('.description').val();
  localStorage.setItem("9",JSON.stringify(thing));
 // console.log(thing);
 if(hour > 17)
 {
   localStorage.setItem("y",g9.addClass("past"));
 }
 else if(hour == 17)
 {
   localStorage.setItem("z",g9.addClass("present"));
 }
 else
 {
   localStorage.setItem("zz",g9.addClass("future"));
 }
  
  
} );
  if(g1.val() != "")
  {
  var tt = localStorage.getItem("1");
  
  g1.append(tt);
  if(localStorage.getItem("a"))
  {
    g1.addClass("past");
  }
  if(localStorage.getItem("b"))
  {
    g1.addClass("present");
  }
  if(localStorage.getItem("c"))
  {
    g1.addClass("future");
  }
 // console.log(g1.val());
  }
  if(g2.val() != "")
  {
  var tt = localStorage.getItem("2");
  g2.append(tt);
  if(localStorage.getItem("d"))
  {
    g2.addClass("past");
  }
  if(localStorage.getItem("e"))
  {
    g2.addClass("present");
  }
  if(localStorage.getItem("f"))
  {
    g2.addClass("future");
  }
  }
  if(g3.val() != "")
  {
  var tt = localStorage.getItem("3");
  g3.append(tt);
  //console.log(g1.val());
  if(localStorage.getItem("g"))
  {
    g3.addClass("past");
  }
  if(localStorage.getItem("h"))
  {
    g3.addClass("present");
  }
  if(localStorage.getItem("i"))
  {
    g3.addClass("future");
  }
  }
  if(g4.val() != "")
  {
  var tt = localStorage.getItem("4");
  g4.append(tt);
  //console.log(g1.val());
  if(localStorage.getItem("j"))
  {
    g4.addClass("past");
  }
  if(localStorage.getItem("k"))
  {
    g4.addClass("present");
  }
  if(localStorage.getItem("l"))
  {
    g4.addClass("future");
  }
  }
  if(g5.val() != "")
  {
  var tt = localStorage.getItem("5");
  g5.append(tt);

  if(localStorage.getItem("m"))
  {
    g5.addClass("past");
  }
  if(localStorage.getItem("n"))
  {
    g5.addClass("present");
  }
  if(localStorage.getItem("o"))
  {
    g5.addClass("future");
  }
  //console.log(g1.val());
  }
  if(g6.val() != "")
  {
  var tt = localStorage.getItem("6");
  g6.append(tt);
  //console.log(g1.val());
  if(localStorage.getItem("p"))
  {
    g6.addClass("past");
  }
  if(localStorage.getItem("q"))
  {
    g6.addClass("present");
  }
  if(localStorage.getItem("r"))
  {
    g6.addClass("future");
  }
  }
  if(g7.val() != "")
  {
  var tt = localStorage.getItem("7");
  g7.append(tt);
  if(localStorage.getItem("s"))
  {
    g7.addClass("past");
  }
  if(localStorage.getItem("t"))
  {
    g7.addClass("present");
  }
  if(localStorage.getItem("u"))
  {
    g7.addClass("future");
  }
 // console.log(g1.val());
  }
  if(g8.val() != "")
  {
  var tt = localStorage.getItem("8");
  g8.append(tt);

  if(localStorage.getItem("v"))
  {
    g8.addClass("past");
  }
  if(localStorage.getItem("w"))
  {
    g8.addClass("present");
  }
  if(localStorage.getItem("x"))
  {
    g8.addClass("future");
  }
  //console.log(g1.val());
  }
  if(g9.val() != "")
  {
  var tt = localStorage.getItem("9");
  g9.append(tt);
  if(localStorage.getItem("y"))
  {
    g9.addClass("past");
  }
  if(localStorage.getItem("z"))
  {
    g9.addClass("present");
  }
  if(localStorage.getItem("zz"))
  {
    g9.addClass("future");
  }
  //console.log(g1.val());
  }
 // var yy = localStorage.getItem('q');
 // var xx = localStorage.getItem('answer');
 // yy.innerHTML = xx;


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  


