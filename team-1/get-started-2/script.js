
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

$(".tombol-selesai").click(function(){
    if($(this).hasClass( "nyala" )){
        $('.row-hasil').empty();
        // Jumlah data
        var inginbahan = $('.pilih').attr("bahan");
        // Jumlah data

        $.getJSON('../API/umami.json', function (data){
            $.each(data, function(i,data2){
                $.each(data2.semua_bahan, function(i,data3){
                    if(data3.bahan == inginbahan.toLowerCase()){
                        $('.row-hasil').append(`
                            <li>`+ data2.nama +`</li>
                        `);
                    }
                });
            });
        });
        $.getJSON('../API/royco.json', function (data){
            $.each(data, function(i,data2){
                $.each(data2.semua_bahan, function(i,data3){
                    if(data3.bahan == inginbahan.toLowerCase()){
                        $('.row-hasil').append(`
                            <li>`+ data2.nama +`</li>
                        `);
                    }
                });
            });
        });
    };
});


