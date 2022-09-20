function deleteItem(d){
  console.log(d.getAttribute("product_id"))
  var id =d.getAttribute("product_id")
  var urlCall="/products/deleteproduct/"+id
  console.log(urlCall)
  // $.ajax({
  //   url: urlCall + $.param({"id": Id}),
  //   type: 'DELETE'
    
  // })
  $.ajax({
    url: urlCall,
    type: 'DELETE',
    success: function (result) {
      window.location.href = "/products";
    }
  });
}