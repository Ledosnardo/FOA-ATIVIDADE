const menuItems = document.querySelectorAll('header a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToOnIdClick)
})

function scrollToOnIdClick(event) { 
    event.preventDefault();
    const to = getScrollTop(event.target) - 100;
    
    scrollToPosition(to);
}

function getScrollTop(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: 'smooth'
    })
}
