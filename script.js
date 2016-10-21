addListItem("listofproducts", {
  "name": "hamburger",
  "picture": "http://www.skibbereeneagle.ie/web/wpcontent/uploads/2015/08/airkhamburger.jpg",
  "price": })

onNewListItem("listofproducts", function(product) {
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>").attr("src", product.picture)  
  var price = $("<h1 class='product-price'> Price: $" + product.price + "</h1>")
  var rating = $("<h1 class='product-rating'> Rating:" + product.rating + "</h1>")
  var weight = $("<h1 class='product-weight'> Weight:" + product.weight + "</h1>")

  $(".product-list-container").append(nameHeader, image, price, rating, weight);
  console.log(product);
})