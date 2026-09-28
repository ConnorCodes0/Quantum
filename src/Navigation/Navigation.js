const Navigation = (() => {
    'use strict';

    const CSS_NAVIGATION = "navigation",
        CSS_NAVIGATION_OPEN = "navigation--open",
        CSS_NAVIGATION_TOGGLE = "navigationToggle",
        CSS_NAVIGATION_GROUP_TOGGLE = "navigation__groupToggle",
        CSS_NAVIGATION_GROUP_LINK_ACTIVE = "navigation__link--active",
        CSS_NAVIGATION_GROUP = "navigation__group",
        CSS_NAVIGATION_GROUP_OPEN = "navigation__group--open",
        CSS_SITE = "site";

    function init() {
        _bindEvents();
    }

    function _bindEvents() {
        const navigations = document.getElementsByClassName(CSS_NAVIGATION),
            pageContainer = document.getElementsByClassName(CSS_SITE)[0];

        for (navigation of navigations) {
            if (!navigation) {
                return;
            }

            const navigationToggle = document.getElementsByClassName(CSS_NAVIGATION_TOGGLE)[0];

            navigationToggle.addEventListener("click", () => {
                openNavigation(navigation);
            });

            if (navigation.getElementsByClassName(CSS_NAVIGATION_GROUP_LINK_ACTIVE).length > 0) {
                const activeLink = navigation.getElementsByClassName(CSS_NAVIGATION_GROUP_LINK_ACTIVE)[0],
                    navigationGroup = activeLink.closest(`.${CSS_NAVIGATION_GROUP}`);

                if (navigationGroup) {
                    openMenu(navigationGroup, navigation);
                }
            }

            navigation.addEventListener("click", (event) => {
                if (event.target.classList.contains(CSS_NAVIGATION_GROUP_TOGGLE)) {
                    const navigationGroup = event.target.closest(`.${CSS_NAVIGATION_GROUP}`);
                    openMenu(navigationGroup, navigation);
                }
            });

            pageContainer.addEventListener("click", (event) => {
                const target = event.target;

                if (target.closest(`.${CSS_NAVIGATION}`) || target.closest(`.${CSS_NAVIGATION_TOGGLE}`)) {
                    return;
                }

                closeNavigation(navigation);
            });
        }
    }

    function closeNavigation(navigation) {
        if (!navigation) {
            return;
        }

        if (navigation.classList.contains(CSS_NAVIGATION_OPEN)) {
            navigation.classList.remove(CSS_NAVIGATION_OPEN);
        }
    }

    function openNavigation(navigation) {
        if (!navigation) {
            return;
        }

        if (navigation.classList.contains(CSS_NAVIGATION_OPEN)) {
            closeNavigation(navigation);
            return;
        }

        navigation.classList.add(CSS_NAVIGATION_OPEN);
    }

    function openMenu(navigationGroup, navigation) {
        // debugger;
        const openNavigationGroups = navigation?.getElementsByClassName(CSS_NAVIGATION_GROUP_OPEN);

        if (!openNavigationGroups || !navigationGroup) {
            return;
        }

        for (const openNavigationGroup of openNavigationGroups) {
            if (openNavigationGroup === navigationGroup) {
                closeMenu(navigationGroup);
                return;
            }

            if (!openNavigationGroup.querySelector(`.${CSS_NAVIGATION_GROUP_LINK_ACTIVE}`)) {
                closeMenu(openNavigationGroup);
                continue;
            } 
        }

        navigationGroup.classList.add(CSS_NAVIGATION_GROUP_OPEN);
    }

    function closeMenu(navigationGroup) {
        if (!navigationGroup || !navigationGroup.classList.contains(CSS_NAVIGATION_GROUP_OPEN)) {
            return;
        }

        navigationGroup.classList.remove(CSS_NAVIGATION_GROUP_OPEN);
    }

    return {
        init,
        openMenu,
        closeMenu
    };
})();

export default Navigation;