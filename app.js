        let menuBar = document.querySelector('.menu-bar');
        let nav = document.querySelector('.bottom-1');

        menuBar.addEventListener('click', () => {
            if (menuBar.childNodes[0].className === 'fas fa-bars') {
                menuBar.childNodes[0].classList.toggle('fa-times');
                nav.style.display = 'block';
                nav.className = 'animated slideInLeft';
            } else {
                menuBar.childNodes[0].classList.toggle('fa-times');
                nav.style.display = 'none';
                nav.className = 'animated slideOutLeft';
            }
        })