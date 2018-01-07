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
// grab handle to the database
var database = firebase.database();
// grab handle to the database 'counts' child
var cbay_ref = firebase.database().ref("codersbay");

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highBid = initialBid;
var highBidder = initialBidder;
var bidderName = "";
var bidderPrice = 0;

// set initial value in the db if it doesn't exist
cbay_ref.once('value').then(function(snapshot)
{
  // check if value exists in db
  if (!snapshot.child("highBid").exists() && !snapshot.child("highBidder").exists())
  {
    // if not, set it to initial value
    cbay_ref.set(
    {
      highBid: initialBid,
      highBidder: initialBidder,
    });
  }
});
// display the value on intial page load (won't execute on reloads)
if ($("#highest-bidder").text().length <= 0) $("#highest-bidder").text(initialBidder);
if ($("#highest-bid").text().length <= 0) $("#highest-bid").text(initialBid);

// --------------------------------------------------------------

// listen to changes in the database
cbay_ref.on("value", function(snapshot) {
  // log the database state
  console.log(snapshot.val());
  // display the value
  $("#highest-bidder").text(highBidder);
  $("#highest-bid").text(highBid);
}, function(errorObject) {
  // error handling
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// on click event to submit a bid
$("#submit-bid").on("click", function() {
  // Don't refresh the page!
  event.preventDefault();
  // Capture user inputs and store them into variables
  bidderName = $("#bidder-name").val().trim();
  bidderPrice = parseInt($("#bidder-price").val().trim());
  // Console log each of the user inputs to confirm we are receiving them
  console.log(bidderName, bidderPrice);
  // If Then statements to compare against previous high bidder
  if (bidderPrice > highBid)
  {
    highBid = bidderPrice;
    highBidder = bidderName;
    cbay_ref.set(
    {
      highBid: highBid,
      highBidder: highBidder,
    });
    console.log("New High Bid!", bidderName, bidderPrice);
    $("#highest-bidder").text(highBidder);
    $("#highest-bid").text(highBid);
  } else {
    alert("Your bid was too low!!!");
  }
});
