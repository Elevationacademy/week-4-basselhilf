let wisdoms = []

$("#add").on("click", function () {
    const name = $("#inpt").val()
    wisdoms.push({ text: name })
    $('input').val(' ')
    render()
    if (wisdoms.length > 0) {
        localStorage.wisdoms = JSON.stringify(wisdoms)
    }
})

const render = function () {
    $("#items").empty()
    let index = ""
    for (const wisdom of wisdoms) {
        index += `<div><button id=${wisdom.id} class=delete >x</button><p>${wisdom.text}</p></div>`
        $("#items").on("click", `#${wisdom.id}`, function () {
            const dataInfo = getWisdomFromLocalStorage()
            for (let i = 0; i < dataInfo.length; i++) {
                if (dataInfo[i].id == this.id) {
                    dataInfo.splice(i, 1)
                    break
                }
            }
            wisdoms = dataInfo
            localStorage.wisdom = JSON.stringify(wisdoms)
            render()
        })
    }
    $("#items").append(index)
}

$("#clear").on("click", function () {
    localStorage.clear()
})

const getWisdomFromLocalStorage = function () {
    return JSON.parse(localStorage.getItem('wisdom')) || []
}

