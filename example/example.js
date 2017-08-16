var DateTime = require('../DateTime.js');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(DateTime, {
    dateFormat: 'YYYY',
    closeOnSelect: true,
    endDate: new Date().getFullYear() - 13,
    isValidDate: function(current) {
      return current.isBefore(DateTime.moment().startOf('month'));
    },
    onChange: function(e) {
      console.log(e, "EEE")
    }
  }),
  document.getElementById('datetime')
);
