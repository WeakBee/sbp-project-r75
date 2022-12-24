$.getJSON('./API/film.json', function (data){
    $.each(data, function(i,data2){
        $('.rekomendasi').append(`
        <div class="item mb-5">
					<div class="media">
						<img class="mr-3 img-fluid post-thumb d-none d-md-flex" src="`+ data2.gambar +`" alt="image">
						<div class="media-body">
							<h3 class="title mb-1">`+ data2.judul +`</a></h3>
							<p>`+ data2.tahun +`</p>
							<div class="intro">`+ data2.sinopsis +`</div>
							<p>`+ data2.durasi +`</p>
						</div><!--//media-body-->
					</div><!--//media-->
				</div><!--//item-->	
        `);
    });
});



