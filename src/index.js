'use strict';

import countTimer from './modules/countTimer';
import changeDate from './modules/changeData';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeTeamImages from './modules/changeTeamImages';
import calc from './modules/calc';
import validForm from './modules/validForm';
import sendForm from './modules/sendForm'; 

countTimer(changeDate());
setInterval(countTimer, 1000, changeDate()); // Timer
toggleMenu(); // Menu
togglePopup(); // Popup
tabs(); // Tabs
slider(); // Slider
changeTeamImages(); // Our team
calc(100); // Calculator
validForm(); // Footer form validator
sendForm(); // Send-AJAX-form