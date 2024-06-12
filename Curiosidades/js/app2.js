const button2 = document.querySelector('#button2');
const popup2 = document.querySelector('.popup-wrapper2')
const closeButton2 = document.querySelector('.popup-close2')

button2.addEventListener('click', () => {
    popup2.style.display ='block'
})

popup2.addEventListener('click', event  => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close2', 'popup-link2', 'popup-wrapper2']
    const shouldClosePopup = classNames.some(classNames => classNames === classNameOfClickedElement)
   
    if (shouldClosePopup) {
        popup2.style.display = 'none'
    }
    
})