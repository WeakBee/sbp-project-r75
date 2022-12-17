$.getJSON('../API/film.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        $('.row-genre').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" genre="`+ data2.genre +`">
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});

$.getJSON('../API/film.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        $('.row-tahun').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" tahun="`+ data2.tahun +`">
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});

$.getJSON('../API/film.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        $('.row-durasi').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" durasi="`+ data2.durasi +`">
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});