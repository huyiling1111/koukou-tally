type tag = {
    id: string
    name: string
}


type tagsListModel = {
    localStorageKeyName: string
    data: tag[]
    create: (label: string) => 'repeat' | 'success'
    fetch: () => tag[]
    save: (data: tag[]) => void
}

const tagsListModel: tagsListModel = {
    localStorageKeyName: 'tagsList',
    data: [],

    create(label: string) {
        const newData = this.data.map(item => item.name)
        if (newData.indexOf(label) > -1) {
            return "repeat"
        } else {
            this.data.push({ 'id': label, 'name': label });
            this.save(this.data);
            return "success"
        }

    },

    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(this.localStorageKeyName) || "[]")

        return this.data


    },
    save(data: tag[]) {
        window.localStorage.setItem(this.localStorageKeyName, JSON.stringify(data))

    }
}
export default tagsListModel