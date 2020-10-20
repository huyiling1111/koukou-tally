
const recordListmodel = {
    localStorageKeyName: 'recordList',
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(this.localStorageKeyName) || '[]') as RecordItem[];

    },
    save(data: RecordItem[]) {
        window.localStorage.setItem(this.localStorageKeyName, JSON.stringify(data));
    }
};

export default recordListmodel;