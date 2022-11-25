document.addEventListener('DOMContentLoaded', function(e) {
    
    

    /* Const for burger btn */

    const burgerBtn = document.querySelector('.header__burger');
    const burgenMenuOpened = document.querySelector('.header__menu');
    const body = document.querySelector('body');
    

    /* Const for search btn */

    const searchBtn = document.querySelector('.header__search-btn');
    const searchFormOpened = document.querySelector('.header__form');

    /* Slider */


    const slideStyle = document.querySelector('.hero__slides');
    const slideImg = document.querySelector('.hero__slides-slide');
    const slideNavActive = document.querySelectorAll('.ctrl-slides__nav');


    /* Run functions */

    

    formActive(burgerBtn, burgenMenuOpened);  // Burger

    

    formActive(searchBtn, searchFormOpened); // Search form

    

    let slidePos = 0;
    let sliderNubmer = 1;

    setInterval(() => {
        slideLeft(slideStyle, slideImg, 2);
        sliderNav(sliderNubmer, slideNavActive);
    }, 3000);


    openAccordeon();

    popUpOpen();

    tabsOpen();
    


    /* All functions */

    /* Burger, search */

    

    function formActive(btn, element) {

        btn.addEventListener('click', function(e) {
            
            if(btn) {
                element.classList.toggle('_active');
                btn.classList.toggle('_active');
                body.classList.toggle('_lock');
            }

            

        });

    }

    /* Slider Hero */

    

    function slideLeft(slideChangeStyle, slideImgWidth, slidesCount) {

        

        if (slidePos <= -(slideImgWidth.getBoundingClientRect().width) * slidesCount) {
            slidePos = 0;
            slideChangeStyle.style.left = slidePos + "px";
            sliderNubmer = 1;
        } else {
            slidePos = slidePos - slideImgWidth.getBoundingClientRect().width;
            slideChangeStyle.style.left = slidePos + "px";
            sliderNubmer++;
        }

    }

    function sliderNav(value, arrayNav) {
        switch (value) {
            case 1:
                arrayNav.forEach(e => {
                    e.classList.remove('_active')
                });
                arrayNav[0].classList.add('_active');
              break;
            case 2:
                arrayNav.forEach(e => {
                    e.classList.remove('_active')
                });
                arrayNav[1].classList.add('_active');
              break;
            case 3:
                arrayNav.forEach(e => {
                    e.classList.remove('_active')
                });
                arrayNav[2].classList.add('_active');
              break;
            default:
              console.log('error slider!')
          }
    }

    function openAccordeon() {


        document.querySelectorAll('.questions__item').forEach(el => {
            
            el.addEventListener('click', () => {
                
                let content = el.nextElementSibling;
                let button = el.lastElementChild;

                if (content.style.maxHeight == `0px` || content.style.maxHeight == 0) {
                    content.style.maxHeight = content.scrollHeight + 62 + 'px';
                    content.style.paddingTop = `30px`;
                    content.style.paddingBottom = `30px`;
                    button.classList.add('_active');
                } else {
                    content.style.maxHeight = 0;
                    content.style.paddingTop = `0px`;
                    content.style.paddingBottom = `0px`;
                    button.classList.remove('_active');
                }

            })

        });
    }


    function popUpOpen () {

        popUpBtn = document.querySelector('.content-hero__buttons');
        popUpWindow = document.querySelector('.popup');
        popUpClose = document.querySelector('.popup__close');

        popUpBtn.addEventListener('click', function(e) {
            popUpWindow.classList.add('_active');
            body.classList.add('_lock');
        })

        popUpClose.addEventListener('click', function(e) {
            e.preventDefault();
            popUpWindow.classList.remove('_active');
            body.classList.remove('_lock');
        })

    }

    function tabsOpen () {

        const buttonsTab = document.querySelectorAll('.howwework__nav-item');
        const tabsItem = document.querySelectorAll('.howwework__body');

        buttonsTab.forEach(function(item) {
            item.addEventListener('click', function () {

                
                let currentBtn = item;
                let tabId = currentBtn.getAttribute('data-tab');
                console.log(tabId);
                let currentTab = document.querySelector(tabId);
                console.log(currentTab);


                e.preventDefault();
                buttonsTab.forEach(function(e) {
                    e.classList.remove('_active')
                });
                item.classList.add('_active');

                tabsItem.forEach(function(e) {
                    e.classList.remove('_active');
                })
                currentTab.classList.add('_active');
            })
        });

    }
    

})