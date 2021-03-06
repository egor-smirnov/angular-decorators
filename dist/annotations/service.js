'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _moduleModule = require('../module/module');

var _utilAnnotate = require('../util/annotate');

var _utilAnnotate2 = _interopRequireDefault(_utilAnnotate);

var type = 'service';

var Service = function Service(maybeT) {
	if (typeof maybeT === 'string') {
		return function (t) {
			(0, _utilAnnotate2['default'])(t, '$provider', { name: maybeT, type: type });
		};
	} else {
		(0, _utilAnnotate2['default'])(maybeT, '$provider', { name: maybeT.name, type: type });
	}
};

exports.Service = Service;
_moduleModule.Module.registerProvider(type, function (provider, module) {
	module.service(provider.$provider.name, provider);
});