'use client'

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key, FormEvent } from "react"
// import { Data } from "D:/laragon/www/Skripsi/jonas/src/pages/getData.tsx"

async function getData(port: string) {

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

  // const datas = await getData('vouchers')
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      employee_name: formData.get('employee_name'),
      employee_age: formData.get('employee_age'),
      employee_salary: formData.get('employee_salary'),

    };
    try {
      const response = await fetch('http://localhost:8081/employeePost',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},

      });
      if (response.ok) {
        console.log('ok')
        console.log(await response.json)
      }
      else{
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
        <form method="POST" onSubmit={handleSubmit}>
          <input type="text" className="employee_name" id="employee_name" name="employee_name" placeholder="employee_name" required />
          <input type="text" className="employee_age" id="employee_age" name="employee_age" placeholder="employee_age" required />
          <input type="text" className="employee_salary" id="employee_salary" name="employee_salary" placeholder="employee_salary" required />
          <button type="submit">Submit</button>
        </form>


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


