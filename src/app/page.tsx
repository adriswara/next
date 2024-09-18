'use client'

import AlertStatus from "@/components/organisms/alertStatus.organisms";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key, FormEvent } from "react"
// import { Data } from "D:/laragon/www/Skripsi/jonas/src/pages/getData.tsx"


// Example in a Next.js page or API route
const sendRequest = async () => {
  const response = await fetch('http://localhost:8081/api/echo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Hello from Next.js!' }),
  });

  const data = await response.json();
  console.log(data);
};



// sendRequest();



export default function Home() {

  // const datas = await GetData('vouchers')
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('fk_user'))
    console.log(formData.get('fk_voucher'))
    console.log(formData.get('is_usable'))
    const data = {
      fk_user: formData.get('fk_user'),
      fK_voucher: formData.get('fk_voucher'),
      is_usable: formData.get('is_usable'),

    };
    try {
      const response = await fetch('http://localhost:8081/insertOwnedVoucher', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },

      });

      if (response.ok) {
        console.log('ok')
        console.log(await response.json)
      }
      else {
        console.log("failed")
      }
    } catch (error) {
      console.log("epi error")
    }
  };

  return (
    <main>
      <div>
        <h1>Submit Form</h1>
        {/*  */}
        {/* <form method="POST" onSubmit={handleSubmit}>
          <input type="number" className="fk_user" id="fk_user" name="fk_user" placeholder="User Id" required />
          <input type="number" className="fk_voucher" id="fk_voucher" name="fk_voucher" placeholder="voucher id" required />
          <input type="number" className="is_usable" id="is_usable" name="is_usable" placeholder="usable" required />
          <button type="submit">Submit</button>
        </form> */}
        {/*  */}

        {/* 
        {datas.voucher.map((data: { id: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }, index: Key | null | undefined) => (
          <div key={index}>
            <span>{data.id}</span>
            <span>{data.title}</span>
          </div>
        ))} */}

      </div>
    </main>
  )
}


