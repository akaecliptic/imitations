// VARS
const menu = document.getElementById('menu-icon');
const links = document.getElementById('container-links');

const bubbles = Array.from(document.getElementsByClassName('bubbles'));
const skott = document.getElementById('skott');
const jellyfish = Array.from(document.getElementsByClassName('jellyfish'));

const menuClass = 'fa-bars';
const xClass = 'fa-close';
const panelClass = 'show-panel';

// FUNCTIONS
function toggleMenu() {
    const isOpen = !menu.classList.contains(menuClass);

    if ( isOpen ) {
        menu.classList.remove(xClass);
        menu.classList.add(menuClass);

        links.classList.remove(panelClass);
    } else {
        menu.classList.remove(menuClass);
        menu.classList.add(xClass);

        links.classList.add(panelClass);
    }
}

function scroll() {
    const scrollRange = document.body.scrollHeight - window.innerHeight;
    const position = (window.pageYOffset * 100) / scrollRange;

    skott.style.top = ((position * 1.25) - 30) + '%';

    for( let i = 0; i < bubbles.length; i++ ) {
        bubbles[i].style.top = (60 - (position * (.9 + i / 5))) + '%'
    }

    for( let i = 0; i < jellyfish.length; i++ ) {
        const jelly = jellyfish[i]
        if( jelly.classList.contains("front") ) {
            jelly.style.top = ((position * 1.1) + 10 + (i * 3)) + '%'  
        } else {
            jelly.style.bottom = (position - 15 - (i * 3)) + '%'
        }
    }
}

// ADDING EVENTS
menu.addEventListener('click', toggleMenu);
document.addEventListener('scroll', scroll);
