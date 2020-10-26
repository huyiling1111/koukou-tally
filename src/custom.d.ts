type Result = { title: string; items: RecordItem[]; total: number }[];

type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number; // 数据类型 object | string
    createdAt: string;  // 类 / 构造函数
}
type tag = {
    id: string;
    name: string;
}
type rootState = {
    recordList: RecordItem[];
    tagList: tag[];
    currentTag?: tag;
    createTagReturnValue?: "repeat" | "success" | "null";
    removeTagReturnValue?: boolean;
    updateTagReturnValue?: "repeat" | "success" | "not found";
}

// type tagsListModel = {
//     localStorageKeyName: string;
//     data: tag[];
//     create: (label: string) => 'repeat' | 'success';
//     fetch: () => tag[];
//     save: (data: tag[]) => void;
//     update: (id: string, name: string) => void;
//     remove: (id: string) => boolean;
// }
// type store = {
//     tagList: tag[]
//     recordList: RecordItem[]
//     createTag: (string) => void
//     removeTag: (string) => boolean
//     updateTag: (id: string, name: string) => void
//     findTag: (id: string) => Tag | undefined;
//     createRecord: (RecordItem) => void

// }
type MyTagList = Tag[]

type TagList = {
    [key: string]: Tag[];
}
