// Hide all modals on page load
$(document).ready(function() {
    $('#modal_containter').hide();

    $('#granata').hide();
    $('#saluFoods').hide();
    $('#slounge').hide();
    $('#pomarrosa').hide();
    $('#anabona').hide();
    $('#elEden').hide();
    $('#amaia').hide();
    $('#encantigo').hide();
    $('#pistils').hide();
    $('#acti').hide();
    $('#boreme').hide();
    $('#mg').hide();

    $('#layover').hide();
});


// Hide project modal if the 'X' is clicked
$('.close').on('click', function() {
    $('#modal_containter').hide();

    $('#granata').hide();
    $('#saluFoods').hide();
    $('#slounge').hide();
    $('#pomarrosa').hide();
    $('#anabona').hide();
    $('#elEden').hide();
    $('#amaia').hide();
    $('#encantigo').hide();
    $('#pistils').hide();
    $('#acti').hide();
    $('#boreme').hide();
    $('#mg').hide();
});

// Hide project modal if container is clicked
$('#modal_containter').on('click', function() {
    $('#modal_containter').hide();

    $('#granata').hide();
    $('#saluFoods').hide();
    $('#slounge').hide();
    $('#pomarrosa').hide();
    $('#anabona').hide();
    $('#elEden').hide();
    $('#amaia').hide();
    $('#encantigo').hide();
    $('#pistils').hide();
    $('#acti').hide();
    $('#boreme').hide();
    $('#mg').hide();
});

// Show project modals
$('#enterGranata').on('click', function () {
    $('#modal_containter').show();
    $('#granata').show();
});

$('#enterSaluFoods').on('click', function () {
    $('#modal_containter').show();
    $('#saluFoods').show();
});

$('#enterSlounge').on('click', function () {
    $('#modal_containter').show();
    $('#slounge').show();
});

$('#enterPomarrosa').on('click', function () {
    $('#modal_containter').show();
    $('#pomarrosa').show();
});

$('#enterAnabona').on('click', function () {
    $('#modal_containter').show();
    $('#anabona').show();
});

$('#enterElEden').on('click', function () {
    $('#modal_containter').show();
    $('#elEden').show();
});

$('#enterAmaia').on('click', function () {
    $('#modal_containter').show();
    $('#amaia').show();
});

$('#enterEncantigo').on('click', function () {
    $('#modal_containter').show();
    $('#encantigo').show();
});

$('#enterPistils').on('click', function () {
    $('#modal_containter').show();
    $('#pistils').show();
});

$('#enterActi').on('click', function () {
    $('#modal_containter').show();
    $('#acti').show();
});

$('#enterBoreme').on('click', function () {
    $('#modal_containter').show();
    $('#boreme').show();
});

$('#enterMG').on('click', function () {
    $('#modal_containter').show();
    $('#mg').show();
});