function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {
        setTimeout(function(){
          //  ...run the stop function.
          stop();

          //  Alert the user that time is up.
          alert("Time Up!");
        }, 10);

      }
    }
