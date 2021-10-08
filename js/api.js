const BASE_API = 'https://picsum.photos/v2/list'

export async function getImages() {
    const response = await fetch(BASE_API)

    const data = await response.json()
    return {
        data,
        isError: false
    }
}