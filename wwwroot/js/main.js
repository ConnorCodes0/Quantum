(() => {
  // src/Navigation/Navigation.js
  var Navigation = (() => {
    "use strict";
    const CSS_NAVIGATION = "navigation", CSS_NAVIGATION_GROUP_TOGGLE = "navigation__groupToggle", CSS_NAVIGATION_GROUP = "navigation__group", CSS_NAVIGATION_GROUP_OPEN = "navigation__group--open";
    function init() {
      bindEvents();
    }
    function bindEvents() {
      const navigations = document.getElementsByClassName(CSS_NAVIGATION);
      for (navigation of navigations) {
        if (!navigation) {
          return;
        }
        navigation.addEventListener("click", (event) => {
          if (event.target.classList.contains(CSS_NAVIGATION_GROUP_TOGGLE)) {
            const navigationGroup = event.target.closest(`.${CSS_NAVIGATION_GROUP}`);
            toggleMenu(navigationGroup);
          }
        });
      }
    }
    function toggleMenu(navigationGroup) {
      if (navigationGroup) {
        navigationGroup.classList.toggle(CSS_NAVIGATION_GROUP_OPEN);
      }
    }
    return {
      init
    };
  })();
  var Navigation_default = Navigation;

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
    Navigation_default,
    Card_default
  ];
  components.forEach((component) => component.init());
})();
