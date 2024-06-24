import Image from "next/image";
import { relative } from "path";

export default function profile({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
const profileCard = {
    backgroundColor: "green",
    position: "absolute"
}
    return (
        <section>
            <div style={{ height: 250, width: '100%', position: "relative" }}>
                <Image src="/profile.png" fill alt="Picture of the author" />
            </div>
            <div >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus iste voluptate incidunt velit repellat porro maiores minus accusantium deleniti cumque inventore impedit, earum excepturi officia ea. Aliquid, eligendi. Magni, placeat.
            </div>
        </section>

    );
}