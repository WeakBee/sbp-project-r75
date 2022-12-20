$.getJSON('../API/genre.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-genre').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" genre="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});

$( ".row" ).delegate( ".kartu-kategori", "click", function() {
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});

// Unique
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
// Unique

let tahun = [];

$.getJSON('../API/film.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        tahun.push(data2.tahun);
    });
    // Membuat Kartu
});

setTimeout(function() {
    let tahunfilter = unique(tahun);
    let tahunfiltersort = tahunfilter.sort();

    $.each(tahunfiltersort, function(i,data){
        $('.row-tahun').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" tahun="`+ data +`">
                <p>`+ data +`</p>
            </div>
        </div>
        `);
    });
}, 500);
