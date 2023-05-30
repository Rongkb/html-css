var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var currentIndex = 0;



function updateImgByIndex(index) {

    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })

    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}



listImg.forEach((imageElement, index) => {

    imageElement.addEventListener('click', e => {
        imgFeature.style.opacity = '0'
        setTimeout(() => {
            updateImgByIndex(index)
            imgFeature.style.opacity = '1'
        }, 400)
    })
})

prevBtn.addEventListener('click', e => {
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1
    } else {
        currentIndex--
    }
    imgFeature.style.animation = ''
    setTimeout(() => {
        updateImgByIndex(currentIndex)
        imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards'
    }, 100)
})

nextBtn.addEventListener('click', e => {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    imgFeature.style.animation = ''
    setTimeout(() => {
        updateImgByIndex(currentIndex)
        imgFeature.style.animation = 'slideRight 1s ease-in-out forwards'
    }, 100)
})

updateImgByIndex(currentIndex)