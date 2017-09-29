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
  // getTimeAndAppend(response);
}

function onError(){
  console.log('error: seek & destroy, fam. u can do it.');
}

function getInfo(response){
  var postDescription = response.data.children[0].data.title;
  var postLink = 'https://www.reddit.com' + response.data.children[0].data.permalink;
  var imageLink = response.data.children[0].data.url;
  console.log(postLink);
  console.log(imageLink);
}

function convertToHtmlAndAppend(response){

  for (i = 0; i < 25; i++){
    var postHtml = '<a href="'+ 'https://www.reddit.com/' + response.data.children[i].data.permalink +'" class="post">' + response.data.children[i].data.title + '</a>';
    descriptions.push(postHtml);
    var imageHtml = '<img src="' + response.data.children[i].data.thumbnail +'" class="post">';
    if (imageHtml === '<img src="default" class="post">' || imageHtml === '<img src="nsfw" class="post">' || imageHtml === '<img src="null" class="post">'){
      imageHtml = '<img src="http://www.agentwp.com/wp-content/uploads/link-wordpress-post-title-to-external-url.png" class="post">'
    }
    images.push(imageHtml);
    console.log(images[i], images.length);
  }

  var time = 'default';
  var user = 'default';

  for (j = 0; j < 25; j++){
    $('.col-link').append(descriptions[j]);
    $('.col-image').append(images[j]);
    $('.col-time').append(`<h5 class="post">Submitted ${time} hours ago by ${user}</h5>`);
  }
}

// function getTimeAndAppend(response){
//   // $('h5').innerText("Submitted " + time + "hours ago.");
//   for (i = 0; i < 25; i++){
//     $('a.post').append('<h5 class="post">Submitted time hours ago</h5>');
//   }

// }


// need to place a default image in place of where imageless
// posts occur

// function defaultImg (){
//
// }
