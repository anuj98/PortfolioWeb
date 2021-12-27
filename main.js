$(document).ready(() => {
    const allNavItems = document.getElementsByClassName('nav-item');
    const cards = document.getElementsByClassName("card")
    for(let i=0; i<cards.length; i++) {
        const len = cards[i].innerHTML.length
        const text = cards[i].innerHTML
        let calculatedWidth = 0;
        for(let j=0; j<len; j++) {
            const charCode = text[j].charCodeAt(0)
            if(charCode>=65 && charCode<=90) {
                calculatedWidth+=18;
            }
            else if(charCode>=97 && charCode<=122) {
                calculatedWidth+=10;
            }
            else if(charCode>=33 && charCode<=47){
                calculatedWidth+=15;
            }
        }
        cards[i].style.width = `${calculatedWidth}px`
    }


    const eduDivsLeft = document.getElementsByClassName("edu-detail-left")
    for(let i=1; i<eduDivsLeft.length; i++) {
        eduDivsLeft[i].style["padding-top"] = `${i * 200}px`;
    }

    const expDivsLeft = document.getElementsByClassName("exp-detail-left")
    for(let i=1; i<expDivsLeft.length; i++) {
        expDivsLeft[i].style["padding-top"] = `${i * 200}px`;
    }

    const offsetY = 50;
    $('.nav-home').on('click', function() {
        $('html,body').animate({
            scrollTop: $(".profile-name-container").offset().top - offsetY},
            'slow');
        if(!allNavItems[0].classList.contains('active')){
            $(this).addClass('active');
        }
        removeActiveClass(0);
    });

    $('.nav-about-me').on('click', function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top - offsetY},
            'slow');
        if(!allNavItems[1].classList.contains('active')){
            $(this).addClass('active');
        }
        removeActiveClass(1);
    });

    $('.nav-skills').on('click', function() {
        $('html,body').animate({
            scrollTop: $("#skills").offset().top - offsetY},
            'slow');
        if(!allNavItems[2].classList.contains('active')){
            $(this).addClass('active');
        }
        removeActiveClass(2);
    });

    $('.nav-experience').on('click', function() {
        $('html,body').animate({
            scrollTop: $("#experience").offset().top - offsetY},
            'slow');
        if(!allNavItems[3].classList.contains('active')){
            $(this).addClass('active');
        }
        removeActiveClass(3);
    });

    $('.nav-education').on('click', function() {
        $('html,body').animate({
            scrollTop: $("#education").offset().top - offsetY},
            'slow');
        if(!allNavItems[4].classList.contains('active')){
            $(this).addClass('active');
        }
        removeActiveClass(4);
    });

    $('.nav-contact').on('click', function() {
        $('html,body').animate({
            scrollTop: $(".footer").offset().top},
            'slow');
        if(!allNavItems[5].classList.contains('active')){
            $(this).addClass('active');
        }
        removeActiveClass(5);
    });

    function removeActiveClass(index) {
        for(let i=0; i<allNavItems.length; i++) {
            if(i!==index && allNavItems[i].classList.contains('active')) {
                switch(i) {
                    case 0:
                        $('.nav-home').removeClass('active')
                        break;
                    case 1:
                        $('.nav-about-me').removeClass('active')
                        break;
                    case 2:
                        $('.nav-skills').removeClass('active')
                        break;
                    case 3:
                        $('.nav-experience').removeClass('active')
                        break;
                    case 4:
                        $('.nav-education').removeClass('active')
                        break;
                    case 5:
                        $('.nav-contact').removeClass('active')
                        break;
                }
            }
        }
    }

    function responsive(maxWidth) {
        if (maxWidth.matches) { 
            $('.profile-image-1').removeClass('hidden');
            $('.profile-image-2').addClass('hidden');
            $('.small-screen').removeClass('hidden');
            $('.large-screen').addClass('hidden');
            console.log('called')
        } else {
            $('.profile-image-1').addClass('hidden');
            $('.profile-image-2').removeClass('hidden');
            $('.small-screen').addClass('hidden');
            $('.large-screen').removeClass('hidden');
        }
      }
    var maxWidth = window.matchMedia("(max-width: 500px)");
    
    responsive(maxWidth);
    maxWidth.addEventListener("change", responsive);
})