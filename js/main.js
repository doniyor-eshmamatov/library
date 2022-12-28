elBody = document.querySelector('body');
elModeBtn = document.querySelector('.site-header__mode');

function modeChange() {
    elBody.classList.toggle('dark')
}

/*      RENDER SELECTS    */
let elList = document.querySelector('.books__inner')

let elNames = document.querySelector('.js-names');
let elYears = document.querySelector('.js-years');
let elPages = document.querySelector('.js-pages');
let elLang = document.querySelector('.js-lang');

function renderBooks(array, node) {
    elList.innerHTML = '';
    array.forEach(book => {
        let elBookItem = document.createElement('div');

        let elBookImg = document.createElement('img');
        let elBookAbout = document.createElement('div');

        let elBookName = document.createElement('p');
        let elBookLang = document.createElement('p');
        let elBookYear = document.createElement('p');
        let elBookPage = document.createElement('p');

        elBookItem.setAttribute('class', 'books__item book');
        elBookImg.setAttribute('class', 'book__img');
        elBookAbout.setAttribute('class', 'book__about')

        elBookName.setAttribute('class', 'book__title')
        elBookLang.setAttribute('class', 'book__lang')
        elBookYear.setAttribute('class', 'book__year')
        elBookPage.setAttribute('class', 'book__page')

        elBookImg.setAttribute('width', '250px');
        elBookImg.setAttribute('height', '320px');

        elBookImg.src = `../images/${book.imageLink}`;
        elBookName.innerHTML = '<strong>Title: </strong>' + book.title;
        elBookYear.innerHTML = '<strong>Year: </strong>' + book.year;
        elBookPage.innerHTML = '<strong>Pages: </strong>' + book.pages;
        elBookLang.innerHTML = '<strong>Lang: </strong>' + book.language;

        elBookItem.appendChild(elBookImg);
        elBookItem.appendChild(elBookAbout);
        elBookAbout.appendChild(elBookName);
        elBookAbout.appendChild(elBookYear);
        elBookAbout.appendChild(elBookPage);
        elBookAbout.appendChild(elBookLang);

        node.appendChild(elBookItem)
    });
}
renderBooks(books, elList);



/*        SEARCH FUNCTION CODES           */

let elInput = document.querySelector('.site-header__input')
let searchArr = [];
elInput.addEventListener('input', (evt) => {
    evt.preventDefault();
    elList.innerHTML = '';

    let elInputVal = elInput.value.toLowerCase();

    books.forEach((el) => {
        if (el.title.toLowerCase().includes(elInputVal)) {
            searchArr.push(el);
        }
    })
    renderBooks(searchArr, elList);
    searchArr = [];
})









let arrNamesSet = new Set();
let arrYearsSet = new Set();
let arrPagesSet = new Set();
let arrLangsSet = new Set();



let allSelects = document.querySelector('.hero__item');
let selectNames = document.querySelector('.js-names');
let selectYears = document.querySelector('.js-years');
let selectPages = document.querySelector('.js-pages');
let selectLang = document.querySelector('.js-lang');


function allYears(array) {
    array.forEach(el => {
        arrYearsSet.add(el.year);
    })
    return arrYearsSet;
}
allYears(books)


function allPages(array) {
    array.forEach(el => {
        arrPagesSet.add(el.pages);
    })
    return arrPagesSet;
}
allPages(books)


function allLang(array) {
    array.forEach(el => {
        arrLangsSet.add(el.language);
    })
    return arrLangsSet;
}
allLang(books)



function createOtion(array, node) {
    array.forEach((el) => {
        let elOption = document.createElement('option');
        elOption.textContent = el;
        elOption.value = el
        node.appendChild(elOption)
    })
}
createOtion(arrLangsSet, selectLang)



selectNames.addEventListener('change', (evt) => {
    
    books.sort((a, b) => {
        let aVal = a.title.toLowerCase();
        let bVal = b.title.toLowerCase();

        if (allSelects.value == 1) {
            return aVal.charCodeAt(0) - bVal.charCodeAt(0);
        }
        if (allSelects.value == 2) {
            return bVal.charCodeAt(0) - aVal.charCodeAt(0);
        }
    })
    renderBooks(books, elList);
})


selectYears.addEventListener('change', (evt) => {

    if (selectYears.value == 1) {
        books.sort((a, b) => {
            if (a.year > b.year) {
                return 1;
            }
            if (b.year > a.year) {
                return -1;
            }
        })
    }
    
    if (selectYears.value == 2) {
        books.sort((a, b) => {
            if (a.year > b.year) {
                return -1;
            }
            if (b.year > a.year) {
                return 1;
            }
        })
    }
    renderBooks(books, elList);
})


selectPages.addEventListener('change', (evt) => {

    if (selectPages.value == 1) {
        books.sort((a, b) => {
            if (a.pages > b.pages) {
                return 1;
            }
            if (b.pages > a.pages) {
                return -1;
            }
        })
    }
    
    if (selectYears.value == 2) {
        books.sort((a, b) => {
            if (a.pages > b.pages) {
                return -1;
            }
            if (b.pages > a.pages) {
                return 1;
            }
        })
    }
    renderBooks(books, elList);
})


selectLang.addEventListener('change', (evt) => {
    sortedArrayByLang = new Set();
    books.forEach(el => {
        if (el.language == selectLang.value){
            sortedArrayByLang.add(el)
        }
    })
    renderBooks(sortedArrayByLang, elList)
})



