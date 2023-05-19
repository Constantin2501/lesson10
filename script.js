const books = document.querySelectorAll('.books')
const book = document.querySelectorAll('.book')
const banner = document.querySelector('.adv')
const title = document.querySelectorAll('h2')
const li = document.querySelectorAll('li')
const newChapter = document.createElement('li')


books[0].prepend(book[1])
books[0].append(book[2])
book[3].before(book[4])

document.body.style.backgroundImage = 'url(image/adv.jpg)'
banner.remove()
title[4].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/types%20%26%20grammar/README.md#you-dont-know-js-types--grammar">Книга 3. this и Прототипы Объектов</a>'
li[3].insertAdjacentElement('afterend', li[6])
li[4].insertAdjacentElement('beforebegin', li[8])

li[48].before(li[55])
li[48].before(li[49])
li[48].before(li[50])

newChapter.textContent = 'Глава 8: За пределами ES6'
li[25].after(newChapter)