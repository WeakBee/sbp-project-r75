let penyakit = [];

$.getJSON('../API/ramuan_herbal.json', function (data){
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
    let penyakitunik = unique(penyakit);
    $.each(penyakitunik, function(i,data){
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
        var inginpenyakit = [];
        let datapenyakit = [];

        $(".kartu-kategori-gejala.pilih").each(function(i){
            inginpenyakit.push($(this).attr("gejala"));
        });
        // Jumlah data

        // GENRE
        $.getJSON('../API/ramuan_herbal.json', function (data){
            $.each(data, function(a,data2){
                $.each(inginpenyakit, function(a,ingin_penyakit){
                    $.each(data2.gejala_penyakit, function(a,data3){
                        if(data3.gejala == ingin_penyakit){
                            datapenyakit.push(data2.nama_penyakit);
                        }
                    });
                });
            });
        });

        setTimeout(function() {
            let rekomendasi = unique(datapenyakit);

            $.each(rekomendasi, function(i,data){
                $.getJSON('../API/ramuan_herbal.json', function (data2){
                    $.each(data2, function(a,data3){
                        if(data === data3.nama_penyakit){
                            $('.row-rekomendasi').append(`
                                <div class="col-lg-12 d-flex justify-content-center px-1 py-3">
                                    <div class="card" style="width: 100%">
                                        <div class="card-body">
                                            <h5 class="card-title">`+ data3.nama_penyakit +`</h5>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Gejala :
                                                <ul class="gejala gejalake-`+ a +`">
                                                </ul>
                                            </li>
                                            <li class="list-group-item">Bahan Pengobatan Ramuan Herbal :
                                                <ul class="obat obatke-`+ a +`">
                                                </ul>
                                            </li>
                                            <li class="list-group-item">Cara Pembuatan Ramuan Herbal :
                                                <ul class="pembuatan pembuatanke-`+ a +`">
                                                </ul>
                                            </li>
                                            <li class="list-group-item">Aturan Pakai Ramuan Herbal :
                                                <ul class="aturan aturanke-`+ a +`">
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
                            $.each(data3.gejala_penyakit, function(i,data4){
                                $('.gejalake-'+a).append(`
                                    <li>`+ data4.gejala +`</li>
                                `);
                            });
                        }
                    });
                    $.each(data2, function(a,data3){
                        if(data == data3.nama_penyakit){
                            $.each(data3.semua_bahan, function(i,data4){
                                $('.obatke-'+a).append(`
                                    <li>`+ data4.bahan +` `+ data4.jumlah +` `+ data4.satuan +`</li>
                                `);
                            });
                        }
                    });
                    $.each(data2, function(a,data3){
                        if(data == data3.nama_penyakit){
                            $.each(data3.cara_pembuatan, function(i,data4){
                                $('.pembuatanke-'+a).append(`
                                    <li>`+ data4.resep +`</li>
                                `);
                            });
                        }
                    });
                    $.each(data2, function(a,data3){
                        if(data == data3.nama_penyakit){
                            $.each(data3.aturan_pakai, function(i,data4){
                                $('.aturanke-'+a).append(`
                                    <li>`+ data4.pemakaian +`</li>
                                `);
                            });
                        }
                    });
                });
            });
        }, 2000);
    };
});