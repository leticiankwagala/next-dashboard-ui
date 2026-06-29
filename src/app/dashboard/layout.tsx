import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT SIDEBAR */}
            <div className="flex w-[14%] flex-col gap-4 p-4 md:w-[8%] lg:w-[16%] xl:w-[14%]">
                <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
                    <Image src="/logo.png" alt="Logo" width={32} height={32} />
                    <span className="hidden lg:block font-bold">Wellspring</span>
                </Link>
                <Menu/>
            </div>

            {/* MAIN CONTENT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll">
                <Navbar/>
                {children}
            </div>
        </div>
    );
}