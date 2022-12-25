$.getJSON('../API/ikan.json', function (data){
    $.each(data, function(i,data2){
        $('.ikan').append(`
            <div class="col-4">
                <div class="card">
                    <img src="`+ data2.Gambar +`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">`+ data2.Nama +`</h5>
                        <div class="card-isi">
                        <p class="card-text">Habitat : `+ data2.Habitat +`</p>
                        <p class="card-text">Lokasi : `+ data2.Lokasi +`</p>
                        <p class="card-text">Ukuran Tubuh : `+ data2.UkuranTubuh +`</p>
                        <p class="card-text">Banyak Sisik : `+ data2.BanyakSisik +`</p>
                        <p class="card-text">Warna : `+ data2.Warna +`</p>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
});