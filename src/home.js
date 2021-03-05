function createNode(type, id, src, text) {
    let newNode = document.createElement(type);
    newNode.setAttribute('id', id);
    newNode.src = src;
    newNode.textContent = text;
    return newNode;
}

const heading = createNode('div', 'heading', '', '');
const title = createNode('h1', '', '', 'THE CHUM BUCKET');


const navBar = createNode('div', 'nav', '', '');
const homeTab = createNode('div', '', '', 'home');
const menuTab = createNode('div', '', '', 'menu');
const contactTab = createNode('div', '', '', 'contact');

const infoBox = createNode('div', 'info', '', '');
const announcement = createNode('h2', '', '', 'NOW SELLING KRABBY PATTIES');
const ownerPix = createNode('IMG', 'plankton', 'img/plankton.jpg', '');
const fact = createNode('div', '', '', 'Made with only the best chum since 1999');
const covid = createNode('div', '', '', 'COVID-19: Outwater dining and takeout ONLY');

const content = document.querySelector('#content');

heading.appendChild(title);
navBar.appendChild(homeTab);
navBar.appendChild(menuTab);
navBar.appendChild(contactTab);
heading.appendChild(navBar);

infoBox.appendChild(announcement);
infoBox.appendChild(ownerPix);
infoBox.appendChild(fact);
infoBox.appendChild(covid);

function loadHeading() {
    content.appendChild(heading);
}

function loadHome() {
    content.appendChild(infoBox);
}

export {
    loadHeading,
    loadHome,
    createNode,
    content
 }