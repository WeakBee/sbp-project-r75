// Unique
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
// Unique

let processorr = [];
let graphic = [];
let ram = [];

$.getJSON('../API/laptop.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        processorr.push(data2.processor);
    });
    // Membuat Kartu
});
$.getJSON('../API/laptop.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        graphic.push(data2.graphic_card);
    });
    // Membuat Kartu
});
$.getJSON('../API/laptop.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        ram.push(data2.ram);
    });
    // Membuat Kartu
});

setTimeout(function() {
    let processorfilter = unique(processorr);
    let processorfiltersort = processorfilter.sort();
    $.each(processorfiltersort, function(i,data){
        $('.row-processor').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-processor" processor="`+ data +`">
                <p>`+ data +`</p>
            </div>
        </div>
        `);
    });

    let graphicfilter = unique(graphic);
    let graphicfiltersort = graphicfilter.sort();
    $.each(graphicfiltersort, function(i,data){
        $('.row-graphiccard').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-graphic" graphic="`+ data +`">
                <p>`+ data +`</p>
            </div>
        </div>
        `);
    });

    let ramfilter = unique(ram);
    let ramfiltersort = ramfilter.sort();
    $.each(ramfiltersort, function(i,data){
        $('.row-ram').append(`
        <div class="col-4 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-ram" ram="`+ data +`">
                <p>`+ data +`</p>
            </div>
        </div>
        `);
    });
}, 1000);

$( ".kartu-kategori-merk" ).click(function() {
    $(".kartu-kategori-merk").removeClass("pilih");
    $(this).toggleClass("pilih");
    
    if($( ".kartu-kategori-merk" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});

$( ".kartu-kategori-harga" ).click(function() {
    $(".kartu-kategori-harga").removeClass("pilih");
    $(this).toggleClass("pilih");
    
    if($( ".kartu-kategori-harga" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});

$( ".row" ).delegate( ".kartu-kategori-processor", "click", function() {
    $(".kartu-kategori-processor").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-processor" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});

$( ".row" ).delegate( ".kartu-kategori-graphic", "click", function() {
    $(".kartu-kategori-graphic").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-graphic" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});

$( ".row" ).delegate( ".kartu-kategori-ram", "click", function() {
    $(".kartu-kategori-ram").removeClass("pilih");
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-ram" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});


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
        var inginmerk = [];
        var inginharga = [];
        var inginprocessor = [];
        var ingingraphic = [];
        var inginram = [];

        let hasilmerk = [];
        let hasilharga = [];
        let hasilprocessor = [];
        let hasilgraphic = [];
        let hasilram = [];
        
        let alllaptop = [];
        let rekomendasi = [];
        let rekomendasi2 = [];

        $(".kartu-kategori-merk.pilih").each(function(i){
            inginmerk.push($(this).attr("merk"));
        });
        $(".kartu-kategori-harga.pilih").each(function(i){
            inginharga.push($(this).attr("harga"));
        });
        $(".kartu-kategori-processor.pilih").each(function(i){
            inginprocessor.push($(this).attr("processor"));
        });
        $(".kartu-kategori-graphic.pilih").each(function(i){
            ingingraphic.push($(this).attr("graphic"));
        });
        $(".kartu-kategori-ram.pilih").each(function(i){
            inginram.push($(this).attr("ram"));
        });
        // Jumlah data
        
        // GENRE
        $.getJSON('../API/laptop.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginmerk, function(a,datas){
                    if(data2.merk == datas){
                        hasilmerk.push(data2.nama);
                    }
                });
            });
        });
        $.getJSON('../API/laptop.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginharga, function(a,datas){
                    if("dibawah10" == datas){
                        if(data2.harga <= 10000000){
                            hasilharga.push(data2.nama);
                        }
                    } else if("dibawah15" == datas){
                        if(data2.harga <= 15000000){
                            hasilharga.push(data2.nama);
                        }
                    } else if("diatas15" == datas){
                        if(data2.harga > 15000000){
                            hasilharga.push(data2.nama);
                        }
                    }
                });
            });
        });
        $.getJSON('../API/laptop.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginprocessor, function(a,datas){
                    $.each(data2.processor, function(a,data3){
                        if(data3 == datas){
                            hasilprocessor.push(data2.nama);
                        }
                    });
                });
            });
        });
        $.getJSON('../API/laptop.json', function (data){
            $.each(data, function(a,data2){
                $.each(ingingraphic, function(a,datas){
                    $.each(data2.graphic_card, function(a,data3){
                        if(data3 == datas){
                            hasilgraphic.push(data2.nama);
                        }
                    });
                });
            });
        });
        $.getJSON('../API/laptop.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginram, function(a,datas){
                    $.each(data2.ram, function(a,data3){
                        if(data3 == datas){
                            hasilram.push(data2.nama);
                        }
                    });
                });
            });
        });

        setTimeout(function() {
            $.each(hasilmerk, function(i,data){
                alllaptop.push(data);
            });
            $.each(hasilharga, function(i,data){
                alllaptop.push(data);
            });
            $.each(hasilprocessor, function(i,data){
                alllaptop.push(data);
            });
            $.each(hasilgraphic, function(i,data){
                alllaptop.push(data);
            });
            $.each(hasilram, function(i,data){
                alllaptop.push(data);
            });

            let alllaptopsort = alllaptop.sort();
            console.log(alllaptopsort);
            for (let i = 0; i < alllaptopsort.length; i++) {
                if(alllaptopsort[i] == alllaptopsort[i-1]){
                    rekomendasi.push(alllaptopsort[i]);
                }
            }
        }, 1000);

        setTimeout(function() {
            let rekomendasi2 = unique(rekomendasi);
            console.log(rekomendasi2);
            $.each(rekomendasi2, function(i,data){
                $.getJSON('../API/laptop.json', function (data2){
                    $.each(data2, function(a,data3){
                        if(data === data3.nama){
                            $('.row-rekomendasi').append(`
                                <div class="col-lg-4 d-flex justify-content-center px-1 py-3">
                                    <div class="card" style="width: 100%">
                                        <img src="../assets/img/`+ data3.merk +`/`+ data3.nama +`.jpeg" class="gambar-kartu card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">`+ data3.nama +`</h5>
                                            <h6 class="card-subtitle">`+ data3.merk +`</h6>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Harga : Rp.`+ data3.harga +` </li>
                                            <li class="list-group-item">Layar : `+ data3.layar +`</li>
                                            <li class="list-group-item">Processor : `+ data3.processor +`</li>
                                            <li class="list-group-item">Graphic Card : `+ data3.graphic_card +`</li>
                                            <li class="list-group-item">RAM : `+ data3.ram +`</li>
                                            <li class="list-group-item">Storage : `+ data3.storage +`</li>
                                            <li class="list-group-item">Baterai : `+ data3.baterai +`</li>
                                            <li class="list-group-item">Kamera : `+ data3.kamera +`</li>
                                            <li class="list-group-item">Optical Drive : `+ data3.optical_drive +`</li>
                                            <li class="list-group-item">Konektivitas : `+ data3.konektivitas +`</li>
                                            <li class="list-group-item">Port : `+ data3.port +`</li>
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