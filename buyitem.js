// Wait for the page to load
window.addEventListener("load", function () {
  // Retrieve the username from local storage
  let username = localStorage.getItem("username");

  // Display the username on the page
  var nameElement = document.getElementById("user");
  if (username) {
      nameElement.innerHTML = username;
  } else {
      nameElement.innerHTML = "Guest"; // Provide a default if username is not found
  }

  // Display the current time
  var time = document.getElementById("time");
  let date = new Date();
  time.innerHTML = date;

  // Retrieve and display the number of items bought
  let value = localStorage.getItem('value');
  var items = document.getElementById("items");
  var lengthElement = document.getElementById("itemslength");

  if (value) {
      lengthElement.innerHTML = `You have bought ${value} items`;
  } else {
      lengthElement.innerHTML = "No items bought yet"; // Provide a default if value is not found
  }

  // Display the bill
  const Bill = document.querySelector(".bill");
  let addedItems = localStorage.getItem("Cart");

  if (addedItems) {
      var addedItemArray = JSON.parse(addedItems);
      var totalPrice = 0;

      addedItemArray.forEach((element) => {
          const li = document.createElement("li");
          li.innerHTML = `
          <h3>${element.name}</h3>
          <h5>$${element.price}</h5>
          `;

          totalPrice = totalPrice + Number(element.price);

          console.log(element.name);
          console.log(element.price);

          items.appendChild(li);
      });

      totalPrice = parseInt(Number(totalPrice));

      Bill.innerHTML = `Total Bill: $${totalPrice}`;
  } else {
      Bill.innerHTML = "No items in the cart"; // Provide a default message if Cart is empty
  }
});


const purchase = document.getElementById("purchase");
purchase.addEventListener("click",()=>{
    alert(`Thank you for your order!`);
    const rating = window.prompt("Please rate our service from 1 to 10 (1 = worst, 10 = best):");
    if(rating){
        alert("Thank you for your Feedback")
        localStorage.removeItem("username")
        localStorage.removeItem("pass");
        window.location.href='./login.html'
    }
})




