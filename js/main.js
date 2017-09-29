/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';
var i, j;
var descriptions = [];
var images = [];
var authors = [];

$(document).ready(function(){
/* FUNCTION EXECUTION HERE */
  console.log('Go forth and code!');

  $.ajax({
    method: 'GET',
    url: frontPage,
    // data: ,
    dataType: 'json',
    success: onSuccess,
    error: onError
  });



});



/* FUNCTION DEFINITION HERE */
/* TIP: don't forget scope! */

function onSuccess(response){
  console.log('success! you did the ajax thing');
  // test to ensure i'm getting the data (title) from the first 'article'
  getInfo(response);
  convertToHtmlAndAppend(response);
}

function onError(){
  console.log('error: seek & destroy, fam. u can do it.');
}

function getInfo(response){
  var postDescription = response.data.children[0].data.title;
  var postLink = 'https://www.reddit.com/' + response.data.children[0].data.permaLink;
  var imageLink = response.data.children[0].data.url;
  console.log(imageLink);
}

function convertToHtmlAndAppend(response){
  console.log('converting to html..');
  var postHtml = '<h4 class="post">' + response.data.children[0].data.title + '</h4>';

  var imageHtml = '<img src="' + response.data.children[0].data.url +'" class="post">';
  console.log('success');

  console.log('appending to html..');
  $('.col-link').append(postHtml);
  $('.col-image').append(imageHtml);
  console.log('success');
}

// function appendPost(response){
//
// }
