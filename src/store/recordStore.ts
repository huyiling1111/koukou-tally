
import deepClone from '@/lib/deepClone';

const recordStore = {
    localStorageKeyName: 'recordList',
    recordList: [] as RecordItem[],
    createRecord(record: RecordItem) {
        const deepCloneRecord: RecordItem = deepClone(record)
        deepCloneRecord.createdAt = new Date();
        this.recordList.push(deepCloneRecord)
        this.saveRecord(this.recordList)

    },
    fetchRecord() {
        return JSON.parse(window.localStorage.getItem(this.localStorageKeyName) || '[]') as RecordItem[];

    },
    saveRecord(data: RecordItem[]) {
        window.localStorage.setItem(this.localStorageKeyName, JSON.stringify(data));
    },






}
export default recordStore


