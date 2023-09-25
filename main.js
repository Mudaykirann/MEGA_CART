window.addEventListener("load", function () {
  let a = localStorage.getItem("username");
  var nameElement = document.getElementById("user");
  nameElement.innerHTML = a;
  var time = document.getElementById("time");
  let date = new Date();
  time.innerHTML = date;
});

const container = document.querySelector(".box-containers")
const ul = document.querySelector(".box")


var arr = []
var val = 0;
function onItemClick(itemData) {
    val++;
    if(val<=4){
      alert(`${val} item is addedd`);
      arr.push({name:`${itemData.name}`,price:`${itemData.price}`});
      localStorage.setItem("Cart",JSON.stringify(arr));
      localStorage.setItem("value",val);
      console.log(`Item clicked: ${itemData.name}`);
    }
    else{
      alert("All Items are Addedd");
    }
}

fetch("./prices.json")
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.items.length; i++) {
            const li = document.createElement('li');
            const heading = document.createElement('h3');
            const img = document.createElement('img');

            const itemData = data.items[i];

            heading.textContent = itemData.name;
            img.src = itemData.img;
            img.alt = itemData.name;

            // Add a click event listener to each li element
            li.addEventListener('click', () => {
                onItemClick(itemData);
            });

            li.appendChild(heading);
            li.appendChild(img);
            ul.appendChild(li);
        }
    })
    .catch((error) => {
        console.error('Error fetching or parsing data:', error);
    });


const btn = document.querySelector("#cart");
btn.onclick= function(){
  window.location.href = './buy-item.html'
}

var logout = document.getElementById("logout")
logout.addEventListener("click",()=>{
  localStorage.removeItem("username")
  localStorage.removeItem("pass");
  window.location.href ="./login.html";
})


