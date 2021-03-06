import {loadHeading, loadHome, homeTab, menuTab, contactTab, content} from './home'
import { loadMenu } from './menu'
import { loadContact } from './contact' 

loadHeading();

loadHome();
// loadMenu();
// loadContact();


homeTab.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    loadHome();
})

menuTab.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    loadMenu();
})

contactTab.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    loadContact();
})