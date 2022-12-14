$.getJSON('./API/film.json', function (data){
    $.each(data, function(i,data2){
        $('.kontainer').append(`
            <div class="item mb-5">
                <div class="media">
                    <img class="mr-3 img-fluid post-thumb d-none d-md-flex" src="`+ data2.gambar +`" alt="image">
                    <div class="media-body">
                        <h3 class="title mb-1"><a href="blog-indo.html">`+ data2.judul +`</a></h3>
                        <div class="meta mb-1"><span class="date">Published 2 days ago</span><span class="time">5 min read</span><span class="comment"><a href="#">8 comments</a></span></div>
                        <div class="intro">Dodo Rozak (Vino G. Bastian) hanya ingin menjadi ayah yang baik bagi anaknya, Kartika (Graciella Abigail/Mawar De Jongh), sekalipun kecerdasannya terbatas, bertingkah dan berperilaku seperti anak-anak. Pada kenyataannya, Kartika yang lebih sering menjaga dan merawat ayahnya. Keduanya hidup bahagia. Kartika bangga pada ayahnya yang berjualan balon sehari-harinya. Tapi, kebahagiaan mereka tidak berlangsung lama. Dodo ditangkap atas tuduhan memperkosa dan membunuh seorang gadis kecil. Dodo dimasukkan ke penjara, ke sel No.7 yang dihuni napi-napi beringas. Setelah berbagai peristiwa, Dodo berhasil mendapatkan bantuan untuk menyelundupkan Kartika ke dalam selnya. Kedekatan Dodo dan Kartika menularkan kebahagiaan bagi napi dan sipir di penjara. Mereka mulai ragu apakah pria penyayang seperti Dodo, tega membunuh seorang gadis kecil.</div>
                    </div><!--//media-body-->
                </div><!--//media-->
            </div><!--//item-->
        `);
    });
});