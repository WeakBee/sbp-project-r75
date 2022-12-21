// Unique
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
// Unique

let vitamin = [];

$.getJSON('./API/buah.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        $.each(data2.kandungan, function(i,data3){
            vitamin.push(data3);
        });
    });
    // Membuat Kartu
});

setTimeout(function() {
    let vitaminfilter = unique(vitamin);
    let vitaminfiltersort = vitaminfilter.sort();

    $.each(vitaminfiltersort, function(i,data){
        $('.row-vitamin').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-tahun" tahun="`+ data +`">
                <p>`+ data +`</p>
            </div>
        </div>
        `);
    });
}, 500);