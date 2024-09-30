'use client'
import GetProfileInfo from "@/services/getProfileInfoData.service";



// end get data
export default function Home() {


  return (

    <main>
      <div >
        {GetProfileInfo()}
      </div>

    </main>

  );
}


