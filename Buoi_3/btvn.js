let productList = [
    {
        "name": "T-Shirt",
        "img": "Images/T-Shirt.jpg", // Adjusted path
        "price": 150000
    },
    {
        "name": "Shirt",
        "img": "Images/Shirt.jpg", // Adjusted path
        "price": 200000
    },
    {
        "name": "Socks",
        "img": "Images/Socks.jpg", // Adjusted path
        "price": 30000
    }
];

let productListLength = productList.length;

let productListHTML = document.querySelector(".productList");

for (let i = 0; i < productListLength; i++) {
    let li = document.createElement("li");
    li.innerHTML = `
        <h2>${productList[i].name}</h2>
        <img src="${productList[i].img}" style="width: 100px; height: auto;">
        <p>Price: ${productList[i].price} VND</p>
    `;
    productListHTML.append(li);
}
