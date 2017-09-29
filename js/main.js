/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';



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
  var test = response.data.children[0].data.title;
  console.log('title: ' + test);
}

function onError(){
  console.log('error: seek & destroy, fam. u can do it.');
}
