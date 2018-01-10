// Initialize Firebase
var config = {
  apiKey: "AIzaSyANDywSVU9hHax6WE8PMuaiDK3qdTdsj78",
  authDomain: "fir-21155.firebaseapp.com",
  databaseURL: "https://fir-21155.firebaseio.com",
  projectId: "fir-21155",
  storageBucket: "fir-21155.appspot.com",
  messagingSenderId: "614199486533"
};
firebase.initializeApp(config);
// grab handle to entire database
// var database = firebase.database();
// grab handle to the database 'timesheet' child
var timesheet_ref = firebase.database().ref("timesheet");

// on click event for submit button
$("#submit").on("click", function(event)
{
  event.preventDefault();
  // Capture User Inputs and store them into variables
  var name = $("#name").val().trim();
  var role = $("#role").val().trim();
  // NOTE - the use of the Unix epoch prevents start years from before the start of the epoch
  //        those years work fine if the epoch is not used
  var startDate = moment($("#startDate").val().trim(), "DD/MM/YY").format("X");
  var monthlyRate = $("#monthlyRate").val().trim();
  // log data
  console.log("name: " + name);
  console.log("role: " + role);
  console.log("start: " + startDate);
  console.log("rate: " + monthlyRate);
  // store data
  timesheet_ref.push(
  {
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP,
  });
  // clear form
  $("#name").val("");
  $("#role").val("");
  $("#startDate").val("");
  $("#monthlyRate").val("");
});

// Firebase on childAdded event
timesheet_ref.orderByChild("dateAdded").on("child_added", function(child)
{
  // log child
  console.log(child.val());
  // calculate months worked and total billed  
  var monthsWorked = moment().diff(moment.unix(child.val().startDate, "X"), "months");
  var totalBilled = monthsWorked * child.val().monthlyRate;
  console.log("monthsWorked", monthsWorked, "totalBilled", totalBilled);
  // build the table row
  var tr = $('<tr>'
            + '<td>' + child.val().name + '</td>'
            + '<td>' + child.val().role + '</td>'
            + '<td>' + moment.unix(child.val().startDate).format("MM/DD/YY") + '</td>'
            + '<td>' + monthsWorked + '</td>'
            + '<td>' + child.val().monthlyRate + '</td>'
            + '<td>' + totalBilled + '</td></tr>'
            );
  // Writes the saved value from firebase to our display
  $("#additionalRows").prepend(tr);
}, function(errorObject)
{ // Handles firebase failure if it occurs
  console.log("The read failed: " + errorObject.code);
});
