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
}, 100);

$( ".row" ).delegate( ".kartu-kategori-tahun", "click", function() {
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-tahun" ).hasClass( "pilih" ) && $( ".kartu-kategori-durasi" ).hasClass( "pilih" ) && $( ".kartu-kategori-genre" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});


$(".tombol-selesai").click(function(){
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
        }, 100);

        setTimeout(function() {
            $.each(rekomendasi2, function(i,data){
                $('.list-rekomendasi').append(`
                    <li>`+ data +`</li>
                `);
            });
        }, 200);
        
    };
});