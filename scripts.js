console.log('JS Loaded');

$(document).ready(readyNow);

function readyNow() {
    $('.color-button').on('click', addStuff, counter);
} // end readyNow function

function addStuff() {
    // console.log('addStuff activated');
    var color = $(this).data('color');
    $('body').append($('<div>', {
        class: "color-cube " + color,
    }));
} // end addStuff

// end base mode of partner homework

function counter() {
    var color = $(this).data('color');
    $('#'+color).
}