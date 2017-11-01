$(document).ready(function(){

$.get(('http://quotes.rest/qod.json?category=students'), function(data){
  $('#quoteText').text(data.content.quotes[0].quote + ' - ' + data.content.quotes[0].author);
});

};
