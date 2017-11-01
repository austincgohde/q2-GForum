$(document).ready(function(){
// alert();
$.get(('http://quotes.rest/qod.json?category=students'), function(data){
  $('#quoteText').text(data.contents.quotes[0].quote + ' - ' + data.contents.quotes[0].author);
});

$.get((' https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=2dfc41eabdaa4c38b740b79835fcb3f2'), function(data){
  $('#techNewsTitle').text(data.articles[0].title);
  $('#techNewsAuthor').text(data.articles[0].author);
  $('#techNewsDesc').text(data.articles[0].description);
  $('#Date').text(data.articles[0].publishedAt);
  $('#newsLink').append(data.articles[0].url);
  $("#imageLink").attr("src", data.articles[0].urlToImage);


  $('#techNewsTitle2').text(data.articles[1].title);
  $('#techNewsAuthor2').text(data.articles[1].author);
  $('#techNewsDesc2').text(data.articles[1].description);
  $('#Date2').text(data.articles[1].publishedAt);
  $('#newsLink2').append(data.articles[1].url);
  $("#imageLink2").attr("src", data.articles[1].urlToImage);

  $('#techNewsTitle3').text(data.articles[2].title);
  $('#techNewsAuthor3').text(data.articles[2].author);
  $('#techNewsDesc3').text(data.articles[2].description);
  $('#Date3').text(data.articles[2].publishedAt);
  $('#newsLink3').append(data.articles[2].url);
  $("#imageLink3").attr("src", data.articles[2].urlToImage);
});

});
