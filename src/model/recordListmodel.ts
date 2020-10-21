import deepClone from '@/lib/deepClone';

const recordListmodel = {
    localStorageKeyName: 'recordList',
    data: [] as RecordItem[],
    create(record: RecordItem) {
        const deepCloneRecord: RecordItem = deepClone(record)
        deepCloneRecord.createdAt = new Date();
        this.data.push(deepCloneRecord)
        this.save(this.data)

    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(this.localStorageKeyName) || '[]') as RecordItem[];

    },
    save(data: RecordItem[]) {
        window.localStorage.setItem(this.localStorageKeyName, JSON.stringify(data));
    }
};

export default recordListmodel;