$(document).ready(function() {
  // declares global variables
  var instArr = ['guitar', 'piano', 'saxaphone', 'trumpet', 'drum', 'tambourine', 'violin'] 

  var buttonPop = function() {
    for (var i = 0; i < instArr.length; i++) {
      var button = $('<button>');
      button.addClass('button');
      button.text(instArr[i]);
      $('#buttons').append(button);
    }
  }

  var searchGiphy = function(term) {
    var apiKey = 'pu7fI2DSRxDuoVZVLEC2wTTlIsmfmdmF';
    var queryURL = 'https://api.giphy.com/v1/gifs/search?limit=10&api_key=' + apiKey + '&q=' + term;
    $.ajax({
      url: queryURL,
      method: 'get'
    })
    .then(function(response) {
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