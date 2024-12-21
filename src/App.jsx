import logoBlack from './assets/logoblack.svg'
import logoSlate from './assets/logoSlate.svg'
import pie from './assets/piecutout.svg'
import { FaArrowUp, FaGithub, FaBitbucket, FaGitlab} from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";

export default function App(){
    return <div>
        <SignIn />
    </div>
}
function SignIn(){
    return <div className="grid grid-cols-2 h-screen">
        <SideBar />
        <SiginPanel />
        
    </div>
}
function SideBar(){
    return <div className="hidden h-full md:flex md:col-span-1 justify-center items-center bg-white-200 font-sans relative">
            <MainCard />
            <InfoCard />
            <div className='absolute bottom-0 left-0 size-[25%]'>
                <img src={logoSlate} className="logo react" alt="React logo" />
            </div>
            
        </div>
}


 
function SiginPanel(){
    return <div className="col-span-2 md:col-span-1 h-full flex justify-center items-center bg-slate-100">
            
            <div className='flex flex-col w-full mx-2'>
                <SignInCard />
                <div className='text-xs flex justify-center'>
                    By Signing up you agree to the <span className='pl-1 font-bold'>Privacy Policy</span>
                </div>
            </div>
    </div>
}

function SignInCard(){
    return <div className='flex flex-col border p-2 bg-white rounded-xl w-full m-1'>
        <div className='flex gap-2 justify-center m-3'>
            <span className='size-5'>
                <img src={logoBlack} className="logo react" alt="React logo" />
            </span>
            <span className='text-xl font-extralight'>
                CodeAnt AI
            </span>
        </div>
        <div className='text-xl font-normal flex justify-center'>
            Welcome to CodeAnt AI
        </div>
        <div className='flex m-2 '>
            <Button onClick={() => console.log(
                "button SAAS clicked"
            )}>
                SAAS
            </Button>
            <Button onClick={() => console.log(
                "button SAAS clicked"
            )}>
                Self Hosted
            </Button>
        </div>
        <div className='flex flex-col gap-1'>
            <PlatformCard logo={<FaGithub />} title={"Github"}/>
            <PlatformCard logo={<FaBitbucket className='text-blue-500'/>} title={"Github"}/>
            <PlatformCard logo={<VscAzureDevops className='text-blue-700'/>} title={"Github"}/>
            <PlatformCard logo={<FaGitlab className='text-orange-700'/>} title={"Github"}/>
        </div>
        
    </div>
}

function PlatformCard({logo, title}){
    return <div className='flex w-3/4 justify-center border rounded mx-10 gap-2 p-2'>
        <span className='size-3'>
            {logo}
        </span>
        <span className='text-xs'>
            Sign in with {title}
        </span>
    </div>
}

function Button({children, onClick}){
    return <div className='bg-blue-300 border rounded flex justify-center w-full text-xs py-2'>
        <button onClick={onClick}>
            {children}
        </button>
    </div>
}

function Highlights({title, subtitle}){
    return <div>
        <div className="font-bold flex justify-center text-sm items-center">
                    {title}
                </div>
                <div className="font-normal text-xxs flex justify-center items-center">
                    {subtitle}
                </div>
    </div>
}

function InfoCard(){
    return <div className='border rounded-xl shadow-xl grid grid-cols-2 place-content-between p-2 gap-1 max-w-[60%]'>
            <div className='size-8 ml-2'>
                <img src={pie} className="logo react" alt="React logo" />
            </div>
            <div className='flex flex-col'>
                <div className='flex text-blue-600 gap-1'>
                    <span className=''>
                        <FaArrowUp className='size-3'/>
                    </span>
                    <span className='font-bold text-xs'>14%</span>
                </div>
                <div className='text-xxs flex justify-center'>
                    This week
                </div>
            </div>
            <div className='flex flex-col text-bold p-2 whitespace-nowrap'>
                <span className='text-xxs'>
                    Issues Fixed
                </span>
                <div className='text-xl font-bold'>
                    500k+
                </div>
            </div>
        </div>
}

function MainCard(){
    return <div className="flex flex-col border shadow-xl rounded-xl">
                <div className="font-bold text-xs flex gap-1 py-3 pl-2 pr-12">
                    <span className='size-4'>
                        <img src={logoBlack} className="logo react" alt="React logo" />
                    </span>
                    <span className='py-1'>
                        AI to Detect & Autofix Bad Code
                    </span>
                </div>
                <hr />
                <div className="flex gap-6 p-3">
                    <Highlights title={"30+"} subtitle={"Language Support"} />
                    <Highlights title={"10K+"} subtitle={"Developers"} />
                    <Highlights title={"100K+"} subtitle={"Hours Saved"} />
                </div>
            </div>
}