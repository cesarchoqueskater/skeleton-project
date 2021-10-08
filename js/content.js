import { createDOM } from './utils/dom.js'
import { cutSpace } from './utils/format-data.js'

export function cardContentTemplate(index) {
    return `
            <div class="card-content" id="content-${index}">
                <div class="card-image content-background skeleton" id="card-image"></div>
                <div class="card-description">
                    <div class="card-description-subject subject-medium skeleton" id="subject-medium"></div>
                    <div class="card-description-subject subject-small skeleton" id="subject-small"></div>
                    <div class="card-description-subject subject-large skeleton" id="subject-large"></div>
                    <div class="card-writer" id="content-writer-${index}">
                        <div class="writer-information">
                            <div class="writer-image skeleton" id="writer-image">
                            </div>
                            <div class="writer-name skeleton" id="writer-name"></div>
                        </div>
                        <div class="writer-date skeleton" id="writer-date"></div>
                    </div>
                </div>
            </div>
        `
}

export function setImage(value, index) {
    const $cardImage = document.querySelector(`#content-${index} .card-image`)
    $cardImage.innerHTML = `<a href="${value.url}" target="_blank"><img src="https://picsum.photos/id/${value.id}/200/300" alt="${value.author}"/><a>`
}

export function setTitle(value, index) {
    const $setTitle = document.querySelector(`#content-${index} .card-description #subject-medium`)
    $setTitle.textContent = `${value.author}`
}

export function setImageAuthor(value, index) {
    const $setImageAuthor = document.querySelector(`#content-writer-${index} .writer-information .writer-image`)
    $setImageAuthor.innerHTML = `<img src="https://picsum.photos/id/${value.id}/200/300" alt="${value.author}"/>`
}

export function setAuthor(value, index) {
    const $setAuthor = document.querySelector(`#content-writer-${index} .writer-information  #writer-name`)
    $setAuthor.textContent = cutSpace(`${value.author}`)
}

export function setRandomDate(index) {
    const $setAsetRandomDateuthor = document.querySelector(`#content-writer-${index} #writer-date`)
    const valueMax = 60
    const valueMin = 1
    const valueRandom = Math.floor(Math.random() * (valueMax - valueMin + 1) + valueMin);
    $setAsetRandomDateuthor.innerHTML = `<p>${valueRandom} min read</p>`
}


export function createCardContent(index) {
    return createDOM(cardContentTemplate(index))
}