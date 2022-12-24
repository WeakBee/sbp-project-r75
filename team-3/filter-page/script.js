$.getJSON('../API/brand.json', function (data) {
    $.each(data, function(i,data){
        $('.row-brand').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-brand" brand="`+ data.brand +`">
                <p>`+ data.brand +`</p>
            </div>
        </div>
        `);
    });
});


$.getJSON('../API/ram.json', function (data) {
    $.each(data, function(i,data){
        $('.row-ram').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-ram" ram="`+ data.ram +`">
                <p>`+ data.ram +`</p>
            </div>
        </div>
        `);
    });
});

$.getJSON('../API/harga.json', function (data) {
    $.each(data, function(i,data){
        $('.row-harga').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-harga" harga="`+ data.harga +`">
                <p>`+ data.harga +`</p>
            </div>
        </div>
        `);
    });
});

$( ".row" ).delegate( ".kartu-kategori-brand", "click", function() {
    $(".kartu-kategori-brand").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-brand" ).hasClass( "pilih" ) && $( ".kartu-kategori-ram" ).hasClass( "pilih" ) && $( ".kartu-kategori-harga" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});
$( ".row" ).delegate( ".kartu-kategori-ram", "click", function() {
    $(".kartu-kategori-ram").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-brand" ).hasClass( "pilih" ) && $( ".kartu-kategori-ram" ).hasClass( "pilih" ) && $( ".kartu-kategori-harga" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});
$( ".row" ).delegate( ".kartu-kategori-harga", "click", function() {
    $(".kartu-kategori-harga").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-brand" ).hasClass( "pilih" ) && $( ".kartu-kategori-ram" ).hasClass( "pilih" ) && $( ".kartu-kategori-harga" ).hasClass( "pilih" )){
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

$(".tombol-selesai").click(function(){
    if($(this).hasClass( "nyala" )){
        $('.row-rekomendasi').empty();
        $('.row-rekomendasi').append(`
            <div class="loading-circle">
                <div class="loading-inside"></div>
                <div class="circle-inside"></div>
            </div>
        `);
        setTimeout(function() {
            $('.row-rekomendasi').empty();
        }, 1900);
        
        // Jumlah data
        var inginbrand = [];
        var inginram = [];
        var inginharga = [];

        let hpbrand = [];
        let hpram = [];
        let hpharga = [];

        let allhp = [];
        let rekomendasi = [];
        let rekomendasi2 = [];

        $(".kartu-kategori-brand.pilih").each(function(i){
            inginbrand.push($(this).attr("brand"));
        });
        $(".kartu-kategori-ram.pilih").each(function(i){
            inginram.push($(this).attr("ram"));
        });
        $(".kartu-kategori-harga.pilih").each(function(i){
            inginharga.push($(this).attr("harga"));
        });
        // Jumlah data

        // GENRE
        $.getJSON('../API/hp.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginbrand, function(a,datas){
                    if(data2.Brand == datas){
                        hpbrand.push(data2.Nama);
                    }
                });
            });
        });
        $.getJSON('../API/hp.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginharga, function(a,datas){
                    if("1 Juta - 2 Juta" == datas){
                        if(data2.Harga >= 1000000 && data2.Harga <= 2000000){
                            hpharga.push(data2.Nama);
                        }
                    } else if("2 Juta - 3 Juta" == datas){
                        if(data2.Harga >= 2000000 && data2.Harga <= 3000000){
                            hpharga.push(data2.Nama);
                        }
                    } else if("3 Juta - 4 Juta" == datas){
                        if(data2.Harga >= 3000000 && data2.Harga <= 4000000){
                            hpharga.push(data2.Nama);
                        }
                    } else if("4 Juta - 5 Juta" == datas){
                        if(data2.Harga >= 4000000 && data2.Harga <= 5000000){
                            hpharga.push(data2.Nama);
                        }
                    } else if("5 Juta - 6 Juta" == datas){
                        if(data2.Harga >= 5000000 && data2.Harga <= 6000000){
                            hpharga.push(data2.Nama);
                        }
                    } else if("Diatas 6 Juta" == datas){
                        if(data2.Harga >= 6000000){
                            hpharga.push(data2.Nama);
                        }
                    } 
                });
            });
        });
        $.getJSON('../API/hp.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginram, function(a,datas){
                    if(data2.RAM == datas){
                        hpram.push(data2.Nama);
                    }
                });
            });
        });

        setTimeout(function() {
            $.each(hpbrand, function(i,data){
                allhp.push(data);
            });
            $.each(hpharga, function(i,data){
                allhp.push(data);
            });
            $.each(hpram, function(i,data){
                allhp.push(data);
            });
        }, 600);
        
        setTimeout(function() {
            let allhpsort = allhp.sort();
            console.log(allhpsort);
            for (let i = 0; i < allhpsort.length; i++) {
                if(allhpsort[i] == allhpsort[i-1]){
                    rekomendasi.push(allhpsort[i]);
                }
            }
            for (let i = 0; i < rekomendasi.length; i++) {
                if(rekomendasi[i] == rekomendasi[i-1]){
                    rekomendasi2.push(rekomendasi[i]);
                }
            }
        }, 1000);
        setTimeout(function() {
            let rekomendasi3 = unique(rekomendasi2);
            $.each(rekomendasi3, function(i,data){
                $.getJSON('../API/hp.json', function (data2){
                    $.each(data2, function(a,data3){
                        if(data === data3.Nama){
                            $('.row-rekomendasi').append(`
                                <div class="col-lg-4 d-flex justify-content-center px-1 py-3">
                                    <div class="card" style="width: 100%">
                                        <div class="card-body">
                                            <h5 class="card-title">`+ data3.Nama +`</h5>
                                            <h6 class="card-subtitle">`+ data3.Tahun +`</h6>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Harga : Rp.`+ data3.Harga +` </li>
                                            <li class="list-group-item">OS : `+ data3.OS +` </li>
                                            <li class="list-group-item">Chipset : `+ data3.Chipset +`</li>
                                            <li class="list-group-item">Processor : `+ data3.Prosesorinti +`</li>
                                            <li class="list-group-item">Penyimpanan : `+ data3.Penyimpanan +`</li>
                                            <li class="list-group-item">Kamera Belakang : `+ data3.Kamera_belakang +`</li>
                                            <li class="list-group-item">Kamera Depan : `+ data3.kamera_depan +`</li>
                                            <li class="list-group-item">Kapasitas Baterai : `+ data3.Kapasitas_baterai +`</li>
                                        </ul>
                                    </div>
                                </div>
                            `);
                        }
                    });
                });
            });
        }, 2000);
    };
});


