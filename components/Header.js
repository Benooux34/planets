import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from "react-icons/ai";

function Header() {
  return (
    <div className="h-[60px] bg-black border border-black border-b-white border-b-2 flex justify-between items-center">
        <Link href="/">
            <div className="cursor-pointer">
                <h1 className="text-white text-2xl ml-[10%]">Freedom|Planets</h1>
            </div>
        </Link>
        <Link href="https://github.com/Benooux34?tab=repositories">
            <div className="mr-[1%] cursor-pointer">
                <AiFillGithub color="white" fontSize={30} />
            </div>
        </Link>
    </div>
  )
}

export default Header