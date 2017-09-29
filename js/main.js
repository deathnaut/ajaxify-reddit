// to do:
// accessibility!!!
// add time
// add default img 'no image' posts
// rwd


/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';
var i, j;
var descriptions = [];
var images = [];
var authors = [];
var times = [];

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
  getTimeAndAppend(response);
}

function onError(){
  console.log('error: seek & destroy, fam. u can do it.');
}

function getInfo(response){
  var postDescription = response.data.children[0].data.title;
  var postLink = 'https://www.reddit.com/' + response.data.children[0].data.permaLink;
  var imageLink = response.data.children[0].data.url;
  console.log(postLink);
  console.log(imageLink);
}

function convertToHtmlAndAppend(response){
  console.log('converting each item to html..');

  for (i = 0; i < 25; i++){
    var postHtml = '<a href="'+ 'https://www.reddit.com/' + response.data.children[i].data.permaLink +'" class="post">' + response.data.children[i].data.title + '</a>';
    descriptions.push(postHtml, '<h5></h5>','<br>');
    var imageHtml = '<img src="' + response.data.children[i].data.url +'" class="post">';
    images.push(imageHtml, '<br>');
  }
  console.log('success');

  console.log('appending each item to html..');
  for (j = 0; j < 25; j++){
    $('.col-link').append(descriptions[j]);
    // $('h5').innerText("Submitted " + time + "hours ago.");
    $('.col-image').append(images[j]);
  }
  console.log('success');
}

function getTimeAndAppend(data){

}


// need to place a default image in place of where imageless
// posts occur

// function defaultImg (){
//
// }
