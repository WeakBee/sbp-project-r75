let penyakit = [];

$.getJSON('./API/penyakit_kulit.json', function (data){
    // Membuat Kartu
    $.each(data, function(i,data2){
        $.each(data2.gejala_penyakit, function(i,data3){
            penyakit.push(data3.gejala);
        });
    });
    // Membuat Kartu
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

setTimeout(function() {
    let gejalaunik = unique(penyakit);
    let gejalauniksort = gejalaunik.sort();
    $.each(gejalauniksort, function(i,data){
        $('.row-gejala').append(`
        <div class="col-6 kolom-kategori">
            <div class="kartu-kategori kartu-kategori-gejala" gejala="`+ data +`">
                <p>`+ data +`</p>
            </div>
        </div>
        `);
    });
}, 700);

$( ".row" ).delegate( ".kartu-kategori-gejala", "click", function() {
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori-gejala" ).hasClass( "pilih" )){
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
        var ingingejala = [];

        let gejalapenyakit = [];

        let rekomendasi = [];
        let rekomendasi2 = [];

        $(".kartu-kategori-gejala.pilih").each(function(i){
            ingingejala.push($(this).attr("gejala"));
        });
        // Jumlah data

        // GENRE
        $.getJSON('./API/penyakit_kulit.json', function (data){
            $.each(data, function(a,data2){
                $.each(ingingejala, function(a,ingin_gejala){
                    $.each(data2.gejala_penyakit, function(a,data3){
                        if(data3.gejala == ingin_gejala){
                            gejalapenyakit.push(data2.nama_penyakit);
                        }
                    });
                });
            });
        });

        setTimeout(function() {
            let rekomendasi = unique(gejalapenyakit);
            $.each(rekomendasi, function(i,data){
                $.getJSON('./API/penyakit_kulit.json', function (data2){
                    $.each(data2, function(a,data3){
                        if(data === data3.nama_penyakit){
                            $('.row-rekomendasi').append(`
                                <div class="col-lg-4 d-flex justify-content-center px-1 py-3">
                                    <div class="card" style="width: 100%">
                                        <img src="./assets/`+ data3.nama_penyakit +`.jpg" class="gambar-kartu card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">`+ data3.nama_penyakit +`</h5>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Gejala :
                                                <ul class="gejala gejalake-`+ a +`">
                                                </ul>
                                            </li>
                                            <li class="list-group-item">Pengobatan :
                                                <ul class="obat obatke-`+ a +`">
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            `);
                        }
                    });
                    
                    $.each(data2, function(a,data3){
                        if(data == data3.nama_penyakit){
                            $.each(data3.pengobatan, function(i,data4){
                                $('.obatke-'+a).append(`
                                    <li>`+ data4 +`</li>
                                `);
                            });
                        }
                    });
                    $.each(data2, function(a,data3){
                        if(data == data3.nama_penyakit){
                            $.each(data3.gejala_penyakit, function(i,data4){
                                $('.gejalake-'+a).append(`
                                    <li>`+ data4.gejala +`</li>
                                `);
                            });
                        }
                    });
                });
            });
        }, 2000);
    };
});