export function cutSpace(value) {
    const author = value
    const positionSpace = author.indexOf(" ")
    if (positionSpace === -1) {
        return author
    }
    const subStringWord = author.substring(0, positionSpace)
    return subStringWord
}