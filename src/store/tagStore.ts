import createId from '@/lib/created'


const tagStore = {
    localStorageKeyName: 'tagsList',
    tagList: [] as tag[],
    fetchTag() {
        this.tagList = JSON.parse(window.localStorage.getItem(this.localStorageKeyName) || "[]")
        return this.tagList
    },
    createTag(name: string) {
        const names = this.tagList.map(item => item.name)
        if (name) {
            if (names.indexOf(name) > -1) {
                alert("输入的标签名重复了");
                return "repeat"
            } else {
                const id = createId().toString()
                this.tagList.push({ 'id': id, 'name': name });
                this.saveTag(this.tagList);
                return "success"
            }
        } else {
            alert("不能为空");
        }
    },
    removeTag(id: string) {
        const message = window.confirm("确定要删除么？");

        if (message) {
            let index = -1
            for (let i = 0; i < this.tagList.length; i++) {
                if (this.tagList[i].id === id) {
                    index = i
                    break

                }
            }
            this.tagList.splice(index, 1)
            this.saveTag(this.tagList)
        } else {
            return false
        }
    },
    updateTag(id: string, name: string) {
        if (this.tagList.map(item => item.id).indexOf(id) > -1) {
            const names = this.tagList.map(item => item.name)
            console.log(names)
            if (names.indexOf(name) > -1) {
                return "repeat"
            }
            else {
                const tag = this.tagList.filter(item => item.id === id)[0]
                console.log(tag)
                tag.name = name
                this.saveTag(this.tagList)
                return "success"
            }
        } else {
            return "not found"
        }
    },
    findTag(id: string) {
        return this.tagList.filter((item) => item.id === id)[0]
    },
    saveTag(data: tag[]) {
        window.localStorage.setItem(this.localStorageKeyName, JSON.stringify(data))

    }

}

export default tagStore





