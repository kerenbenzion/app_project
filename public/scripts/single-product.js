$('.nav-item a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

//On Page Load
$(() => {
  $.ajax({
    url: '/info/single-product' + window.location.search
  }).done(function (res) {
    let img_template = $('#imgs_template').html();
    let product_info_template = $('#product_info_template').html();
    let size_template = $('#size_template').html();


    product_info_template
    for (const key in res) {
      const replaceThat = '{' + key + '}';
      let replaceWith = res[key];
      img_template = img_template.replaceAll(replaceThat, replaceWith);
      product_info_template = product_info_template.replaceAll(replaceThat, replaceWith);
      size_template = size_template.replaceAll(replaceThat, replaceWith);
      if (key == 'size') {
        for (let index = 0; index < res[key].length; index++) {
          let size_option_template = $('#size_option_template').html();
          const newReplaceWith = replaceWith[index];
          size_option_template = size_option_template.replaceAll(replaceThat, newReplaceWith);
          $('#size_option').append(size_option_template);
        }
      }
      if (key == 'color') {
        for (let index = 0; index < res[key].length; index++) {
          let color_option_template = $('#color_option_template').html();
          const newReplaceWith = replaceWith[index];
          color_option_template = color_option_template.replaceAll(replaceThat, newReplaceWith);
          $('#color_option').append(color_option_template);
        }
      }
    }
    $('#myCarousel').append(img_template);
    $('#product_info').append(product_info_template);
    $('#size').append(size_template);

  })
})


