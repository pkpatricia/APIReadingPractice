var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

/* fetch("https://api.bestbuy.com/v1/products(customerTopRated=true&categoryPath.id in(abcat0205004))?apiKey={{apiKey}}&format=json&pageSize=10&show=sku,name,image,salePrice,customerTopRated&sort=bestSellingRank", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error)); */

  fetch("http://localhost:8080/api/employees", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error));

