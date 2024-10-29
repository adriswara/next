import PasswordField from "@/components/molecules/PasswordField.molecule";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const headersList = headers()
const pathname = headersList.get('x-pathname');
export default function Home() {

    return (
        <div className="py-6 px-6 w-full h-full border-2 border-solid border-jonasBorder rounded-[10px]">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Leaderboard</h3>
            <div className="border-gray-100 mt-2">
            </div>
        </div>
    );
}


