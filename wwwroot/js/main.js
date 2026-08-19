(() => {
  // src/Components/Card/Card.js
  var Card = (() => {
    "use strict";
    function init() {
      console.log("Card component loaded");
    }
    return {
      init
    };
  })();
  var Card_default = Card;

  // src/js/Main.js
  var components = [
    Card_default
  ];
  components.forEach((component) => component.init());
})();
