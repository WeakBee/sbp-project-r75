$.getJSON('./API/Blues.json', function (data){
    $.each(data, function(i,data2){
        $('.kotak-lagu').append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">`+ data2.SUBGENRE +`</h5>
                        <p class="card-text">`+ data2.Band +`</p>
                        <p class="card-text">`+ data2.Album +`</p>
                        <p class="card-text">`+ data2.Judul +`</p>
                        <p class="card-text">`+ data2.Tahun +`</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `);
    });
});

$.getJSON('./API/Dangdut.json', function (data){
    $.each(data, function(i,data2){
        $('.kotak-lagu').append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="./assets/images/`+ data2.Gambar +`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">`+ data2.SUBGENRE +`</h5>
                        <p class="card-text">`+ data2.Band +`</p>
                        <p class="card-text">`+ data2.Album +`</p>
                        <p class="card-text">`+ data2.Judul +`</p>
                        <p class="card-text">`+ data2.Tahun +`</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `);
    });
});