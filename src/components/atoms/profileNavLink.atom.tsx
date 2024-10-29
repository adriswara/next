import { FC } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'


interface ProfileNavLinkProps { navigation: string, label: string, top?: number, bottom?: number }
const ProfileNavLink: FC<ProfileNavLinkProps> = (props) => {
    const {
        navigation = "/profile",
        label = "link",
        top = 0,
        bottom = 0
    } = props
    const pathname = usePathname()

    var border = top == 1 ? '' : ' border-t-2 '
    var logoutOrange = bottom == 1 ? ' text-red-500 ' : ''


    return (
        // <p>{navigation}{label}{top}{bottom}</p>
        <li className={`link ${pathname === navigation ? 'bg-[#e5e7eb]' + border + 'border-[#e5e7eb]  pr-0 py-2 px-4 font-semibold' + logoutOrange : ' border-[#e5e7eb]' + border + ' pr-0 py-2 px-4' + logoutOrange}`}><Link href={navigation} className="text-sm pt[8px] pb[5px]  pr-[1rem]">{label}</Link></li>
    )
}
export default ProfileNavLink