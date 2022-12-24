$.getJSON('./API/ramuan_herbal.json', function (data){
    $.each(data, function(i,data2){
        $('.kotak-penyakit').append(`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">`+ data2.nama_penyakit +`</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        `);
    });
});