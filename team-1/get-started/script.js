
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
$.getJSON('../API/saus.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-saus').append(`
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
        // Jumlah data
        var inginbahan = [];
        let resepumami = [];
        let reseproyco = [];
        let rekomendasi = [];
        let rekomendasi2 = [];
        let sangatrekomendasi = [];
        let sangatrekomendasi2 = [];
        $(".pilih").each(function(i){
            inginbahan.push($(this).attr("bahan"));
        });

        // Jumlah data

        // UMAMI
        $.getJSON('../API/umami.json', function (data){
            $.each(data, function(a,data2){
                $.each(data2.semua_bahan, function(b,data3){
                    $.each(inginbahan, function(c,ingin_bahan){
                        if(data3.bahan == ingin_bahan.toLowerCase()){
                            resepumami.push(data2.nama);
                        }
                    });
                });
            });
        });
        setTimeout(function() {
            rekomendasi = resepumami.slice();
            // AND
            for (let i = 0; i < resepumami.length; i++) {
                if(resepumami.length == 1){
                    sangatrekomendasi.push(resepumami[i]);
                }
                if(resepumami[i] == resepumami[i-1]){
                    sangatrekomendasi.push(resepumami[i]);
                }
            }
            // AND
        }, 500);
        setTimeout(function() {
            let uniksangatrekomendasi = unique(sangatrekomendasi);
            let unikrekomendasi = unique(rekomendasi);

            $.each(uniksangatrekomendasi, function(i,data){
                $.getJSON('../API/umami.json', function (data2){
                    // Membuat Kartu
                    $.each(data2, function(i,data3){
                        if(data == data3.nama){
                            $('.sangat-rekomendasi').append(`
                            <div class="col-lg-4">
                                <div class="list-resep">
                                    <div class="d-flex align-items-center">
                                        <img class="foto-makanan" src="../assets/umami/`+ data3.nama +`.webp">
                                        <div> 
                                            <p class="fw-bold">`+ data3.nama +`</p>
                                            <p>Umami</p>
                                        </div>
                                    </div>
                                    <div class="my-3">
                                        <p class="mb-3 fw-bold">Bahan Masakan :</p>
                                        <ul class="semua-bahan resep-umami-sr-`+ i +`">
                                        </ul>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <button class="mulai-masak" pemilik="umami" resepke="`+ i +`">
                                            Mulai Masak
                                            <img src="../assets/icon/fire.svg">
                                        </button>
                                        <img src="../assets/icon/Time.svg">
                                        <span class="waktu-masak">15 Menit</span>
                                    </div>
                                </div>
                            </div>
                            `);
                        }
                    });
                    // Membuat Kartu
                    // Menambah bahan
                    $.each(data2, function(a,data3){
                        if(data == data3.nama){
                            $.each(data3.semua_bahan, function(i,data4){
                                $('.resep-umami-sr-'+a).append(`
                                    <li>`+ data4.bahan +` `+ data4.jumlah +` `+ data4.satuan +`</li>
                                `);
                            });
                        }
                    });
                    // Menambah bahan
                });
            });
            $.each(unikrekomendasi, function(i,data){
                $.getJSON('../API/umami.json', function (data2){
                    // Membuat Kartu
                    $.each(data2, function(i,data3){
                        if(data == data3.nama){
                            $('.rekomendasi').append(`
                            <div class="col-lg-4">
                                <div class="list-resep">
                                    <div class="d-flex align-items-center">
                                        <img class="foto-makanan" src="../assets/umami/`+ data3.nama +`.webp">
                                        <div> 
                                            <p class="fw-bold">`+ data3.nama +`</p>
                                            <p>Umami</p>
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
                                        <span class="waktu-masak">15 Menit</span>
                                    </div>
                                </div>
                            </div>
                            `);
                        }
                    });
                    // Membuat Kartu
                    // Menambah bahan
                    $.each(data2, function(a,data3){
                        if(data == data3.nama){
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
        }, 1000);
        // UMAMI

        // ROYCO
        $.getJSON('../API/royco.json', function (data){
            $.each(data, function(a,data2){
                $.each(data2.semua_bahan, function(b,data3){
                    $.each(inginbahan, function(c,ingin_bahan){
                        if(data3.bahan == ingin_bahan.toLowerCase()){
                            reseproyco.push(data2.nama);
                        }
                    });
                });
            });
        });

        setTimeout(function() {
            rekomendasi2 = reseproyco.slice();
            // AND
            for (let i = 0; i < reseproyco.length; i++) {
                if(reseproyco.length == 1){
                    sangatrekomendasi2.push(reseproyco[i]);
                }
                if(reseproyco[i] == reseproyco[i-1]){
                    sangatrekomendasi2.push(reseproyco[i]);
                }
            }
            // AND
        }, 500);
        setTimeout(function() {
            let uniksangatrekomendasi = unique(sangatrekomendasi2);
            let unikrekomendasi = unique(rekomendasi2);
            
            $.each(uniksangatrekomendasi, function(i,data){
                $.getJSON('../API/royco.json', function (data2){
                    // Membuat Kartu
                    $.each(data2, function(i,data3){
                        if(data == data3.nama){
                            $('.sangat-rekomendasi').append(`
                            <div class="col-lg-4">
                                <div class="list-resep">
                                    <div class="d-flex align-items-center">
                                        <img class="foto-makanan" src="../assets/royco/`+ data3.nama +`.webp">
                                        <div> 
                                            <p class="fw-bold">`+ data3.nama +`</p>
                                            <p>Royco</p>
                                        </div>
                                    </div>
                                    <div class="my-3">
                                        <p class="mb-3 fw-bold">Bahan Masakan :</p>
                                        <ul class="semua-bahan resep-royco-sr-`+ i +`">
                                        </ul>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <button class="mulai-masak" pemilik="royco" resepke="`+ i +`">
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
                        if(data == data3.nama){
                            $.each(data3.semua_bahan, function(i,data4){
                                $('.resep-royco-sr-'+a).append(`
                                    <li>`+ data4.bahan +` `+ data4.jumlah +` `+ data4.satuan +`</li>
                                `);
                            });
                        }
                    });
                    // Menambah bahan
                });
            });
            $.each(unikrekomendasi, function(i,data){
                $.getJSON('../API/royco.json', function (data2){
                    // Membuat Kartu
                    $.each(data2, function(i,data3){
                        if(data == data3.nama){
                            $('.rekomendasi').append(`
                            <div class="col-lg-4">
                                <div class="list-resep">
                                    <div class="d-flex align-items-center">
                                        <img class="foto-makanan" src="../assets/royco/`+ data3.nama +`.webp">
                                        <div> 
                                            <p class="fw-bold">`+ data3.nama +`</p>
                                            <p>Royco</p>
                                        </div>
                                    </div>
                                    <div class="my-3">
                                        <p class="mb-3 fw-bold">Bahan Masakan :</p>
                                        <ul class="semua-bahan resep-royco-r-`+ i +`">
                                        </ul>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <button class="mulai-masak" pemilik="royco" resepke="`+ i +`">
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
                        if(data == data3.nama){
                            $.each(data3.semua_bahan, function(i,data4){
                                $('.resep-royco-r-'+a).append(`
                                    <li>`+ data4.bahan +` `+ data4.jumlah +` `+ data4.satuan +`</li>
                                `);
                            });
                        }
                    });
                    // Menambah bahan
                });
            });
        }, 1000);
        // ROYCO
    };
});

$( "body" ).delegate( ".mulai-masak", "click", function() {
    $('.judul-deskripsi').empty();
    $('.cara-masak-popup').empty();
    $('.keteranganresep').empty();
    $('.deskripsi-resep-kotak-list').empty();

    $("#popup").css("display", "flex");

    let pemilik = $(this).attr("pemilik");
    let resepke = $(this).attr("resepke");
    
    if (pemilik == "royco"){
        $.getJSON('../API/royco.json', function (data){
            $.each(data, function(i,data2){
                if(resepke == i){
                    $('.judul-deskripsi').append(data2.nama);
                    $('.keteranganresep').append(data2.deskripsi);
                    $(".gambar-resep").attr("src",`../assets/royco/`+ data2.nama +`.webp`);
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
    } else if (pemilik == "umami"){
        $.getJSON('../API/umami.json', function (data){
            $.each(data, function(i,data2){
                if(resepke == i){
                    $('.judul-deskripsi').append(data2.nama);
                    $('.keteranganresep').append(data2.deskripsi);
                    $(".gambar-resep").attr("src",`../assets/umami/`+ data2.nama +`.webp`);
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
    }
});

$( ".close-popup" ).click(function() {
    $( "#popup" ).hide();
});
