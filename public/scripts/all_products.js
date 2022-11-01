function deleteItem(d) {
  var id = d.getAttribute("product_id")
  var urlCall = "/products/deleteproduct/" + id
  $.ajax({
    url: urlCall,
    type: 'DELETE',
    success: function (result) {
      window.location.href = "/products";
    }
  });
}

function openForm(d) {
  let all_popups = document.getElementsByClassName('form-popup')
  for (var i = 0; i < all_popups.length; i++) {
    all_popups[i].style.display = "none"
  }
  d.parentElement.getElementsByClassName("form-popup")[0].style.display = "block"
}

function openFormadd() {
  document.getElementsByClassName("form-popup-add")[0].style.display = "block"
}
function closeFormAdd() {
  document.getElementsByClassName("form-popup-add")[0].style.display = "none"
}


function additem(d) {
  var urlCall = "/products/add_product/"
  var description = document.getElementsByName('description_add')[0].value
  var size = document.getElementsByName('size_add')[0].value
  var name = document.getElementsByName('name_add')[0].value
  var type = document.getElementsByName('type_add')[0].value
  var price = document.getElementsByName('price_add')[0].value
  var preview_img = document.getElementsByName('preview_img_add')[0].value
  var hover_img = document.getElementsByName('hover_img_add')[0].value
  var color = document.getElementsByName('color_add')[0].value
  var data = {
    "name": name,
    "description": description,
    "size": size,
    "type": type,
    "price": price,
    "hover_img": hover_img,
    "preview_img": preview_img,
    "color": color
  }
  $.ajax({
    url: urlCall,
    type: 'POST',
    data: data,
    success: function (result) {
      window.location.href = "/products";
    }
  });
  closeFormAdd();
}
function edititem(d) {
  var id = d.getAttribute("product_id")
  var index = d.getAttribute("index")
  console.log(index)
  var urlCall = "/products/updateproduct/" + id

  var description = document.getElementsByName('description')[index].value
  var size = document.getElementsByName('size')[index].value
  var name = document.getElementsByName('name')[index].value
  var type = document.getElementsByName('type')[index].value
  var price = document.getElementsByName('price')[index].value
  var data = {
    "name": name,
    "description": description,
    "size": size,
    "type": type,
    "price": price
  }
  $.ajax({
    url: urlCall,
    type: 'PUT',
    data: data,
    success: function (result) {
      window.location.href = "/products";
    }
  });
}
function closeForm(d) {
  let all_popups = document.getElementsByClassName('form-popup')
  for (var i = 0; i < all_popups.length; i++) {
    all_popups[i].style.display = "none"
  }
}
function presentproduct(d) {
  var id = d.getAttribute("product_id")
  window.location.href = "/single-product?id=" + id;
}