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
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10
    }
    const voucherList = {
        margin: 20
    }

    const voucherObject = {
        border: "1px solid lightGrey",
        borderRadius: 5,
        display: "grid",
        gridTemplateColumns: "auto auto",
        marginTop: -1,
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20
    }

    const voucherLeftComponent = {
        marginLeft: 20
    }

    const voucherRightComponent = {

    }
    const voucherRightCode = {
        display: "grid",
        gridTemplateColumns: "auto auto"
    }

    const voucherRightStatus = {
        paddingTop: 75,
        paddingLeft: 130,
        width: 280,
        float: "right",
    }
    const buttonVoucherRightStatusActive = {
        border: "1px solid lightGrey",
        borderRadius: 15,
        backgroundColor: "darkGreen",
        color: "white",
        fontSize: 13,
        width: 60,
        height: 30,
        marginLeft: 30
    }
    const buttonVoucherRightStatusNotAvailable = {
        border: "1px solid lightGrey",
        borderRadius: 15,
        backgroundColor: "darkGrey",
        color: "white",
        fontSize: 13,
        width: 120,
        height: 30,
    }

    const hugetextVoucher = {
        fontSize: 30
    }
    const bigTextVoucher = {
        fontSize: 14
    }
    const descTextVoucher = {
        fontSize: 12,
        color: "grey"
    }

    const voucherCodeLine = {
        color: "darkblue",
        fontSize: 14,
        marginLeft: 150,
        marginRight: -30
    }

    const voucherCodeCopy = {
        fontSize: 14,
        display: "grid",
        gridTemplateColumns: "auto auto",
        width: 70,
        marginRight: -70
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
                        <div style={hugetextVoucher}>X% OFF</div>
                        <div style={bigTextVoucher}>FOR WHOLE ORDER</div>
                        <div style={descTextVoucher}>XX/XX/XXXX XX:XX - XX/XX/XXXX XX:XX</div>
                        <div style={descTextVoucher}>For All products</div>
                        <div style={descTextVoucher}>Combination: get xx% off when....</div>
                    </div>
                    <div style={voucherRightComponent}>
                        <div style={voucherRightCode}>
                            <div style={voucherCodeLine}>Code: CODE_123sksdiof</div>
                            <div style={voucherCodeCopy}>
                                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >
                                    <title>copy-line</title>
                                    <path d="M29.5,7h-19A1.5,1.5,0,0,0,9,8.5v24A1.5,1.5,0,0,0,10.5,34h19A1.5,1.5,0,0,0,31,32.5V8.5A1.5,1.5,0,0,0,29.5,7ZM29,32H11V9H29Z"></path><path d="M26,3.5A1.5,1.5,0,0,0,24.5,2H5.5A1.5,1.5,0,0,0,4,3.5v24A1.5,1.5,0,0,0,5.5,29H6V4H26Z" ></path>
                                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                                </svg>
                                Copy
                            </div>
                        </div>
                        <div style={voucherRightStatus}><button type="button" disabled style={buttonVoucherRightStatusActive}>ACTIVE</button></div>
                    </div>
                </div>
                <div style={voucherObject}>
                    <div style={voucherLeftComponent}>
                        <div style={hugetextVoucher}>X% OFF</div>
                        <div style={bigTextVoucher}>FOR WHOLE ORDER</div>
                        <div style={descTextVoucher}>XX/XX/XXXX XX:XX - XX/XX/XXXX XX:XX</div>
                        <div style={descTextVoucher}>For All products</div>
                        <div style={descTextVoucher}>Combination: get xx% off when....</div>
                    </div>
                    <div style={voucherRightComponent}>
                        <div style={voucherRightCode}>
                            <div style={voucherCodeLine}>Code: CODE_123sksdiof</div>
                            <div style={voucherCodeCopy}>
                                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >
                                    <title>copy-line</title>
                                    <path d="M29.5,7h-19A1.5,1.5,0,0,0,9,8.5v24A1.5,1.5,0,0,0,10.5,34h19A1.5,1.5,0,0,0,31,32.5V8.5A1.5,1.5,0,0,0,29.5,7ZM29,32H11V9H29Z"></path><path d="M26,3.5A1.5,1.5,0,0,0,24.5,2H5.5A1.5,1.5,0,0,0,4,3.5v24A1.5,1.5,0,0,0,5.5,29H6V4H26Z" ></path>
                                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                                </svg>
                                Copy
                            </div>
                        </div>
                        <div style={voucherRightStatus}><button type="button" disabled style={buttonVoucherRightStatusNotAvailable}>NOT AVAILABLE</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


