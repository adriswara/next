'use client'
import GetData from "@/services/getData.service";
import GetProfileInfo from "@/services/getProfileInfoData.service";
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import { useRouter } from "next/navigation";
import { useEffect } from "react";


// end get data
export default async function Home() {
  const router = useRouter()


  return (

    <main>
      <div >
        {GetProfileInfo()}
      </div>

    </main>

  );
}


