$(document).ready(function(){
// alert();
$.get((' https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey={2dfc41eabdaa4c38b740b79835fcb3f2}'), function(data){
  $('#techNewsTitle').text(data.articles[0].title);
  $('#techNewsAuthor').text(data.articles[0].author);
  $('#techNewsDesc').text(data.articles[0].description);
  $('#Date').text(data.articles[0].publishedAt);
  $('#link').append(data.articles[0].url);
  $('#imageLink').append(data.articles[0].urlToImage);

  $('#techNewsTitle2').text(data.articles[1].title);
  $('#techNewsAuthor2').text(data.articles[1].author);
  $('#techNewsDesc2').text(data.articles[1].description);
  $('#Date2').text(data.articles[1].publishedAt);
  $('#link2').append(data.articles[1].url);
  $('#imageLink2').append(data.articles[1].urlToImage);

  $('#techNewsTitle3').text(data.articles[2].title);
  $('#techNewsAuthor3').text(data.articles[2].author);
  $('#techNewsDesc3').text(data.articles[2].description);
  $('#Date3').text(data.articles[2].publishedAt);
  $('#link3').append(data.articles[2].url);
  $('#imageLink3').append(data.articles[2].urlToImage);
});

});
