'use client'
import React from 'react';
import { useEffect, useState } from "react";
import Image from "next/image";


const ModalLoading = ({ show, onClose }) => {
  if (!show) return null;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);


  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className='mx-auto  overflow-scroll w-60 h-52'>
          <h1 className='text-center'>Loading, please wait...</h1>
          <Image className=' mt-10 mx-auto content-center' src="/loading.webp" width={70} height={70} alt="Picture of the author" />
        </div>
        {/* <button onClick={onClose} className="bg-red-500 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full" >Close</button> */}

      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default ModalLoading;
