/* var a = require('./hello.js');

a.sayhello(); */

import React from 'react'
import {render} from 'react-dom'
import Hello from './hello'

import '../css/main.css' // 导入css

render(<Hello />, document.getElementById('root'));