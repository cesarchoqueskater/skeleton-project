import { getImages } from './api.js'
import { createCardContent } from './content.js'
import { createDOM } from './utils/dom.js'

function createContainerPanel(data, index) {
    const $panel = createCardContent(data, index)
        // if (data > 0) {
        //     $panel.hidden = true
        // }
        // debugger
    return $panel
}

function loader(isLoading) {
    if (isLoading) {
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
export async function showImages() {
    const $container = document.querySelector('.content')
    loader(false)
    const { data, isError } = await getImages()

    data.forEach((value, index) => {
        const $panel = createContainerPanel(value, index)
        $container.append($panel)
    });
    setTimeout(() => {
        loader(true)
    }, 1000)
}

showImages()