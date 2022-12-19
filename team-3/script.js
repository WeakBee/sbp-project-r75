$.getJSON('API/apple.json', function(data) {
    $.each(data, function(i, d){
        console.log(data);
        $('#apple-list').append('<div class="card" style="width: 18rem;"><img src="./assets/xiaomi/xiaomi-redmi-note-12-pro-plus.jpg" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ d.Brand +'</h5><p class="card-text">'+ d.Tahun +'</p><a href="#" class="btn btn-primary">Lihat Selengkapnya</a></div></div>')
    });
});