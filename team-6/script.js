$.getJSON('./API/Blues.json', function (data){
    $.each(data, function(i,data2){
        $('.kotak-lagu').append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="./assets/images/imagesblues/`+ data2.Gambar +`" class="card-img-top" alt="...">
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
                    <img src="./assets/images/imagesdangdut/`+ data2.Gambar +`" class="card-img-top" alt="...">
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

$.getJSON('./API/Rock.json', function (data){
    $.each(data, function(i,data2){
        $('.kotak-lagu').append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="./assets/images/imagesrock/`+ data2.Gambar +`" class="card-img-top" alt="...">
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

$.getJSON('./API/Jazz.json', function (data){
    $.each(data, function(i,data2){
        $('.kotak-lagu').append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="./assets/images/imagesjazz/`+ data2.Gambar +`" class="card-img-top" alt="...">
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

$.getJSON('./API/Metal.json', function (data){
    $.each(data, function(i,data2){
        $('.kotak-lagu').append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="./assets/images/imagesmetal/`+ data2.Gambar +`" class="card-img-top" alt="...">
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

$.getJSON('./API/Pop.json', function (data){
    $.each(data, function(i,data2){
        $('.kotak-lagu').append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="./assets/images/imagespop/`+ data2.Gambar +`" class="card-img-top" alt="...">
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

$.getJSON('./API/Punk.json', function (data){
    $.each(data, function(i,data2){
        $('.kotak-lagu').append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="./assets/images/imagespunk/`+ data2.Gambar +`" class="card-img-top" alt="...">
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

$.getJSON('./API/HipHop.json', function (data){
    $.each(data, function(i,data2){
        $('.kotak-lagu').append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="./assets/images/imageshiphop/`+ data2.Gambar +`" class="card-img-top" alt="...">
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
