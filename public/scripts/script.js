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
  $('#newsLink').attr("href", data.articles[0].url);
  $("#imageLink").attr("src", data.articles[0].urlToImage);

  $('#techNewsTitle2').text(data.articles[1].title);
  $('#techNewsAuthor2').text(data.articles[1].author);
  $('#techNewsDesc2').text(data.articles[1].description);
  $('#Date2').text(data.articles[1].publishedAt);
  $('#newsLink2').attr("href", data.articles[1].url);
  $("#imageLink2").attr("src", data.articles[1].urlToImage);

  $('#techNewsTitle3').text(data.articles[2].title);
  $('#techNewsAuthor3').text(data.articles[2].author);
  $('#techNewsDesc3').text(data.articles[2].description);
  $('#Date3').text(data.articles[2].publishedAt);
  $('#newsLink3').attr("href", data.articles[2].url);
  $("#imageLink3").attr("src", data.articles[2].urlToImage);
});

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


  $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  3000);

  }
});

