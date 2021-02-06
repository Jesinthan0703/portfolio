//******************************* JOB TITLE DURATION **********************

var current_time = new Date();
var current_time_str = current_time.toString();
console.log("Current time is " + "'" + current_time_str + "'");
var month = current_time_str.slice(4, 7);
if (month == "Jan") {
  month = 7;
}
if (month == "Feb") {
  month = 8;
}
if (month == "Mar") {
  month = 9;
}
if (month == "Apr") {
  month = 10;
}
if (month == "May") {
  month = 11;
}
if (month == "Jun") {
  month = 0;
}
if (month == "Jul") {
  month = 1;
}
if (month == "Aug") {
  month = 2;
}
if (month == "Sep") {
  month = 3;
}
if (month == "Oct") {
  month = 4;
}
if (month == "Nov") {
  month = 5;
}
if (month == "Dec") {
  month = 6;
}
var duration_month = month - 0;
console.log("My duration in Simera is " + duration_month);
var year = current_time_str.slice(11, 15);
year = parseInt(year);
var duration_year = year - 2021;
document.getElementById("simera_duration").innerHTML =
  "( " +
  // duration_year +
  // " years " +
  // " and " +
  duration_month +
  " months" +
  " )";

// **************************** FOOTER COPYRIGHTS YEAR *************************************

console.log("Footer year is " + year);
document.getElementById("footer_js").innerHTML =
  "© " +
  "Jesinthan " +
  year +
  " | " +
  "All Rights Reserved" +
  "<p>" +
  "Símera™" +
  "</p>";
