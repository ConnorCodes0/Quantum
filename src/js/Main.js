import Navigation from "../Navigation/Navigation.js";
import Card from "../Components/Card/Card.js";

const components = [
    Navigation,
    Card
];

components.forEach(component => component.init());
