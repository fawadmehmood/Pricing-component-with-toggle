const toggle =  document.querySelector(".toogle");
const circle = document.querySelector(".circle");
const price = document.querySelectorAll(".p_price");
const annualPrices = [119.99, 299.99, 399.99];
const monthlyPrices = [19.99, 29.99, 39.99];

toggle.addEventListener("click", changePrices);
toggle.addEventListener("keyup", function(event){;
        if (event.code === 'Enter') {
                changePrices();
                console.log("hah");
              }
});


function changePrices(){
        circle.classList.toggle("move");
        if(circle.classList.contains("move")){
        Array.from(price).forEach((element, index) => {
                element.innerHTML = monthlyPrices[index];
        });
}
else{
        Array.from(price).forEach((element, index) => {
                element.innerHTML = annualPrices[index];
        });
}
}