
$.getJSON('../API/sayuran.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-sayuran').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});
$.getJSON('../API/rempah.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-rempah').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});
$.getJSON('../API/hewan.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-hewan').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});
$.getJSON('../API/buah.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-buah').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});
$.getJSON('../API/minyak.json', function (data){
// Membuat Kartu
    $.each(data, function(i,data){
        $('.row-minyak').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});
$.getJSON('../API/tepung.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-tepung').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});
$.getJSON('../API/nabati.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-nabati').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});
$.getJSON('../API/lainlain.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-lainlain').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});
$.getJSON('../API/penyedap.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-penyedap').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori" bahan="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
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
        $('.sangat-rekomendasi').empty();
        $('.rekomendasi').empty();
        $('.sangat-rekomendasi').append(`
        <div class="loading-circle">
            <div class="loading-inside"></div>
            <div class="circle-inside"></div>
        </div>
        `);
        setTimeout(function() {
            $('.sangat-rekomendasi').empty();
        }, 1400);

        var inginbahan = [];
        let resepall = [];
        let sangatrekomendasi = [];
        $(".pilih").each(function(i){
            inginbahan.push($(this).attr("bahan"));
        });

        $.getJSON('../API/resep.json', function (data){
            $.each(data, function(a,data2){
                $.each(data2.semua_bahan, function(b,data3){
                    $.each(inginbahan, function(c,ingin_bahan){
                        if(data3.bahan == ingin_bahan.toLowerCase()){
                            resepall.push(data2.kode);
                        }
                    });
                });
            });
        });

        setTimeout(function() {
            for (let i = 0; i < resepall.length; i++) {
                if(resepall.length == 1){
                    sangatrekomendasi.push(resepall[i]);
                } else if(resepall[i] == resepall[i-1]){
                    sangatrekomendasi.push(resepall[i]);
                }
            }
        },1000);

        setTimeout(function() {
            let unikrekomendasi = unique(resepall);
            $.each(unikrekomendasi, function(i,data){
                $.getJSON('../API/resep.json', function (data2){
                    // Membuat Kartu
                    $.each(data2, function(i,data3){
                        if(data == data3.kode){
                            $('.rekomendasi').append(`
                            <div class="col-lg-4">
                                <div class="list-resep">
                                    <div class="d-flex align-items-center">
                                        <img class="foto-makanan" src="../assets/`+data3.pemilik+`/`+ data3.nama +`.webp">
                                        <div> 
                                            <p class="fw-bold">`+ data3.nama +`</p>
                                            <p class="pemilik-resep">`+ data3.pemilik +`</p>
                                        </div>
                                    </div>
                                    <div class="my-3">
                                        <p class="mb-3 fw-bold">Bahan Masakan :</p>
                                        <ul class="semua-bahan resep-umami-r-`+ i +`"></ul>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <button class="mulai-masak" pemilik="umami" resepke="`+ i +`">
                                            Mulai Masak
                                            <img src="../assets/icon/fire.svg">
                                        </button>
                                        <img src="../assets/icon/Time.svg">
                                        <span class="waktu-masak">`+ data3.waktu +`</span>
                                    </div>
                                </div>
                            </div>
                            `);
                        }
                    });
                    // Membuat Kartu
                    // Menambah bahan
                    $.each(data2, function(a,data3){
                        if(data == data3.kode){
                            $.each(data3.semua_bahan, function(i,data4){
                                $('.resep-umami-r-'+a).append(`
                                    <li>`+ data4.bahan +` `+ data4.jumlah +` `+ data4.satuan +`</li>
                                `);
                            });
                        }
                    });
                    // Menambah bahan
                });
            });

            let uniksangatrekomendasi = unique(sangatrekomendasi);
            $.each(uniksangatrekomendasi, function(i,data){
                $.getJSON('../API/resep.json', function (data2){
                    // Membuat Kartu
                    $.each(data2, function(i,data3){
                        if(data == data3.kode){
                            $('.sangat-rekomendasi').append(`
                            <div class="col-lg-4">
                                <div class="list-resep">
                                    <div class="d-flex align-items-center">
                                        <img class="foto-makanan" src="../assets/`+data3.pemilik+`/`+ data3.nama +`.webp">
                                        <div> 
                                            <p class="fw-bold">`+ data3.nama +`</p>
                                            <p class="pemilik-resep">`+ data3.pemilik +`</p>
                                        </div>
                                    </div>
                                    <div class="my-3">
                                        <p class="mb-3 fw-bold">Bahan Masakan :</p>
                                        <ul class="semua-bahan resep-umami-r-`+ i +`"></ul>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <button class="mulai-masak" pemilik="umami" resepke="`+ i +`">
                                            Mulai Masak
                                            <img src="../assets/icon/fire.svg">
                                        </button>
                                        <img src="../assets/icon/Time.svg">
                                        <span class="waktu-masak">`+ data3.waktu +`</span>
                                    </div>
                                </div>
                            </div>
                            `);
                        }
                    });
                    // Membuat Kartu
                    // Menambah bahan
                    $.each(data2, function(a,data3){
                        if(data == data3.kode){
                            $.each(data3.semua_bahan, function(i,data4){
                                $('.resep-umami-r-'+a).append(`
                                    <li>`+ data4.bahan +` `+ data4.jumlah +` `+ data4.satuan +`</li>
                                `);
                            });
                        }
                    });
                    // Menambah bahan
                });
            });
        }, 1500);

        
    };
});

$( "body" ).delegate( ".mulai-masak", "click", function() {
    $('.judul-deskripsi').empty();
    $('.cara-masak-popup').empty();
    $('.keteranganresep').empty();
    $('.deskripsi-resep-kotak-list').empty();
    $("#popup").css("display", "flex");
    
    let resepke = $(this).attr("resepke");
    $.getJSON('../API/resep.json', function (data){
        $.each(data, function(i,data2){
            if(resepke == i){
                $('.judul-deskripsi').append(data2.nama);
                $('.keteranganresep').append(data2.deskripsi);
                $(".gambar-resep").attr("src",`../assets/`+ data2.pemilik +`/`+ data2.nama +`.webp`);
                $.each(data2.cara, function(i,data3){
                    $('.cara-masak-popup').append(`
                        <li>`+ data3.resep +`</li>
                    `);
                });
                $.each(data2.semua_bahan, function(i,data3){
                    $('.deskripsi-resep-kotak-list').append(`
                        <li>`+ data3.bahan +` `+ data3.jumlah +` `+ data3.satuan +`</li>
                    `);
                });
            }
        });
    });
});

$( ".close-popup" ).click(function() {
    $( "#popup" ).hide();
});

