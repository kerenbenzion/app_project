//On Page Load
var currnet_product;
$(() => {
  $.ajax({
    url: '/info/single-product' + window.location.search
  }).done(function (res) {
    let img_template = $('#imgs_template').html();
    let product_info_template = $('#product_info_template').html();
    let size_template = $('#size_template').html();
    currnet_product = res
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

$('.nav-item a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

function Validate_options() {
  var size_option = document.getElementById("color_option");
  var color_option = document.getElementById("size_option");
  console.log(size_option.value)
  if (size_option.value == "בחירת אפשרות" || color_option.value == "בחירת אפשרות") {
      return false;
  }
  return true;
}

function AddToBasket() {
  var is_valid = Validate_options()
  if (!is_valid){
    alert("בחר צבע ו/או מידה");

  }
  else{
    console.log(currnet_product)
    var id = currnet_product['_id']
    var preview_img = currnet_product['preview_img']
    var price = currnet_product['price']
    var name = currnet_product['name']
    SaveDataToLocalStorage(id, price, preview_img, name)
  }

}

function SaveDataToLocalStorage(id, price, preview_img, name) {
  var a;
  data = id + "&" + price + "&" + preview_img + "&" + name
  console.log(data)
  // Parse the serialized data back into an aray of objects
  if (window.localStorage.getItem('cart') == null) {
    a = []
  } else {
    a = window.localStorage.getItem('cart').split('|')
  }
  // Push the new data (whether it be an object or anything else) onto the array
  a.push(data);
  // Alert the array value
  // Re-serialize the array back into a string and store it in localStorage
  window.localStorage.setItem('cart', a.join('|'));
}
