
export default class Request {
    url = 'http://localhost:5000'

    uploadFile = (file) => {
        const formData = new FormData()
        formData.append('file', file)
        
        return fetch(this.url, {
            method: 'post',
            body: formData,
        });
    }

    quickSort = () => {
        return fetch(`${this.url}/quickSort`, {
            method: 'get',
        });
    }
    mergeSort = () => {
        return fetch(`${this.url}/mergeSort`, {
            method: 'get',
        });
    }
    insertionSort = () => {
        return fetch(`${this.url}/insertionSort`, {
            method: 'get',
        });
    }
    selectionSort = () => {
        return fetch(`${this.url}/selectionSort`, {
            method: 'get',
        });
    }
}

