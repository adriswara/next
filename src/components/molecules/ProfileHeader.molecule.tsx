import { FC } from "react";
import ModalLoading from "@/components/molecules/modalLoading.molecule";
import ProfileNavLink from "@/components/atoms/profileNavLink.atom";

interface ProfileHeaderProps { mode: number | undefined, showModal: boolean }
const ProfileHeader: FC<ProfileHeaderProps> = (props) => {
  const {
    mode = 0,
    showModal = false
  } = props
  return (
    <div className="border rounded-lg border-solid border-[#e5e7eb] h-auto" >
      <ul>
        <ProfileNavLink navigation={"/profile"} label={"Profile"} top={1}></ProfileNavLink>
        <ProfileNavLink navigation={"/profile/changePassword"} label={"Change Password"}></ProfileNavLink>
        <ProfileNavLink navigation={"/profile/transactionList"} label={"Transaction"}></ProfileNavLink>
        <ProfileNavLink navigation={"/profile/voucherList"} label={"Your Vouchers"}></ProfileNavLink>
        <ProfileNavLink navigation={"/profile/voucherRedeem"} label={"Redeem New Voucher"}></ProfileNavLink>
        {mode == 1 ? <ProfileNavLink navigation={"/profile/leaderboard"} label={"Leaderboard"}></ProfileNavLink> : <></>}
        {mode == 1 ? <ProfileNavLink navigation={"/profile/performanceGraph"} label={"Performance Graph"}></ProfileNavLink> : <></>}
        {/* <ProfileNavLink navigation={"/profile/showcase"} label={"Showcase"}></ProfileNavLink> */}
        <ProfileNavLink navigation={"/profile/showcase2"} label={"Showcase"}></ProfileNavLink>
        <ProfileNavLink navigation={"/profile/logout"} label={"Logout"} bottom={1}></ProfileNavLink>
      </ul>
      <ModalLoading show={undefined} onClose={undefined}></ModalLoading>
    </div>

  );
}
export default ProfileHeader