import { getImages } from './api.js'
import { createCardContent, setImage, setTitle, setImageAuthor, setAuthor, setRandomDate } from './content.js'

function createContainerPanel(data, index) {
    const $panel = createCardContent(data, index)
    return $panel
}

function loader(isLoading) {
    if (isLoading) {
        const $cardTitleHeader = document.querySelector('#cardTitleHeader')
        $cardTitleHeader.classList.remove('skeleton')
        cardTitleHeader.style.inlineSize = 'max-content'
        const $cardImageHeader = document.querySelector('#cardImageHeader')
        $cardImageHeader.classList.remove('skeleton')


        const $cardImage = document.querySelectorAll('#card-image')
        const $subjectMedium = document.querySelectorAll('#subject-medium')
        const $subjectSmall = document.querySelectorAll('#subject-small')
        const $subjectLarge = document.querySelectorAll('#subject-large')
        const $writerName = document.querySelectorAll('#writer-name')
        const $writerDate = document.querySelectorAll('#writer-date')
        $cardImage.forEach((cardImage) => {
            cardImage.classList.remove('skeleton')
        })
        $subjectMedium.forEach((subjectMedium) => {
            subjectMedium.classList.remove('skeleton')
            subjectMedium.style.inlineSize = 'auto'
        })
        $writerName.forEach((writerName) => {
            writerName.classList.remove('skeleton')
            writerName.style.inlineSize = 'auto'
        })
        $writerDate.forEach((writerDate) => {
            writerDate.classList.remove('skeleton')
            writerDate.style.inlineSize = 'auto'
        })
        $subjectSmall.forEach((subjectSmall) => {
            subjectSmall.style.display = "none"
        })
        $subjectLarge.forEach((subjectLarge) => {
            subjectLarge.style.display = "none"
        })
    }
}

function setHeader() {
    const $cardTitleHeader = document.querySelector('#cardTitleHeader')
    const $cardImageHeader = document.querySelector('#cardImageHeader')
    $cardImageHeader.innerHTML = `<img src="./images/logo-no-te-rindas.png" alt=""/>`
    $cardTitleHeader.innerHTML = `<a>LEONIDAS ESTEBAN.COM</a>`
}
export async function showImages() {
    const $container = document.querySelector('.content')
    loader(false)
    const { data, isError } = await getImages()

    data.forEach((value, index) => {
        const $panel = createContainerPanel(index)
        $container.append($panel)
        setTimeout(() => {
            setHeader()
            setImage(value, index)
            setTitle(value, index)
            setImageAuthor(value, index)
            setAuthor(value, index)
            setRandomDate(index)
            loader(true)
        }, 5000)
    });
}

showImages()