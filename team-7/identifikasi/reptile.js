
$.getJSON('../API/Golongan.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-golongan').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.Golongan +`">
            <p>`+ data.Golongan +`</p>
            </div>
        </div>
        `);
    });
});

$.getJSON('../API/Habitat.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-habitat').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.Habitat +`">
            <p>`+ data.Habitat +`</p>
            </div>
        </div>
        `);
    });
});

$.getJSON('../API/Warna.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-warna').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.Warna +`">
            <p>`+ data.Warna +`</p>
            </div>
        </div>
        `);
    });
});



$( ".row" ).delegate( ".kartu-kategori", "click", function() {
    $(this).toggleClass("pilih");
    
});