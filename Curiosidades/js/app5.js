const button5 = document.querySelector('#button5');
const popup5 = document.querySelector('.popup-wrapper5')
const closeButton5 = document.querySelector('.popup-close5')

button5.addEventListener('click', () => {
    popup5.style.display ='block'
})

popup5.addEventListener('click', event  => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close5', 'popup-link5', 'popup-wrapper5']
    const shouldClosePopup = classNames.some(classNames => classNames === classNameOfClickedElement)
   
    if (shouldClosePopup) {
        popup5.style.display = 'none'
    }
    
})