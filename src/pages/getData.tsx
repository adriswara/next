'use server'

export { }

module Data {
    export class DataGetter {

        DataGetter() {

        }
        
        async getData(port: string) {

        const portlink: string = 'http://localhost:8081/' + port

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
}