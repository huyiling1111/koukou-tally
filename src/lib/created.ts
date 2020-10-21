let id: number = parseInt(window.localStorage.getItem("max_id") || "0")
function createId() {
    id += 1;
    window.localStorage.setItem('max_id', id.toString())
    return id
}
export default createId