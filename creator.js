class Creator {
    constructor(parentElement) {
        this.parentElement = parentElement ? parentElement : document.body
        this.created
        this.selected
    }

    get parent() {
        return this.parentElement
    }

    create(e, data) {
        let element = document.createElement(e)
        element.innerHTML = data
        this.created = element
        return element
    }

    append(element) {
        element = element ? element : this.created
        this.parentElement.appendChild(element)
        return this
    }

    remove(element) {
        element = element ? element : this.created
        this.parentElement.removeChild(this.created)
        return this
    }

    select(element) {
        this.selected = document.querySelector(element)
        return this
    }
}