console.log("Client-side ! code running");

const button = document.getElementById('firstPage');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
});

const button2 = document.getElementById('secondPage');
button2.addEventListener('click', function(e) {
  console.log('button2 was clicked');
});