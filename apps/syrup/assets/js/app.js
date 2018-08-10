// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
// import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

console.log('••••')
console.log('••••')


require('../css/app.scss');

import axios from 'axios';
import 'phoenix_html';
import Vue from 'vue/dist/vue.js';
import 'bootstrap';

const app = new Vue({
  el: '#app',
  data: {
    urls: {login: null, register: null},
    error: false
  }
});

// axios
//   .get('/api/config/quark')
//   .then(function(response) { app.urls = response.data; })
//   .catch(function() { app.error = true; });
