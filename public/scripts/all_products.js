function deleteItem(d){
  var id =d.getAttribute("product_id")
  var urlCall="/products/deleteproduct/"+id
  $.ajax({
    url: urlCall,
    type: 'DELETE',
    success: function (result) {
      window.location.href = "/products";
    }
  });
}