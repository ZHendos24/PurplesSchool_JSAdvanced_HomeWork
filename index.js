// Домашнее задание 14. Модульность

'use strict';

import Task from './task.js';
import User from './user.js';

const task = new Task("писать код");
const user = new User(task);

user.do();