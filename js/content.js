import { createDOM } from './utils/dom.js'
import { cutSpace } from './utils/format-data.js'

export function cardContentTemplate({ index, id, title, author }) {
    return `
            <div class="card-content" id=${index}>
                <div class="card-image content-background skeleton" id="card-image">
                    <img src="https://picsum.photos/id/${id}/200/300" alt=""/> 
                </div>
                <div class="card-description">
                    <div class="card-description-subject subject-medium skeleton" id="subject-medium">${title}</div>
                    <div class="card-description-subject subject-small skeleton" id="subject-small"></div>
                    <div class="card-description-subject subject-large skeleton" id="subject-large"></div>
                    <div class="card-writer">
                        <div class="writer-information">
                            <div class="writer-image skeleton" id="writer-image">
                                <img src="https://picsum.photos/id/${id}/200/300" alt=""/>
                            </div>
                            <div class="writer-name skeleton" id="writer-name">${author}</div>
                        </div>
                        <div class="writer-date skeleton" id="writer-date">8 min read</div>
                    </div>
                </div>
            </div>
        `
}

export function createCardContent(data, index) {
    const values = {
            index,
            id: data.id,
            title: data.author,
            author: cutSpace(data.author),
        }
        // debugger
    return createDOM(cardContentTemplate(values, index))
}