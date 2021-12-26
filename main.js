$(document).ready(() => {
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
    });

    $('.nav-about-me').on('click', function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top - offsetY},
            'slow');
    });

    $('.nav-skills').on('click', function() {
        $('html,body').animate({
            scrollTop: $("#skills").offset().top - offsetY},
            'slow');
    });

    $('.nav-experience').on('click', function() {
        $('html,body').animate({
            scrollTop: $("#experience").offset().top - offsetY},
            'slow');
    });

    $('.nav-education').on('click', function() {
        $('html,body').animate({
            scrollTop: $("#education").offset().top - offsetY},
            'slow');
    });

    $('.nav-contact').on('click', function() {
        $('html,body').animate({
            scrollTop: $(".footer").offset().top},
            'slow');
    });
}) 