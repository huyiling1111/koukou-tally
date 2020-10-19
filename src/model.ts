
const model = {
    localStorageKeyName: "recordList",
    deepClone(data: Recordist) {

        return JSON.parse(JSON.stringify(data))
    },
    fetch() {

        return JSON.parse(
            window.localStorage.getItem(this.localStorageKeyName) || "[]"
        ) as Recordist[];
    },
    save(data: Recordist[]) {
        window.localStorage.setItem(this.localStorageKeyName, JSON.stringify(data));

    }
}

export default model 
