$.getJSON('../API/burung.json', function (data){
    $.each(data, function(i,data2){
        $('.burung').append(`
            <div class="col-4">
                <div class="card">
                    <img src="`+ data2.Gambar +`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">`+ data2.Nama +`</h5>
                        <div class="card-isi">
                        <p class="card-text">Habitat : `+ data2.Habitat +`</p>
                        <p class="card-text">Lokasi : `+ data2.Lokasi +`</p>
                        <p class="card-text">Ukuran Tubuh : `+ data2.UkuranTubuh +`</p>
                        <p class="card-text">Panjang Ekor : `+ data2.PanjangEkor +`</p>
                        <p class="card-text">Bentuk Paruh: `+ data2.BentukParuh +`</p>
                        <p class="card-text">Golongan : `+ data2.Makanan +`</p>
                        <p class="card-text">Tipe Kulit : `+ data2.TipeKulit +`</p>
                        <p class="card-text">Warna : `+ data2.Warna +`</p>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
});