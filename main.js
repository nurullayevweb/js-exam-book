var elList = document.querySelector(".books__list");

var selectBook = books.slice(0, 96) ;

for (var obj of selectBook) {

    var newItem = document.createElement("li") ;
    newItem.classList.add("books__item") ;

    var newImg = document.createElement("img") ;

    var newTitle = document.createElement("h4") ;
    newTitle.classList.add("books__title") ;

    var newOwner = document.createElement("p") ;
    newOwner.classList.add("books__owner") ;


    var booksDataList = document.createElement("ul") ;
    booksDataList.classList.add("books__data__list") ;
    var booksDataTime = document.createElement("li") ;
    booksDataTime.classList.add("books__data__time") ;
    var booksDataNumber = document.createElement("li") ;
    booksDataNumber.classList.add("books__data__number") ;
    // var booksDataCount = document.createElement("li") ;
    // booksDataCount.classList.add("books__data__count") ;


    var booksLinks = document.createElement("ul") ;
    booksLinks.classList.add("books__links") ;
    var booksWikipedia = document.createElement("a") ;
    booksWikipedia.classList.add("books__wikipedia") ;
    var booksBtn = document.createElement("a") ;
    booksBtn.classList.add("books__shop") ;


    newImg.src = obj.imageLink ;
    newImg.alt = obj.title ;
    newTitle.textContent = obj.title ;
    newOwner.textContent = obj.author ;
    if (newOwner.textContent == "Unknown") {
        newOwner.textContent = "Author unknown" ;
    }

    booksDataTime.textContent = obj.year ;
    booksDataNumber.textContent = obj.pages ;
    // booksDataCount.textContent = obj.country ;

    booksWikipedia.href = obj.link ;
    booksWikipedia.target = "blank" ;
    booksWikipedia.textContent = "Wikipedia" ;

    booksDataList.append(booksDataTime, booksDataNumber) ; // booksDataCount qo'shsa bo'ladi
    booksLinks.append(booksWikipedia, booksBtn) ;
    newItem.append(newImg, newTitle, newOwner, booksDataList, booksLinks) ;
    elList.appendChild(newItem) ;
}