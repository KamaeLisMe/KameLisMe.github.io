window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
function printerError(s) {
    let leng = s.length
    let a = ``
    let b = s.split('')
    let i = 0
    b.forEach(item => {
      if (item === 'x') {
        i++
      } else if (item === 'y') {
        i++
      } else if (item === 'z') {
        i++
      }
      return i
    })
  return a = console.log(`${i}/${leng}`);
}

printerError(s)
