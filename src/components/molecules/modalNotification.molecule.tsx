'use client'
import React from 'react';
import { useEffect, useState } from "react";
import Image from "next/image";


const ModalNotification = ({ show, onClose, notificationType, message }) => {
  if (!show) return null;
  var imagetype = ""
  var isHidden = 0
  if (notificationType == 1) {
    imagetype = "/checkmark.gif"
  }
  else if (notificationType == 2) {
    imagetype = "/checkmark.gif"
    isHidden = 1

  }
  else if (notificationType == 3) {
    imagetype = "/warning.png"
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className='mx-auto  overflow-scroll w-60 h-52'>
          <h1 className='text-center'>{message}</h1>
          <Image className='mx-auto content-center' src={imagetype} width={200} height={200} alt="Picture of the author" />
        </div>
        <button onClick={onClose} className={`bg-blue-500 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full text-white ${isHidden === 1 ? "hidden" : ""}`}>OK</button>

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

export default ModalNotification;
