
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
        }, 1500);
        setTimeout(function() {
            console.log(unique(sangatrekomendasi));
            console.log(unique(rekomendasi));
            let uniksangatrekomendasi = unique(sangatrekomendasi);
            let unikrekomendasi = unique(rekomendasi);

            $.each(uniksangatrekomendasi, function(i,data){
                $('.sangat-rekomendasi').append(`
                    <li>`+ data +`</li>
                `);
            });
            $.each(unikrekomendasi, function(i,rekomen){
                $('.rekomendasi').append(`
                    <li>`+ rekomen +`</li>
                `);
            });
        }, 2500);
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
        }, 1700);
        setTimeout(function() {
            console.log(unique(sangatrekomendasi2));
            console.log(unique(rekomendasi2));

            let uniksangatrekomendasi = unique(sangatrekomendasi2);
            let unikrekomendasi = unique(rekomendasi2);
            
            $.each(uniksangatrekomendasi, function(i,data){
                $('.sangat-rekomendasi').append(`
                    <li>`+ data +`</li>
                `);
            });
            $.each(unikrekomendasi, function(i,rekomen){
                $('.rekomendasi').append(`
                    <li>`+ rekomen +`</li>
                `);
            });
        }, 2700);
        // ROYCO
    };
});


