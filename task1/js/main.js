var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDespription = document.getElementById("productDespription");
var productCount = document.getElementById("productCount");
var productImage = document.getElementById("productImage");
var productContainer;
var ii;
var total
if( localStorage.getItem("ourProducts") != null){
productContainer=JSON.parse( localStorage.getItem("ourProducts"))
display()
}
else{
var productContainer=[];

}
function add() {
  var ch=document.getElementById("addupdate").innerHTML
  
  var product = { 
    name: productName.value,
   price: productPrice.value ,
    category: productCategory.value,
    description: productDespription.value,
    count: productCount.value,  
   
  img: `img/${productImage.files[0].name}` 
  };

if (ch=="Add Product"){
  if(product.name == "" || product.description=="" || product.price=="" || product.category==""|| product.count==""){
   alert("plz fill your info")
  }
  
  else{

    productContainer.push(product)
     localStorage.setItem("ourProducts",JSON.stringify(productContainer) )
    display()
    empty()
}
}
else if (ch=="Update") {
    if(product.name == "" || product.description=="" || product.price=="" || product.category==""|| product.count==""){
   alert("plz fill your info")
  }
  
  else {
    productContainer.splice(ii,1,product)
     localStorage.setItem("ourProducts",JSON.stringify(productContainer) )

    display()
    empty()
document.getElementById("addupdate").innerHTML="Add Product"

}
}
}

function display() {
  var cartoona = ""
  for (var i= 0; i < productContainer.length; i++) {
         cartoona += `<tr>
                    <td>
                    ${i + 1}</td>
                    <td> <img src="${productContainer[i].img}" width="70" /> </td>
                    <td >
                    <p class="badge text-bg-secondary"> 
                    
                    ${productContainer[i].count}
                    </p>
                </td>


                    <td>${productContainer[i].name}</td>
                      <td>

                    ${productContainer[i].price}</td>
                    <td>
                    
                    ${productContainer[i].price * productContainer[i].count}</td>
                    <td>${productContainer[i].category}</td>
                    <td>${productContainer[i].description}</td>
                    <td>
                       
                     <button class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
                    </td>
                    <td>
                    <button class="btn btn-warning" onclick="Update(${i})">Update</button>
                    

                    </td>
                     </tr>`
  }
document.getElementById("tBody").innerHTML=cartoona;

} 
function deleteAll(){
productContainer.splice(0)
     localStorage.setItem("ourProducts",JSON.stringify(productContainer) )

display()
}

function deleteRow(i){
    if (productContainer[i].count > 1){
       productContainer[i].count=productContainer[i].count - 1;

    total = productContainer[i].price * productContainer[i].count
    total-=productContainer[i].price 


    }
    else if (productContainer[i].count== 1){
     productContainer.splice(i ,1)
    }
    
   localStorage.setItem("ourProducts",JSON.stringify(productContainer) )
display()
}
function empty(){
    productName.value = ""
    productPrice.value = ""
    productCategory.value = ""
    productDespription.value = ""
    productCount.value = ""
    productImage.value =""
}

function Update(i){
document.getElementById("addupdate").innerHTML="Update"

 productName.value =productContainer[i].name;
 productPrice.value = productContainer[i].price
 productCategory.value =productContainer[i].category;
 productDespription.value = productContainer[i].description;
 productCount.value = productContainer[i].count;
 productCount.value = productContainer[i].count;
//  `img/${productImage.files[0].name}` =productContainer[i].img

 ii=i

}
