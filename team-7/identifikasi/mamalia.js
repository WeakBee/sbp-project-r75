
$.getJSON('../API/Golongan.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-golongan').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori" golongan="`+ data.Golongan +`">
            <p>`+ data.Golongan +`</p>
            </div>
        </div>
        `);
    });
});

$.getJSON('../API/Habitat1.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-habitat').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori" habitat="`+ data.Habitat +`">
            <p>`+ data.Habitat +`</p>
            </div>
        </div>
        `);
    });
});

$.getJSON('../API/Warna1.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-warna').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori" warna="`+ data.Warna +`">
            <p>`+ data.Warna +`</p>
            </div>
        </div>
        `);
    });
});

$.getJSON('../API/Tipekulit.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-tipe').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori" tipe="`+ data.Tipe +`">
            <p>`+ data.Tipe +`</p>
            </div>
        </div>
        `);
    });
});


$( ".row" ).delegate( ".kartu-kategori", "click", function() {
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});

function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
// Unique