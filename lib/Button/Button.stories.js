'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _storybookReadme = require('storybook-readme');

var _button = require('./button.md');

var _button2 = _interopRequireDefault(_button);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Buttons outline', module).add('regular', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    null,
    'My button'
  );
})).add('success', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { success: true },
    'My button'
  );
})).add('warning', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { warning: true },
    'My button'
  );
})).add('disabled', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { disabled: true },
    'My button'
  );
}));

(0, _react3.storiesOf)('Buttons solid', module).add('regular', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { solid: true },
    'My button'
  );
})).add('success', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { solid: true, success: true },
    'My button'
  );
})).add('warning', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { solid: true, warning: true },
    'My button'
  );
})).add('disabled', (0, _storybookReadme.withReadme)(_button2.default, function () {
  return _react2.default.createElement(
    _Button2.default,
    { solid: true, disabled: true },
    'My button'
  );
}));
//# sourceMappingURL=Button.stories.js.map