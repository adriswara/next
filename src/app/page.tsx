'use server'

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react"


async function getData(port: string) {
  
  const portlink : string = 'http://localhost:8081/' + port

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


export default async function Home() {
  const datas = await getData('vouchers')

  return (
    <main>
      <div>

       

        {datas.voucher.map((data: { id: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }, index: Key | null | undefined) => (
          <div key={index}>
            <span>{data.id}</span>
            <span>{data.title}</span>
          </div>
        ))}



      </div>
    </main>
  )
}


