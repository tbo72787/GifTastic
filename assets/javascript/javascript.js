$(document).ready(function() {
  // declares global variables
  var instArr = ['guitar', 'piano', 'saxaphone', 'trumpet', 'drum', 'tambourine', 'violin'];

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

  $('body').on('click', '.button', function() {
    console.log($(this).text());
    searchGiphy($(this).text());
  });

  // makes a call to giphy API and makes and appends an image for each GIF in the response
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
        image.attr('src', response.data[i].images.fixed_height_still.url);
        $('#images').append(image);
      }
    });
    
  }
  buttonPop();
});