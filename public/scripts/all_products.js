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

function openForm(d) {
  let all_popups = document.getElementsByClassName('form-popup')
  for(var i = 0;i<all_popups.length;i++){
    all_popups[i].style.display="none"
  }
  d.parentElement.getElementsByClassName("form-popup")[0].style.display = "block"

}
function edititem(d){
  var id =d.getAttribute("product_id")
  var index =d.getAttribute("index")
  console.log(index)
  var urlCall="/products/updateproduct/"+id

  var description=document.getElementsByName('description')[index].value
  var size=document.getElementsByName('size')[index].value
  var name=document.getElementsByName('name')[index].value
  var type=document.getElementsByName('type')[index].value
  var price=document.getElementsByName('price')[index].value
  var data = {
    "name": name,
    "description":description,
    "size":size,
    "type":type,
    "price":price
  }
  $.ajax({
    url: urlCall,
    type: 'PUT',
    data:data,
    success: function (result) {
      window.location.href = "/products";
    }
  });
}
function closeForm(d) {
  let all_popups = document.getElementsByClassName('form-popup')
  for(var i = 0;i<all_popups.length;i++){
    all_popups[i].style.display="none"
  }
}
function presentproduct(d){
  var id =d.getAttribute("product_id")
  window.location.href = "/single-product?id="+id;
}