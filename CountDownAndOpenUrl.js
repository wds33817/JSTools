var distance = 4;
var x = setInterval(function() {
  distance--;
  console.log(distance);
  if (distance == 0) {
    clearInterval(x);
    window.open("https://www.google.com.au");
  }
}, 1000);
