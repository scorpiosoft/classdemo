// declare and append
var img = $('<img />', { 
  id: 'Myid',
  src: 'MySrc.gif',
  alt: 'MyAlt'
});
img.appendTo($('#YourDiv'));


// modify existing
// You can use jQuery's attr() function. For example, if your img tag has an id attribute of 'my_image':

// <img id="my_image" src="first.jpg"/>

// Then you can change the src in jQuery by:
$("#my_image").attr("src","second.jpg");


// To attach this to a click event, you could write:
$('#my_image').on({
    'click': function(){
        $('#my_image').attr('src','second.jpg');
    }
});


// To cycle the image, you could do this:
$('img').on({
    'click': function() {
         var src = ($(this).attr('src') === 'img1_on.jpg')
            ? 'img2_on.jpg'
            : 'img1_on.jpg';
         $(this).attr('src', src);
    }
});