import { FC } from "react";
import PasswordLabel from "../atoms/PasswordLabel.atom";
import PasswordForm from "../atoms/PasswordForm.atom";

interface PasswordFieldProps { label: string }
const PasswordField: FC<PasswordFieldProps> = (props) => {
    const {
        label = "",
    } = props
    return (
        <div>
            <PasswordLabel type={label}></PasswordLabel>
            <PasswordForm type={label}></PasswordForm>
            <div className="absolute right-60 top-44">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye ">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            </div>
        </div>

    );
}
export default PasswordField