// Unique
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
// Unique

let vitamin = [];

$.getJSON('./API/buah.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        $.each(data2.vitamin, function(i,data3){
            vitamin.push(data3);
        });
    });
    // Membuat Kartu
});

setTimeout(function() {
    let vitaminfilter = unique(vitamin);
    let vitaminfiltersort = vitaminfilter.sort();

    $.each(vitaminfiltersort, function(i,data){
        $('.row-vitamin').append(`
        <div class="col-3 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-vitamin" vitamin="`+ data +`">
                <p>`+ data +`</p>
            </div>
        </div>
        `);
    });
}, 500);

$( ".row" ).delegate( ".kartu-kategori-vitamin", "click", function() {
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});
$( ".kartu-kategori-karbohidrat" ).click(function() {
    $(".kartu-kategori-karbohidrat").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});
$( ".kartu-kategori-protein" ).click(function() {
    $(".kartu-kategori-protein").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});
$( ".kartu-kategori-lemak" ).click(function() {
    $(".kartu-kategori-lemak").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});
$( ".kartu-kategori-kalori" ).click(function() {
    $(".kartu-kategori-kalori").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});
$( ".kartu-kategori-gula" ).click(function() {
    $(".kartu-kategori-gula").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});


$(".tombol-selesai").click(function(){
    if($(this).hasClass( "nyala" )){
        $('.row-rekomendasi').empty();

        // Jumlah data
        var inginvitamin = [];
        var inginkarbohidrat = [];
        var inginprotein = [];
        var inginlemak= [];
        var inginkalori= [];
        var ingingula= [];

        let buahvitamin = [];
        let buahkarbohidrat = [];
        let buahprotein = [];
        let buahlemak = [];
        let buahkalori = [];
        let buahgula = [];

        let allbuah = [];
        let rekomendasi = [];
        let rekomendasi2 = [];

        $(".kartu-kategori-vitamin.pilih").each(function(i){
            inginvitamin.push($(this).attr("vitamin"));
        });
        $(".kartu-kategori-karbohidrat.pilih").each(function(i){
            inginkarbohidrat.push($(this).attr("karbohidrat"));
        });
        $(".kartu-kategori-protein.pilih").each(function(i){
            inginprotein.push($(this).attr("protein"));
        });
        $(".kartu-kategori-lemak.pilih").each(function(i){
            inginlemak.push($(this).attr("lemak"));
        });
        $(".kartu-kategori-kalori.pilih").each(function(i){
            inginkalori.push($(this).attr("kalori"));
        });
        $(".kartu-kategori-gula.pilih").each(function(i){
            ingingula.push($(this).attr("gula"));
        });
        // Jumlah data

        // vitamin
        $.getJSON('./API/buah.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginvitamin, function(a,ingin_vitamin){
                    $.each(data2.vitamin, function(a,data3){
                        if(data3 == ingin_vitamin){
                            buahvitamin.push(data2.nama);
                        }
                    });
                });
            });
        });
        console.log(buahvitamin)
        // vitamin

        // karbo
        $.getJSON('./API/buah.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginkarbohidrat, function(a,ingin_karbohidrat){
                    if("rendah" == ingin_karbohidrat){
                        if(data2.karbohidrat <= 20){
                            buahkarbohidrat.push(data2.nama);
                        }
                    } else if("sedang" == ingin_karbohidrat){
                        if(data2.karbohidrat >= 20 && data2.karbohidrat <= 50){
                            buahkarbohidrat.push(data2.nama);
                        }
                    } else if("tinggi" == ingin_karbohidrat){
                        if(data2.karbohidrat > 50){
                            buahkarbohidrat.push(data2.nama);
                        }
                    }
                });
            });
        });
        // karbo

        // protein
        $.getJSON('./API/buah.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginprotein, function(a,ingin_protein){
                    if("rendah" == ingin_protein){
                        if(data2.protein <= 1){
                            buahprotein.push(data2.nama);
                        }
                    } else if("sedang" == ingin_protein){
                        if(data2.protein >= 1 && data2.protein <= 5){
                            buahprotein.push(data2.nama);
                        }
                    } else if("tinggi" == ingin_protein){
                        if(data2.protein > 5){
                            buahprotein.push(data2.nama);
                        }
                    }
                });
            });
        });
        // protein

        // lemak
        $.getJSON('./API/buah.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginlemak, function(a,data3){
                    if("rendah" == data3){
                        if(data2.lemak <= 1){
                            buahlemak.push(data2.nama);
                        }
                    } else if("sedang" == data3){
                        if(data2.lemak >= 1 && data2.lemak <= 5){
                            buahlemak.push(data2.nama);
                        }
                    } else if("tinggi" == data3){
                        if(data2.lemak > 5){
                            buahlemak.push(data2.nama);
                        }
                    }
                });
            });
        });
        // lemak

        // kalori
        $.getJSON('./API/buah.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginkalori, function(a,data3){
                    if("rendah" == data3){
                        if(data2.kalori <= 50){
                            buahkalori.push(data2.nama);
                        }
                    } else if("sedang" == data3){
                        if(data2.kalori >= 50 && data2.kalori <= 100){
                            buahkalori.push(data2.nama);
                        }
                    } else if("tinggi" == data3){
                        if(data2.kalori > 100){
                            buahkalori.push(data2.nama);
                        }
                    }
                });
            });
        });
        // kalori

        // gula
        $.getJSON('./API/buah.json', function (data){
            $.each(data, function(a,data2){
                $.each(ingingula, function(a,data3){
                    if("rendah" == data3){
                        if(data2.gula <= 10){
                            buahgula.push(data2.nama);
                        }
                    } else if("sedang" == data3){
                        if(data2.gula >= 10 && data2.gula <= 15){
                            buahgula.push(data2.nama);
                        }
                    } else if("tinggi" == data3){
                        if(data2.gula > 15){
                            buahgula.push(data2.nama);
                        }
                    }
                });
            });
        });
        // gula

        setTimeout(function() {
            $.each(buahvitamin, function(i,data){
                allbuah.push(data);
            });
            $.each(buahkarbohidrat, function(i,data){
                allbuah.push(data);
            });
            $.each(buahprotein, function(i,data){
                allbuah.push(data);
            });
            $.each(buahlemak, function(i,data){
                allbuah.push(data);
            });
            $.each(buahkalori, function(i,data){
                allbuah.push(data);
            });
            $.each(buahgula, function(i,data){
                allbuah.push(data);
            });

            let rekomendasi = allbuah.sort();
            let rekomendasi2 = unique(rekomendasi);
            $.each(rekomendasi2, function(i,data){
                $.getJSON('./API/buah.json', function (data2){
                    $.each(data2, function(a,data3){
                        if(data === data3.nama){
                            $('.row-rekomendasi').append(`
                                <div class="col-lg-4 d-flex justify-content-center px-1 py-3">
                                    <div class="card" style="width: 100%">
                                        <img src="./assets/`+ data3.nama +`.jpg" class="gambar-kartu card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">`+ data3.nama +`</h5>
                                            <h5 class="card-text">`+ data3.deskripsi +`</h5>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item vitamin">Vitamin :
                                                <ul class="vitaminke-`+a+`">
                                                </ul>
                                            </li>
                                            <li class="list-group-item">Karbohidrat : `+ data3.karbohidrat +`</li>
                                            <li class="list-group-item">Protein : `+ data3.protein +`</li>
                                            <li class="list-group-item">Lemak : `+ data3.lemak +`</li>
                                            <li class="list-group-item">Kalori : `+ data3.kalori +`</li>
                                            <li class="list-group-item">Gula : `+ data3.gula +`</li>
                                        </ul>
                                    </div>
                                </div>
                            `);
                        }
                    });
                    
                    $.each(data2, function(a,data3){
                        if(data == data3.nama){
                            $.each(data3.vitamin, function(i,data4){
                                $('.vitaminke-'+a).append(`
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