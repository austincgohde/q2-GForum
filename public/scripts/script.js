$(document).ready(function(){
// alert();
$.get(('http://quotes.rest/qod.json?category=students'), function(data){
  $('#quoteText').text(data.contents.quotes[0].quote + ' - ' + data.contents.quotes[0].author);
});

});
