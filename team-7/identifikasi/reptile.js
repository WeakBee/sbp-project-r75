
$.getJSON('../API/Golongan.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-golongan').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-golongan" golongan="`+ data.Golongan +`">
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
            <div class="kartu-kategori kartu-kategori-habitat" habitat="`+ data.Habitat +`">
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
            <div class="kartu-kategori kartu-kategori-warna" warna="`+ data.Warna +`">
            <p>`+ data.Warna +`</p>
            </div>
        </div>
        `);
    });
});

$( ".row" ).delegate( ".kartu-kategori-golongan", "click", function() {
    $(".kartu-kategori-golongan").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-golongan" ).hasClass( "pilih" ) && $( ".kartu-kategori-habitat" ).hasClass( "pilih" ) && $( ".kartu-kategori-warna" ).hasClass( "pilih" ) && $( ".kartu-kategori-berat" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});
$( ".row" ).delegate( ".kartu-kategori-habitat", "click", function() {
    $(".kartu-kategori-habitat").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-golongan" ).hasClass( "pilih" ) && $( ".kartu-kategori-habitat" ).hasClass( "pilih" ) && $( ".kartu-kategori-warna" ).hasClass( "pilih" ) && $( ".kartu-kategori-berat" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});
$( ".row" ).delegate( ".kartu-kategori-warna", "click", function() {
    $(".kartu-kategori-warna").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-golongan" ).hasClass( "pilih" ) && $( ".kartu-kategori-habitat" ).hasClass( "pilih" ) && $( ".kartu-kategori-warna" ).hasClass( "pilih" ) && $( ".kartu-kategori-berat" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});
$( ".row" ).delegate( ".kartu-kategori-berat", "click", function() {
    $(".kartu-kategori-berat").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-golongan" ).hasClass( "pilih" ) && $( ".kartu-kategori-habitat" ).hasClass( "pilih" ) && $( ".kartu-kategori-warna" ).hasClass( "pilih" ) && $( ".kartu-kategori-berat" ).hasClass( "pilih" )){
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

        // Jumlah data
        var ingingolongan = [];
        var inginhabitat = [];
        var inginwarna= [];
        var inginberat= [];
        var pilihsatuaja = [];

        let hewangolongan = [];
        let hewanhabitat = [];
        let hewanwarna = [];
        let hewanberat = [];

        let allhewan = [];
        let rekomendasi = [];
        let allhewansort = [];
        let rekomendasi2 = [];
        let rekomendasi3 = [];
        let rekomendasi4 = [];

        $(".kartu-kategori-golongan.pilih").each(function(i){
            ingingolongan.push($(this).attr("golongan"));
        });
        $(".kartu-kategori-habitat.pilih").each(function(i){
            inginhabitat.push($(this).attr("habitat"));
        });
        $(".kartu-kategori-warna.pilih").each(function(i){
            inginwarna.push($(this).attr("warna"));
        });
        $(".kartu-kategori-berat.pilih").each(function(i){
            inginberat.push($(this).attr("berat"));
        });
        $(".kartu-kategori.pilih").each(function(i){
            pilihsatuaja.push("test");
        });
        // Jumlah data
        // golongan
        $.getJSON('../API/reptile.json', function (data){
            $.each(data, function(a,data2){
                $.each(ingingolongan, function(a,ingin_golongan){
                    if(data2.Golongan == ingin_golongan){
                        hewangolongan.push(data2.Nama);
                    }
                });
            });
        });
        // golongan

        // habitat
        $.getJSON('../API/reptile.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginhabitat, function(a,ingin_habitat){
                    if(data2.Habitat == ingin_habitat){
                        hewanhabitat.push(data2.Nama);
                    }
                });
            });
        });
        // habitat

        // warna
        $.getJSON('../API/reptile.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginwarna, function(a,ingin_warna){
                    $.each(data2.Warna, function(a,data3){
                        if(data3 == ingin_warna){
                            hewanwarna.push(data2.Nama);
                        }
                    });
                });
            });
        });
        // warna

        // berat
        $.getJSON('../API/reptile.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginberat, function(a,ingin_berat){
                    if("kurangdari5" == ingin_berat){
                        if(data2.Satuan == "Gram"){
                            hewanberat.push(data2.Nama);
                        }
                    } else if("kurangdari10" == ingin_berat){
                        if(data2.Berat <= 10 || data2.Satuan == "Gram"){
                            hewanberat.push(data2.Nama);
                        }
                    } else if("kurangdari50" == ingin_berat){
                        if(data2.Berat <= 50 && data2.Satuan != "Gram"){
                            hewanberat.push(data2.Nama);
                        }
                    } else if("kurangdari100" == ingin_berat){
                        if(data2.Berat <= 100 && data2.Satuan != "Gram"){
                            hewanberat.push(data2.Nama);
                        }
                    } else if("lebihdari100" == ingin_berat){
                        if(data2.Berat >= 100 && data2.Satuan != "Gram"){
                            hewanberat.push(data2.Nama);
                        }
                    }
                });
            });
        });
        // berat

        setTimeout(function() {
            console.log(pilihsatuaja);
            $.each(hewangolongan, function(i,data){
                allhewan.push(data);
            });
            $.each(hewanhabitat, function(i,data){
                allhewan.push(data);
            });
            $.each(hewanberat, function(i,data){
                allhewan.push(data);
            });
            $.each(hewanwarna, function(i,data){
                allhewan.push(data);
            });
            allhewansort = allhewan.sort();
        },300);

        setTimeout(function() {
            for (let i = 0; i < allhewansort.length; i++) {
                if(pilihsatuaja.length == 1){
                    rekomendasi.push(allhewansort[i]);
                } else if(allhewan[i] == allhewansort[i-1]){
                    rekomendasi.push(allhewansort[i]);
                }
            }
            for (let i = 0; i < rekomendasi.length; i++) {
                if(rekomendasi[i] == rekomendasi[i-1]){
                    rekomendasi2.push(rekomendasi[i]);
                }
            }
            for (let i = 0; i < rekomendasi.length; i++) {
                if(rekomendasi[i] == rekomendasi[i-1]){
                    rekomendasi3.push(rekomendasi[i]);
                }
            }
        }, 500);

        setTimeout(function() {
        let rekomendasi4 = unique(rekomendasi3);
        $.each(rekomendasi4, function(i,data){
            $.getJSON('../API/reptile.json', function (data2){
                $.each(data2, function(a,data3){
                    if(data === data3.Nama){
                        $('.row-rekomendasi').append(`
                            <div class="col-4 d-flex justify-content-center px-1 py-3">
                                <div class="card" style="width: 100%">
                                    <img src="`+ data3.Gambar +`" class="gambar-kartu card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">`+ data3.Nama +`</h5>
                                        <h6 class="card-subtitle">`+ data3.Habitat +`</h6>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Berat : `+ data3.Berat +` `+ data3.Satuan +`</li>
                                        <li class="list-group-item">Ukuran Tubuh : `+ data3.UkuranTubuh +` </li>
                                        <li class="list-group-item">Golongan : `+ data3.Golongan +`</li>
                                        <li class="list-group-item">Tipe Kulit : `+ data3.TipeKulit +`</li>
                                        <li class="list-group-item">Warna :
                                            <ul class="warnake-`+a+`">
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        `);
                    }
                });
                
                $.each(data2, function(a,data3){
                    if(data == data3.Nama){
                        $.each(data3.Warna, function(i,data4){
                            $('.warnake-'+a).append(`
                                <li>`+ data4 +`</li>
                            `);
                        });
                    }
                });
            });
        });
    }, 1000);
    };
    
});