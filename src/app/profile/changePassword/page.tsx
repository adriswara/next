import Image from "next/image";

export default function Home() {

    return (
        <div className="w-full h-full border-2 border-solid border-jonasBorder rounded-[10px]">
            <div>Old Password <input type="text" name="" placeholder="Cari Voucher" className="h-9" />
            </div>
            <div>New Password <input type="text" name="" placeholder="Cari Voucher" className="h-9" />
            </div>
        </div>
    );
}


