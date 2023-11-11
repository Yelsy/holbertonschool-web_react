import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  // Add elements to the body
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startBtn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;
  const updateCounter = _.debounce(function () {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }, 500);

  $('#startBtn').on('click', updateCounter);
});
