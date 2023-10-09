let burg = document.querySelector('.burger');

burg.addEventListener('click', menu);
function menu() {
    let menu = document.querySelector('#Bmenu')
    let body = document.querySelector('body')
    let burgS = document.querySelector('.burger span')


    menu.style.display = (menu.style.display == 'none') ? 'block' : 'none';
    burg.classList.toggle('active');

    if (menu.style.display == 'block') {
        body.classList.add('bg');
        burgS.classList.add('active');


    }
    else {
        body.classList.remove('bg');
        burgS.classList.remove('active');


    }
}



