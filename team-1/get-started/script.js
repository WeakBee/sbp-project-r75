const values = [];

$(".kartu-kategori").click(function(){
    $(this).toggleClass("pilih");
    if($( ".kartu-kategori" ).hasClass( "pilih" )){
        $( ".tombol-selesai" ).addClass("nyala");
    } else{
        $( ".tombol-selesai" ).removeClass("nyala")
    }
});

$(".tombol-selesai").click(function(){
    if($(this).hasClass( "nyala" )){
        const values = [];
        $('.pilih').each(function(){
            values.push($(this).attr("kategori"));
        });
        
        $.getJSON('../API/umami.json', function (data){
            // Jumlah data
            var inginbahan = "air";
            var inginbahan2 = "bawang merah";
            // Jumlah data
        
            // $.each(data, function(i,data2){
            //     $.each(data2.semua_bahan, function(i,data3){
            //         if(data3.bahan == inginbahan.toLowerCase()){
            //             console.log(data2.nama);
            //         }
            //     });
            // });
        
            $.each(data, function(i,data2){
                const multipleExist = values.every(value => {
                    return data2.jenis.includes(value);
                });
                if (multipleExist){
                    console.log(data2.nama);
                }
            });
        });
        
        $.getJSON('../API/royco.json', function (data){
            $.each(data, function(i,data2){
                const multipleExist2 = values.every(value2 => {
                    return data2.jenis.includes(value2);
                });
                if (multipleExist2){
                    console.log(data2.nama);
                }
            });
        });
    };
});

