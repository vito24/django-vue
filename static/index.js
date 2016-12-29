/**
 * Created by vito on 2016/12/10.
 */

import Vue from 'vue'

$(document).ready(function() {
	const App = require('./components/' + window.pageName);
	new Vue({
	  	el: '#app',
	  	template: '<App/>',
	  	components: { App }
	})
});