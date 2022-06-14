function bar () {
  console.log('bar');
}
// callback function
setTimeout(bar, 2000);

//
function response(content) {
  console.log(content);
}
//function as first values
//async programming
ajax ("http://www.google.com", response);