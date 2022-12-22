$.getJSON('../API/brand.json', function (data) {
    $.each(data, function(i,data){
        $('.pilih-brand').append(`
        <div class="col">
                <h4>`+data.brand+`</h4>
            </div>
        `);
    });
});


$.getJSON('../API/ram.json', function (data) {
    $.each(data, function(i,data){
        $('.pilih-ram').append(`
        <div class="col">
                <h4>`+data.RAM+`</h4>
            </div>
        `);
    });
});

$.getJSON('../API/harga.json', function (data) {
    $.each(data, function(i,data){
        $('.budget').append(`
        <div class="col">
                <h4>`+data.harga+`</h4>
            </div>
        `);
    });
});


