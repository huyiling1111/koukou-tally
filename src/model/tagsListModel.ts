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
    update: (id: string, name: string) => void
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
    update(id, name) {
        if (this.data.map(item => item.id).indexOf(id) > -1) {
            const names = this.data.map(item => item.name)
            if (names.indexOf(name) > -1) {
                return "repeat"
            }

            else {
                const tag = this.data.filter(item => item.id = id)[0]
                tag.name = name
                this.save(this.data)
                return "success"
            }


        } else {
            return "not found"
        }


    },
    save(data: tag[]) {
        window.localStorage.setItem(this.localStorageKeyName, JSON.stringify(data))

    }
}
export default tagsListModel