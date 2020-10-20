type tagsListModel = {
    localStorageKeyName: string
    data: string[]
    create: (label: string) => 'repeat' | 'success'
    fetch: () => string[]
    save: (data: string[]) => void
}

const tagsListModel: tagsListModel = {
    localStorageKeyName: 'tagsList',
    data: [],

    create(label: string) {


        if (this.data.indexOf(label) > -1) {
            return "repeat"
        } else {
            this.data.push(label);
            tagsListModel.save(this.data);
            return "success"
        }





    },

    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(this.localStorageKeyName) || "[]")

        return this.data


    },
    save(data: string[]) {
        window.localStorage.setItem(this.localStorageKeyName, JSON.stringify(data))

    }
}
export default tagsListModel