import { sayHello } from './renderer/module';

const element = document.createElement('h1');

element.innerHTML = sayHello('World!');

document.body.appendChild(element); 
