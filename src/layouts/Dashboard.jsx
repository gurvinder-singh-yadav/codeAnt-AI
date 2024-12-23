import { useState } from "react"
import { RxCross1 } from "react-icons/rx"
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logoBlack from '../assets/logoblack.svg';


export function Dashboard(){
    return <div className='flex flex-col md:flex-row'>
        <NavBar />
        <MainContent />
    </div>
}
function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    return <div className='flex flex-col bg-slate-200 w-full md:w-1/5 md:h-screen'>
            <div className='flex justify-between whitespace-nowrap text-sm mb-2 mx-4'>
                <div className='flex gap-2 justify-left m-3'>
                            <span className='size-6 '>
                                <img src={logoBlack} className="logo react" alt="React logo" />
                            </span>
                            <span className='text-xl font-extralight'>
                                CodeAnt AI
                            </span>
                        </div>
                <div className='md:flex md:hidden size-5 mt-3'>
                    {isOpen ? <RxCross1 /> : <HiOutlineBars3 />}
                </div>
            </div>
            <DropSelector>Gurvinder singh Yadav</DropSelector>
            {/* <ItemCard title={"hello"} logo={MdOutlineKeyboardArrowDown} /> */}
            
            <NavBarItems />
            
        </div>
}


function MainContent(){
    return <div className='bg-slate-100 w-full'>
            Main Content
        </div>
}

function DropSelector({children}){
    return <div className='flex justify-center text-xs mx-4'>
        <button className='border border-black rounded bg-white flex justify-between p-1 max-w-full'>
            <div className='truncate'>
                {children}
            </div>
            <div className='mt-0.5'>
                <MdOutlineKeyboardArrowDown />
            </div>
        </button>
        
    </div>
}


function IconCard({Icon, className}){
    return <div>
      {Icon && <Icon className={className}/>}
    </div>
}

function NavButton({Icon, title, classname}){
    return <div className={`flex gap-1 justify-start mx-4`}>
        <IconCard Icon={Icon} className="m-1 h-8 w-8"/>
        <div className='m-2'>
            {title}
        </div>
    </div>
}

import { IoHomeOutline } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";
import { IoMdCloudOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";

function NavBarItems(){
    return <div className="flex flex-col justify-between gap-0 mt-2 h-full bg-yellow-200">
        <div className="justify-start">
            <NavButton Icon={IoHomeOutline} title={"Repositories"} />
            <NavButton Icon={IoCodeSlashSharp} title={"AI Code Review"} />
            <NavButton Icon={IoMdCloudOutline} title={"Cloud Security"} />
            <NavButton Icon={FaBook} title={"How to Use"} />
            <NavButton Icon={IoSettingsOutline} title={"Settings"} />
        </div>
        <div className="justify-end">
            <NavButton Icon={IoCallOutline} title={"Support"} />
            <NavButton Icon={FaArrowRightFromBracket} title={"Logout"} />
        </div>
    </div>
}