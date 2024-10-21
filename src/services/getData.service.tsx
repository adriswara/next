// get data
async function GetData(link: string) {

    if (link == undefined || link == null) {
        console.log("link = null")
        return
    }
    else {
        const portlink: string = 'http://localhost:8081/' + link

        const res = await fetch(portlink)
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }


        return res.json()
        // return JSON.stringify(res)
    }
}
export default GetData