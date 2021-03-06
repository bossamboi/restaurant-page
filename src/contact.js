import { createNode, content} from './home'

const contactBox = createNode('div', 'contact-container', '', '');

const phone = createNode('div', 'phone', '', 'phone: 123-456-7890');
const location = createNode('div', 'location', '', 'address: 1 Conch St, Bikini Bottom');
const map = createNode('iframe', '', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250137.34135357544!2d165.3047096!3d11.5950939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x644c2180a24fadbf%3A0x4c3f21ce9753a027!2sBikini%20Atoll!5e0!3m2!1sen!2sus!4v1614994708534!5m2!1sen!2sus', '');

map.setAttribute('width', '450');
map.setAttribute('height', '350');
map.style.border = '0';
map.setAttribute('allowfullscreen', '');
map.setAttribute('loading', 'lazy');

contactBox.appendChild(phone);
contactBox.appendChild(location);
contactBox.appendChild(map);

function loadContact() {
    content.appendChild(contactBox);
}

export { loadContact }