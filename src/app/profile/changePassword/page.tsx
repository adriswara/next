import PasswordField from "@/components/molecules/PasswordField.molecule";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const headersList = headers()
const pathname = headersList.get('x-pathname');
console.log(pathname)
export default function Home() {
    
    return (
        <div className="py-6 px-6 w-full h-full border-2 border-solid border-jonasBorder rounded-[10px]">
                  <div>Referer: {pathname}</div>

            <h3 className="text-base font-semibold leading-7 text-gray-900">Change Password</h3>
            <div className="border-gray-100 mt-2">
                <form className="space-y-2">
                    <div className="space-y-2">
                        <PasswordField label={"Old"}></PasswordField>
                        <PasswordField label={"New"}></PasswordField>
                        <PasswordField label={"Retype"}></PasswordField>
                        <div className="text-right pt-2"><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" type="submit">Change Password</button></div>
                    </div>
                    <div className="space-y-2"></div>
                    <div className="space-y-2"></div>
                    <div className="text-right pt-2"></div>
                </form>
            </div>
        </div>
    );
}


