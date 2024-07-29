import { FC } from "react"

interface PasswordLabelProps { type: string, placeholder?: string }
const PasswordLabel: FC<PasswordLabelProps> = (props) => {
    const {
        type = "",
        placeholder = " " + type + " Password "
    } = props
    return (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor=":rg:-form-item">{placeholder}</label>
    )

}
export default PasswordLabel