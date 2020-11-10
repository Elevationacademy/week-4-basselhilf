// ex-1
    const fetch = function (bookNumber) {
        $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${bookNumber}`,
        success: function (response) {
            const title = response.items[0].volumeInfo.title
            const author = response.items[0].volumeInfo.authors[0] 
            console.log(title + " by " + author)
            } ,
    })
    }
    fetch(9780307417138)

//ex-2
const fetch = function (queryType,queryValue) {
    $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (response) {
        if(queryType=="isbn"){
            console.log(response.items[0].volumeInfo.title)
        }
        else if (queryType=="title"){
            console.log("book by "+response.items[0].volumeInfo.authors[0])
        }
        } ,
})
}
fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People")

//ex-3
const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (response) { 
                for(let item of response.items){
                console.log(item.volumeInfo.industryIdentifiers[0].identifier)
                console.log(item.volumeInfo.title)
                console.log(item.volumeInfo.authors)
                }
        },
    })
}
fetch("isbn", 9781451621716)
fetch("title", "How to Win Friends and Influence People")


