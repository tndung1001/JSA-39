let foodList = [ "Bread", "Pizza", "Pasta", "Noodles", "Lasagna" ]

let a = foodList.length
console.log(a)

console.log(foodList)
foodList[a-1] = "Cake"
console.log(foodList);

if (foodList.length < 10) {
    alert("Số lượng món ăn không đủ")
} else {
    alert("Số lượng món ăn đã đủ")
}
