$(document).ready(function() {
  // declares global variables
  var instArr = ['guitar', 'piano', 'saxaphone', 'trumpet', 'drum', 'tambourine', 'violin'];
  var animated = false;

  // empties buttons div, takes each string in instArr and appends a button for it in buttons div
  var buttonPop = function() {
    $('#buttons').empty();
    for (var i = 0; i < instArr.length; i++) {
      var button = $('<button>');
      button.addClass('button');
      button.text(instArr[i]);
      $('#buttons').append(button);
    }
  }
  // when submit button is clicked, adds the contents of the input field to instArr and calls buttonPop
  $('#submit-button').on('click', function(event) {
    event.preventDefault();
    instArr.push($('#submit-input').val().trim());
    buttonPop();
  });

  // when instrument buttons are clicked, calls searchGiphy using the button text as argument
  $('body').on('click', '.button', function() {
    searchGiphy($(this).text());
  });

  // when images are clicked, changes source to animatedURL if animated is false, and stillURL if animated is true
  $('body').on('click', '.image', function() {
    if (animated == false) {
      $(this).attr('src', $(this).attr('animatedURL'));
      animated = true;
    }
    else {
      $(this).attr('src', $(this).attr('stillURL'));
      animated = false;
    }
  })

  // makes a call to giphy API and makes and appends an image and rating for each GIF in the response, 
  // and add image, stillURL, and animatedURL classes to image
  var searchGiphy = function(term) {

    var apiKey = 'pu7fI2DSRxDuoVZVLEC2wTTlIsmfmdmF';
    var queryURL = 'https://api.giphy.com/v1/gifs/search?limit=10&api_key=' + apiKey + '&q=' + term;
    $.ajax({
      url: queryURL,
      method: 'get'
    })
    .then(function(response) {
      $('#images').empty();
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        var image = $('<img>');
        image.attr('stillURL', response.data[i].images.fixed_height_still.url)
        image.attr('animatedURL', response.data[i].images.fixed_height.url)
        image.attr('src', response.data[i].images.fixed_height_still.url);
        image.addClass('image');
        var rating = $('<div>');
        rating.text('Rating: ' + response.data[i].rating);
        $('#images').append(image);
        $('#images').append(rating);
      }
    });
    
  }

  // immediately calls buttonPop upon page load
  buttonPop();
});