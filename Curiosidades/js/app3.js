const button3 = document.querySelector('#button3');
const popup3 = document.querySelector('.popup-wrapper3')
const closeButton3 = document.querySelector('.popup-close3')

button3.addEventListener('click', () => {
    popup3.style.display ='block'
})

popup3.addEventListener('click', event  => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close3', 'popup-link3', 'popup-wrapper3']
    const shouldClosePopup = classNames.some(classNames => classNames === classNameOfClickedElement)
   
    if (shouldClosePopup) {
        popup3.style.display = 'none'
    }
    
})