$(document).ready(function(){
// alert();
$.get(('http://quotes.rest/qod.json?category=students'), function(data){
  $('#quoteText').text(data.contents.quotes[0].quote + ' - ' + data.contents.quotes[0].author);
});

let postUp = (num) => {
  $.get(("/upvote/post/"+num), (data) => {

    let upTag = document.getElementsByClassName("postUp")
    let index = 0

    for(let i = 0; i < upTag.length; i++) {
      if(upTag[i].onclick.includes(num)) {
        return index = i;
      }
    }

    $(".postUp"[index]).text(`${data.upvote}`)
    $(".postUp"[index]).attr("onclick", "")
  })
},

let postDown = (num) => {
  $.get(("/downvote/post/"+num), (data) => {

    let upTag = document.getElementsByClassName("postDown")
    let index = 0

    for(let i = 0; i < upTag.length; i++) {
      if(upTag[i].onclick.includes(num)) {
        return index = i;
      }
    }

    $(".postDown"[index]).text(`${data.downvote}`)
    $(".postDown"[index]).attr("onclick", "")
  })
},

let commentUp = (num) => {
  $.get(("/upvote/comment/"+num), (data) => {

    let upTag = document.getElementsByClassName("commentUp")
    let index = 0

    for(let i = 0; i < upTag.length; i++) {
      if(upTag[i].onclick.includes(num)) {
        return index = i;
      }
    }

    $(".commentUp"[index]).text(`${data.upvote}`)
    $(".commentUp"[index]).attr("onclick", "")
  })
},

let commentDown = (num) => {
  $.get(("/downvote/comment/"+num), (data) => {

    let upTag = document.getElementsByClassName("commentDown")
    let index = 0

    for(let i = 0; i < upTag.length; i++) {
      if(upTag[i].onclick.includes(num)) {
        return index = i;
      }
    }

    $(".commentDown"[index]).text(`${data.downvote}`)
    $(".commentDown"[index]).attr("onclick", "")
  })
}

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

});
