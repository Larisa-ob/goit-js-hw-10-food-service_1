import './styles.css';
import itemsElement from './menu.json';
import itemsTemplate from './templates/menu.hbs';
import './mymain';
const menu = document.querySelector('.js-menu');
const makup = itemsTemplate(itemsElement);
menu.insertAdjacentHTML('beforeend', makup);
