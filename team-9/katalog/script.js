$.getJSON('../API/genre.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data){
        $('.row-genre').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-genre" genre="`+ data.nama +`">
                <p>`+ data.nama +`</p>
            </div>
        </div>
        `);
    });
    // Membuat Kartu
});

$( ".kartu-kategori-durasi" ).click(function() {
    $(".kartu-kategori-durasi").removeClass("pilih");
    $(this).toggleClass("pilih");
    
    if($( ".kartu-kategori-tahun" ).hasClass( "pilih" ) && $( ".kartu-kategori-durasi" ).hasClass( "pilih" ) && $( ".kartu-kategori-genre" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});

$( ".row" ).delegate( ".kartu-kategori-genre", "click", function() {
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-tahun" ).hasClass( "pilih" ) && $( ".kartu-kategori-durasi" ).hasClass( "pilih" ) && $( ".kartu-kategori-genre" ).hasClass( "pilih" )){
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

let tahun = [];

$.getJSON('../API/film.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        tahun.push(data2.tahun);
    });
    // Membuat Kartu
});

setTimeout(function() {
    let tahunfilter = unique(tahun);
    let tahunfiltersort = tahunfilter.sort();

    $.each(tahunfiltersort, function(i,data){
        $('.row-tahun').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-tahun" tahun="`+ data +`">
                <p>`+ data +`</p>
            </div>
        </div>
        `);
    });
}, 500);

$( ".row" ).delegate( ".kartu-kategori-tahun", "click", function() {
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-tahun" ).hasClass( "pilih" ) && $( ".kartu-kategori-durasi" ).hasClass( "pilih" ) && $( ".kartu-kategori-genre" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});


$(".tombol-selesai").click(function(){
    $('.row-rekomendasi').empty();
    if($(this).hasClass( "nyala" )){
        $('.list-rekomendasi').empty();
        // Jumlah data
        var ingingenre = [];
        var ingindurasi = [];
        var ingintahun = [];

        let filmgenre = [];
        let filmdurasi = [];
        let filmtahun = [];

        let allfilm = [];
        let rekomendasi = [];
        let rekomendasi2 = [];

        $(".kartu-kategori-genre.pilih").each(function(i){
            ingingenre.push($(this).attr("genre"));
        });
        $(".kartu-kategori-durasi.pilih").each(function(i){
            ingindurasi.push($(this).attr("durasi"));
        });
        $(".kartu-kategori-tahun.pilih").each(function(i){
            ingintahun.push($(this).attr("tahun"));
        });
        // Jumlah data

        // GENRE
        $.getJSON('../API/film.json', function (data){
            $.each(data, function(a,data2){
                $.each(ingingenre, function(a,ingin_genre){
                    $.each(data2.genre, function(a,data3){
                        if(data3 == ingin_genre){
                            filmgenre.push(data2.judul);
                        }
                    });
                });
            });
        });
        $.getJSON('../API/film.json', function (data){
            $.each(data, function(a,data2){
                $.each(ingindurasi, function(a,ingin_durasi){
                    if("kurangdari90" == ingin_durasi){
                        if(data2.durasi <= 90){
                            filmdurasi.push(data2.judul);
                        }
                    } else if("kurangdari120" == ingin_durasi){
                        if(data2.durasi <= 120){
                            filmdurasi.push(data2.judul);
                        }
                    } else if("kurangdari150" == ingin_durasi){
                        if(data2.durasi <= 150){
                            filmdurasi.push(data2.judul);
                        }
                    } else if("lebihdari150" == ingin_durasi){
                        if(data2.durasi >= 150){
                            filmdurasi.push(data2.judul);
                        }
                    }
                });
            });
        });
        $.getJSON('../API/film.json', function (data){
            $.each(data, function(a,data2){
                $.each(ingintahun, function(a,ingin_tahun){
                    if(data2.tahun == ingin_tahun){
                        filmtahun.push(data2.judul);
                    }
                });
            });
        });

        setTimeout(function() {
            $.each(filmgenre, function(i,data){
                allfilm.push(data);
            });
            $.each(filmdurasi, function(i,data){
                allfilm.push(data);
            });
            $.each(filmtahun, function(i,data){
                allfilm.push(data);
            });

            let allfilmsort = allfilm.sort();
            for (let i = 0; i < allfilmsort.length; i++) {
                if(allfilmsort[i] == allfilmsort[i-1]){
                    rekomendasi.push(allfilmsort[i]);
                }
            }
            for (let i = 0; i < rekomendasi.length; i++) {
                if(rekomendasi[i] == rekomendasi[i-1]){
                    rekomendasi2.push(rekomendasi[i]);
                }
            }
            
            console.log(rekomendasi2);
        }, 200);

        setTimeout(function() {
            let rekomendasi3 = unique(rekomendasi2);
            $.each(rekomendasi3, function(i,data){
                $.getJSON('../API/film.json', function (data2){
                    $.each(data2, function(a,data3){
                        if(data === data3.judul){
                            $('.row-rekomendasi').append(`
                                <div class="col-4 d-flex justify-content-center px-1 py-3">
                                    <div class="card" style="width: 100%">
                                        <img src="../`+ data3.gambar +`" class="gambar-kartu card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">`+ data3.judul +`</h5>
                                            <h6 class="card-subtitle">`+ data3.durasi +` menit</h6>
                                            <p class="card-text">`+ data3.sinopsis +`</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Produser : `+ data3.produser +` </li>
                                            <li class="list-group-item">Sutradata : `+ data3.sutradara +`</li>
                                            <li class="list-group-item">Penulis : `+ data3.penulis +`</li>
                                            <li class="list-group-item">Pemain :
                                                <ul class="pemainfilmke-`+a+`">
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            `);
                        }
                    });
                    
                    $.each(data2, function(a,data3){
                        if(data == data3.judul){
                            $.each(data3.pemain, function(i,data4){
                                $('.pemainfilmke-'+a).append(`
                                    <li>`+ data4 +`</li>
                                `);
                            });
                        }
                    });
                });
            });
        }, 300);
    };
});