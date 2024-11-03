// let userAge = prompt("Nhập số tuổi: ")

// if (userAge<18) {
//     console.log("Tuổi < 18");
// } 
// else if (userAge==18) {
//     console.log("Tuổi = 18")
// }
// else {
//     console.log("Tuổi > 18")   
// }



document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userAge = document.getElementById("fage").value;

    if (userAge < 18) {
        console.log("Tuổi < 18");
    } 
    else if (userAge == 18) {
        console.log("Tuổi = 18");
    } 
    else {
        console.log("Tuổi > 18");
    }
});




let foodList = [ "Bread", "Pizza", "Pasta", "Noodles", "Lasagna" ]
foodListLength = foodList.length
for (let i = 0; i < foodListLength; i++) {
    (foodList[i]);
}


let foodListHTML = document.querySelector(".foodList")
for (let i = 0; i < foodListLength; i++) {
    let li = document.createElement("li")
    li.innerHTML = foodList[i]
    foodListHTML.appendChild(li)
}

