'use client'
import React from 'react';
import VoucherFilterForm from "@/components/molecules/VoucherFilterForm.molecule";
import VoucherOwned from "@/components/organisms/VoucherOwned.organisms";
import GetData from "@/services/getData.service";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  type ownedVoucherType = {
    id_voucher_ownership: number,
    fk_user: number,
    fk_voucher: number,
    is_usable: number,
    name_product: string,
    description_product: string,
    price_product: number,
    title: string,
    voucherType: number,
    price: number,
    discount: number,
    buyReq: number,
    itemFree: number,
    dateStart: string,
    dateEnd: string,
    productRace: string,
    code: string
    productRange: string
  }
  // get user id from cookie
  const userinfo = Cookies.get('username')
  const query = 'userGet/' + userinfo
  const [user, setUser] = useState<{ id_user: number }>()
  const userData = async () => { GetData(query).then((resp => { setUser(resp.User[0]) })).catch(resp => console.log(resp)) }
  // 
  console.log("ini id user" + user?.id_user)
  const querryVoucher = 'ownedVoucher/' + user?.id_user
  const [ownedVoucher, setOwnedVoucher] = useState<ownedVoucherType[]>()
  const dataOwnedVouchers = async () => { GetData(querryVoucher).then((resp => { setOwnedVoucher(resp.voucher_ownership); console.log(resp.voucher_ownership) })).catch(resp => console.log(resp)) }
  // 

  // 

  useEffect(() => { userData() }, [])
  useEffect(() => { dataOwnedVouchers() }, [user])
  console.log(ownedVoucher)
  return (
    <div className="modal-backdrop">
      <div className="modal-content h-screen">
        <h2>Voucher List</h2>
        <div className='overflow-scroll max-h-[calc(100vh-110px)]'>
          {ownedVoucher?.map((data: ownedVoucherType) => (
            <div>
              <VoucherOwned hideButton={0} idVoucher={data.id_voucher_ownership} voucherType={data.voucherType} is_usable={data.is_usable} discount={data.discount} buyReq={data.buyReq} itemFree={data.itemFree} title={data.title} dateStart={data.dateStart} dateEnd={data.dateEnd} productRange={data.productRange} code={data.code}></VoucherOwned>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="bg-red-500 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full" >Close</button>

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

export default Modal;
