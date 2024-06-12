const button4 = document.querySelector('#button4');
const popup4 = document.querySelector('.popup-wrapper4')
const closeButton4 = document.querySelector('.popup-close4')

button4.addEventListener('click', () => {
    popup4.style.display ='block'
})

popup4.addEventListener('click', event  => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close4', 'popup-link4', 'popup-wrapper4']
    const shouldClosePopup = classNames.some(classNames => classNames === classNameOfClickedElement)
   
    if (shouldClosePopup) {
        popup4.style.display = 'none'
    }
    
})