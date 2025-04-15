// STEP 2: Wrap everything in an IIFE
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose helloSpeaker to global scope
  window.helloSpeaker = helloSpeaker;
})(window);
