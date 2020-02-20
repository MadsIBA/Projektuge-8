// Country
// Predefined - placeholder just in case

// City
var my_options = $('#my_select option');
var selected = $('#my_select').val();

my_options.sort(function(a, b) {
    if (a.text > b.text) return 1;
    if (a.text < b.text) return -1;
    return 0;
});

$('#my_select')
    .empty()
    .append(my_options);
$('#my_select').val(selected);

// Lazy copy paste... Fix code when its not 4AM
// Langauge
var my_options2 = $('#my_select2 option');
var selected2 = $('#my_select2').val();

my_options2.sort(function(a2, b2) {
    if (a2.text > b2.text) return 1;
    if (a2.text < b2.text) return -1;
    return 0;
});

$('#my_select2')
    .empty()
    .append(my_options2);
$('#my_select2').val(selected2);
