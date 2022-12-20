// Unique
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
// Unique
let subgenre = [];

$.getJSON('../API/Pop.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        subgenre.push(data2.SUBGENRE);
    });
    // Membuat Kartu
});

setTimeout(function() {
    let subgenrefilter = unique(subgenre);
    $.each(subgenrefilter, function(i,data){
        $('.link-subgenre').append(`
                <li><a href="#">`+ data +`</a></li>
            `);
    });
}, 500);