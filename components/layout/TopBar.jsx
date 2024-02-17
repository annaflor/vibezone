"use client"
//import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Search, Add, Logout } from "@mui/icons-material";
import { SignedIn, SignOutButton } from "@clerk/clerk-react";
import Link from "next/link";
import Image from "next/image";

const TopBar = () => {
   //const router = useRouter();
    const [search, setSearch] = useState("");

    return (
        <div className="flex justify-between items-center mt-6">
            <div className="relative">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search posts, people, ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Search 
                className="search-icon"
                onClick={() => {}} 
                />
            </div>

            <button
            className="create-post-btn"
            onClick={() => router.push("/create-post")}>
                <Add />
                <p> Create a Post </p>
            </button>

            <div className="flex-gap-3">
                <SignedIn>
                    <SignOutButton>
                        <div className="flex cursor-pointer gap-4 items-center">
                            <Logout sx={{ color: "white", fontSize: "32px" }} />
                            <p className="text-body-bold text-light-1"> Log Out</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
                <Link href="/">
                <Image
                    src="/assets/fotoAna.png"
                    alt="profile photo"
                    width={50}
                    height={50}
                    className="rounded-full md:hidden"
                />
            </Link>
            </div>

           
        </div>
    );
};

export default TopBar;
