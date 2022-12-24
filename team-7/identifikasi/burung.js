
$.getJSON('../API/paruh.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-paruh').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-paruh" paruh="`+ data.Paruh +`">
            <p>`+ data.Paruh +`</p>
            </div>
        </div>
        `);
    });
});

$.getJSON('../API/makanan.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-makanan').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-makanan" makanan="`+ data.Makanan +`">
            <p>`+ data.Makanan +`</p>
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
            <div class="kartu-kategori kartu-kategori-warna" warna="`+ data.Warna +`">
            <p>`+ data.Warna +`</p>
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
        var inginmakanan = [];
        var inginwarna= [];
        var inginparuh= [];

        let hewanmakanan = [];
        let hewanwarna = [];
        let hewanparuh = [];

        let allhewan = [];
        let rekomendasi = [];
        let rekomendasi2 = [];

        $(".kartu-kategori-makanan.pilih").each(function(i){
            inginmakanan.push($(this).attr("makanan"));
        });
        $(".kartu-kategori-warna.pilih").each(function(i){
            inginwarna.push($(this).attr("warna"));
        });
        $(".kartu-kategori-paruh.pilih").each(function(i){
            inginparuh.push($(this).attr("paruh"));
        });
        // Jumlah data

        // golongan
        $.getJSON('../API/burung.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginmakanan, function(a,ingin_makanan){
                    if(data2.Makanan == ingin_makanan){
                        hewanmakanan.push(data2.Nama);
                    }
                });
            });
        });
        // golongan


        // warna
        $.getJSON('../API/burung.json', function (data){
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

       //Paruh
       $.getJSON('../API/burung.json', function (data){
        $.each(data, function(a,data2){
            $.each(inginparuh, function(a,ingin_paruh){
                $.each(data2.BentukParuh, function(a,data3){
                    if(data3 == ingin_paruh){
                        hewanparuh.push(data2.Nama);
                    }
                });
            });
        });
    });

        setTimeout(function() {
            $.each(hewanmakanan, function(i,data){
                allhewan.push(data);
            });
            $.each(hewanparuh, function(i,data){
                allhewan.push(data);
            });
            $.each(hewanwarna, function(i,data){
                allhewan.push(data);
            });

            let rekomendasi = allhewan.sort();
            let rekomendasi2 = unique(rekomendasi);
            $.each(rekomendasi2, function(i,data){
                $.getJSON('../API/burung.json', function (data2){
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
                                            <li class="list-group-item">Ukuran Tubuh : `+ data3.UkuranTubuh +` </li>
                                            <li class="list-group-item">Makanan : `+ data3.Makanan +`</li>
                                            <li class="list-group-item">Bentuk Paruh : `+ data3.BentukParuh +`</li>
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
        }, 200);
    };
});