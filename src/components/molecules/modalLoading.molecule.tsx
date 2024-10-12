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
