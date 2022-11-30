
function umami(){
    $(".sortbytags").text("Umami");
    $('.all-resep').empty();
    $.getJSON('./API/umami.json', function (data){
        // Membuat Kartu
        $.each(data, function(i,data){
            $('.all-resep').append(`
            <div class="col-lg-4">
                <div class="list-resep">
                    <div class="d-flex align-items-center">
                        <img class="foto-makanan" src="`+ data.gambar +`">
                        <div> 
                            <p class="fw-bold">`+ data.nama +`</p>
                            <p>Umami</p>
                        </div>
                    </div>
                    <div class="my-3">
                        <p class="mb-3 fw-bold">Bahan Masakan :</p>
                        <ul class="semua-bahan resep-`+ i +`">
                        </ul>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="mulai-masak">
                            Mulai Masak
                            <img src="./assets/icon/fire.svg">
                        </button>
                        <img src="./assets/icon/Time.svg">
                        <span class="waktu-masak">15 Menit</span>
                    </div>
                </div>
            </div>
            `);
        });
        // Membuat Kartu
    
        // Jumlah data
        var jumlah = data.length;
        // Jumlah data
        
        // Masukin data bahan
        for (let a = 0; a < jumlah; a++) {
            var datas = data[a];
            $.each(datas.semua_bahan, function(i,data){
                $('.resep-'+a).append(`
                    <li>`+ data.bahan +`</li>
                `);
            });
        }
        // Masukin data bahan
    });
}
function royco(){
    $(".sortbytags").text("Royco");
    $('.all-resep').empty();
    $.getJSON('./API/royco.json', function (data){
        // Membuat Kartu
        $.each(data, function(i,data){
            $('.all-resep').append(`
            <div class="col-lg-4">
                <div class="list-resep">
                    <div class="d-flex align-items-center">
                        <img class="foto-makanan" src="./assets/royco/Sayur Asem.jpg">
                        <div> 
                            <p class="fw-bold">`+ data.nama +`</p>
                            <p>Royco</p>
                        </div>
                    </div>
                    <div class="my-3">
                        <p class="mb-3 fw-bold">Bahan Masakan :</p>
                        <ul class="semua-bahan resep-`+ i +`">
                        </ul>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="mulai-masak">
                            Mulai Masak
                            <img src="./assets/icon/fire.svg">
                        </button>
                        <img src="./assets/icon/Time.svg">
                        <span class="waktu-masak">15 Menit</span>
                    </div>
                </div>
            </div>
            `);
        });
        // Membuat Kartu
    
        // Jumlah data
        var jumlah = data.length;
        // Jumlah data
        
        // Masukin data bahan
        for (let a = 0; a < jumlah; a++) {
            var datas = data[a];
            $.each(datas.semua_bahan, function(i,data){
                $('.resep-'+a).append(`
                    <li>`+ data.bahan +`</li>
                `);
            });
        }
        // Masukin data bahan
    });
}
function roycoumami(){
    $(".sortbytags").text("Semua");
    $('.all-resep').empty();
    $.getJSON('./API/royco.json', function (data){
        // Membuat Kartu
        $.each(data, function(i,data){
            $('.all-resep').append(`
            <div class="col-lg-4">
                <div class="list-resep">
                    <div class="d-flex align-items-center">
                        <img class="foto-makanan" src="./assets/royco/Sayur Asem.jpg">
                        <div> 
                            <p class="fw-bold">`+ data.nama +`</p>
                            <p>Royco</p>
                        </div>
                    </div>
                    <div class="my-3">
                        <p class="mb-3 fw-bold">Bahan Masakan :</p>
                        <ul class="semua-bahan resep-royco-`+ i +`">
                        </ul>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="mulai-masak">
                            Mulai Masak
                            <img src="./assets/icon/fire.svg">
                        </button>
                        <img src="./assets/icon/Time.svg">
                        <span class="waktu-masak">15 Menit</span>
                    </div>
                </div>
            </div>
            `);
        });
        // Membuat Kartu
    
        // Jumlah data
        var jumlah = data.length;
        // Jumlah data
        
        // Masukin data bahan
        for (let a = 0; a < jumlah; a++) {
            var datas = data[a];
            $.each(datas.semua_bahan, function(i,data){
                $('.resep-royco-'+a).append(`
                    <li>`+ data.bahan +`</li>
                `);
            });
        }
        // Masukin data bahan
    });
    $.getJSON('./API/umami.json', function (data){
        // Membuat Kartu
        $.each(data, function(i,data){
            $('.all-resep').append(`
            <div class="col-lg-4">
                <div class="list-resep">
                    <div class="d-flex align-items-center">
                        <img class="foto-makanan" src="`+ data.gambar +`">
                        <div> 
                            <p class="fw-bold">`+ data.nama +`</p>
                            <p>Umami</p>
                        </div>
                    </div>
                    <div class="my-3">
                        <p class="mb-3 fw-bold">Bahan Masakan :</p>
                        <ul class="semua-bahan resep-umami-`+ i +`">
                        </ul>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="mulai-masak">
                            Mulai Masak
                            <img src="./assets/icon/fire.svg">
                        </button>
                        <img src="./assets/icon/Time.svg">
                        <span class="waktu-masak">15 Menit</span>
                    </div>
                </div>
            </div>
            `);
        });
        // Membuat Kartu
    
        // Jumlah data
        var jumlah = data.length;
        // Jumlah data
        
        // Masukin data bahan
        for (let a = 0; a < jumlah; a++) {
            var datas = data[a];
            $.each(datas.semua_bahan, function(i,data){
                $('.resep-umami-'+a).append(`
                    <li>`+ data.bahan +`</li>
                `);
            });
        }
        // Masukin data bahan
    });
}

roycoumami();