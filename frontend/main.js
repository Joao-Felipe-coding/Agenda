import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const login = new Login('.login-form');
const register = new Login('.register-form');
login.init();
register.init();

import './assets/css/style.css';
import './assets/css/nav.css';
import './assets/css/404.css';
import './assets/css/agenda.css';
import './assets/css/login.css';
import './assets/css/contato.css';
