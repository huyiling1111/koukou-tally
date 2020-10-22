
import recordListmodel from '@/model/recordListmodel';

const recordStore = {

    recordList: recordListmodel.fetch(),
    createRecord: (record: RecordItem) => {
        recordListmodel.create(record);
    }

}
export default recordStore