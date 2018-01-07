// Initialize Firebase
var config =
{
  apiKey: "AIzaSyANDywSVU9hHax6WE8PMuaiDK3qdTdsj78",
  authDomain: "fir-21155.firebaseapp.com",
  databaseURL: "https://fir-21155.firebaseio.com",
  projectId: "fir-21155",
  storageBucket: "fir-21155.appspot.com",
  messagingSenderId: "614199486533"
};
firebase.initializeApp(config);

// grab handle to the database 'counts' child
var counts_ref = firebase.database().ref("counts");
// Set Initial Counter
var initialValue = 10;
var clickCount = initialValue;
// display the value on intial page load (won't execute on reloads)
if ($("#click-value").text().length <= 0) $("#click-value").text(clickCount);

// set initial value in the db if it doesn't exist
counts_ref.once('value').then(function(snapshot)
{
  // check if value exists in db
  if (!snapshot.child("clicks").exists())
  {
    // if not, set it to initial value
    counts_ref.set(
    {
      clicks: initialValue,
    });
  }
});

// --------------------------------------------------------------

// listen to changes in the database
counts_ref.on("value", function(snapshot)
{
  // log the database state
  console.log(snapshot.val());
  // set the counter to db value
  clickCount = snapshot.val().clicks;
  // Log the value of the counts.clickser
  console.log("count:", clickCount);
  // display the value
  $("#click-value").text(clickCount);
}, function(errorObject)
{
  // error handling
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// on click event to decrement count
$("#click-button").on("click", function()
{
  // decrement count
  clickCount--;
  // log and reset if 0
  if (clickCount === 0)
  {
    console.log("You did it!  Counter is 0.");
    clickCount = initialValue;
  } else {
    console.log("count:", clickCount);
  }
  // set database
  counts_ref.set(
  {
    clicks: clickCount,
  });
});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function()
{
  // Set the counts.clickser back to initialValue
  clickCount = initialValue;
  // set database
  counts_ref.set(
  {
    clicks: clickCount,
  });
  // Log the value of counts.clickser
  console.log("count:", clickCount);
  // display the value
  $("#click-value").text(clickCount);
});
