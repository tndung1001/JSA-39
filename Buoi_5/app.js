let filmList = []
let inputName = document.querySelector("#name")
let inputURL = document.querySelector("#url")
let inputDate = document.querySelector("#release_date")
let submit = document.querySelector("#submit")
let filmListDOM = document.querySelector(".filmList")

function addFilm(event) {
    event.preventDefault()

    let inputNameValue = inputName.value
    let inputURLValue = inputURL.value
    let inputDateValue = inputDate.value

    if (inputNameValue.trim() && inputURLValue.trim() && inputDateValue.trim()) {
        let filmItem = {
            Name: inputNameValue,
            URL: inputURLValue,
            Date: inputDateValue
        }

        filmList.push(filmItem)
        localStorage.setItem("filmList", JSON.stringify(filmList))
        inputName.value = ''
        inputURL.value = ''
        inputDate.value = ''

        showFilm()

    }
}

function showFilm() {
    let filmListData = JSON.parse(localStorage.getItem("filmList"))
    if (filmListData) {
        filmList = filmListData
        let htmls = ""
        for (let i = 0; i < filmListData.length; i++) {
            htmls += `
                <li>
                    <h3>${filmListData[i].Name}</h3>
                    <img src="${filmListData[i].URL}" style=" height:200px; width:auto">
                    <p>Release date: ${filmListData[i].Date}</p>
                </li>
            `
        }
    filmListDOM.innerHTML = htmls
    }
}

submit.addEventListener("click", function(event){
    addFilm(event)
})

showFilm()
