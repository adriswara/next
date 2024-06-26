import Image from "next/image";

export default function Home() {
    const profileCard = {
        border: "1px solid lightGrey",
        borderRadius: 10,
        marginLeft: -825,
        marginRight: 145
    }

    const voucherNav = {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        marginTop: 10
    }

    const searchBar = {
        border: "1px solid lightGrey",
        borderRadius: 5,
        display: "grid",
        gridTemplateColumns: "auto auto",
        width: 280,
        height: 40,
        marginLeft: 20

    }

    const searchBarMagnifier = {
        marginTop: 9,
        marginLeft: 12
    }

    const searchBarInput = {
        height: 35
    }

    const dropdown = {
        border: "1px solid lightGrey",
        borderRadius: 5,
        backgroundColor: "white",
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
    const voucherList = {
        border: "1px solid lightGrey",
        borderRadius: 5
    }

    const voucherObject = {
        display: "grid",
        gridTemplateColumns: "auto auto",
    }

    const voucherLeftComponent = {

    }

    const voucherRightComponent = {

    }
    const voucherRightCode = {
        display: "grid",
        gridTemplateColumns: "auto auto"
    }

    const voucherRightStatus ={

    }


    return (
        <div style={profileCard}>
            <div style={voucherNav}>
                <label style={searchBar}>
                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" style={searchBarMagnifier}>
                        <path d="M31.707 30.282l-9.717-9.776c1.811-2.169 2.902-4.96 2.902-8.007 0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c3.136 0 6.002-1.158 8.197-3.067l9.703 9.764c0.39 0.39 1.024 0.39 1.415 0s0.39-1.023 0-1.415zM12.393 23.016c-5.808 0-10.517-4.709-10.517-10.517s4.708-10.517 10.517-10.517c5.808 0 10.516 4.708 10.516 10.517s-4.709 10.517-10.517 10.517z"></path>
                    </svg>
                    <input type="text" name="" placeholder="Cari Voucher" style={searchBarInput} />
                </label>
                <select name="" id="" style={dropdown}>
                    <option value="" disabled selected>Jenis Photo</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <select name="" id="" style={dropdown}>
                    <option value="" disabled selected>Recent</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div style={voucherList}>
                <div style={voucherObject}>
                    <div style={voucherLeftComponent}>
                        <div>Discount nominal</div>
                        <div>for what</div>
                        <div>expire date</div>
                        <div>product desc</div>
                        <div>detail voucher</div>
                    </div>
                    <div style={voucherRightComponent}>
                        <div style={voucherRightCode}>
                            <div>voucher code</div>
                            <div> copy button</div>
                        </div>
                        <div style={voucherRightStatus}>active non active</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


