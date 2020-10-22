import tagsListModel from "@/model/tagsListModel";


const tagStore = {
    tagList: tagsListModel.fetch(),
    createTag: (name: string) => {
        if (name) {
            if (tagsListModel.create(name) === "repeat") {
                alert("输入的标签名重复了");
            } else {
                tagsListModel.create(name);
                //这里少了id
            }
        } else {
            alert("不能为空");
        }
    },
    removeTag: (id: string) => {
        const message = window.confirm("确定要删除么？");

        if (message && tagsListModel.remove(id)) {
            return true
        } else {
            return false
        }
    },
    updateTag: (id: string, name: string) => {
        return tagsListModel.update(id, name)
    },
    findTag: function (id: string) {
        return this.tagList.filter((item) => item.id === id)[0]
    }

}
export default tagStore 