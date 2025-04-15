// STEP 2: Wrap everything in an IIFE
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose byeSpeaker to global scope
  window.byeSpeaker = byeSpeaker;
})(window);
