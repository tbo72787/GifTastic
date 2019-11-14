$(document).ready(function() {
  // declares global variables
  var instArr = ['guitar', 'piano', 'saxaphone', 'trumpet', 'drum', 'tambourine', 'violin'] 

  var searchGiphy = function(data) {
    var apiKey = 'pu7fI2DSRxDuoVZVLEC2wTTlIsmfmdmF';
    var queryURL = 'https://api.giphy.com/v1/gifs/search?limit=10&api_key=' + apiKey + '&q=' + data;
    $.ajax({
      url: queryURL,
      method: 'get'
    })
    .then(function(response) {
      console.log(response);
      var image = $('<img>');
      image.attr('src', response.data[0].images.original_still.url);
      $('#image').append(image);
      console.log(image.html());
    });
  }
  searchGiphy('dog');
});