// データ取得
export async function getData() {
    const data = fetch("https://jsonplaceholder.typicode.com/users/1")
    return data
}