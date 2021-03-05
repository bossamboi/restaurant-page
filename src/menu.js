import { createNode, content } from './home'

const menu = createNode('IMG', 'menu', 'img/menu.jpg', '');

function loadMenu() {
    content.appendChild(menu);
}

export { loadMenu }