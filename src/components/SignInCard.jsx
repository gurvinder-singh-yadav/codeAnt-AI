import { FaGithub, FaBitbucket, FaGitlab } from 'react-icons/fa';
import { VscAzureDevops } from 'react-icons/vsc';
import { Button } from './Button';
import logoBlack from '../assets/logoblack.svg';
import { PlatformCard } from './PlatformCard';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { atom } from 'recoil';

export function SignInCard() {
    const [mode, setMode] = useRecoilState(signinMode)
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
            <Button onClick={() => setMode("SAAS")}>
                SAAS
            </Button>
            <Button onClick={() => setMode("SHOSTED")}>
                Self Hosted
            </Button>
        </div>
        {mode == "SAAS" && <div className='flex flex-col gap-2 justify-center'>
            <PlatformCard logo={<FaGithub />} title={"Github"} />
            <PlatformCard logo={<FaBitbucket className='text-blue-500' />} title={"Github"} />
            <PlatformCard logo={<VscAzureDevops className='text-blue-700' />} title={"Github"} />
            <PlatformCard logo={<FaGitlab className='text-orange-700' />} title={"Github"} />
        </div>}
        {
            mode == "SHOSTED" && 
            <div className='flex flex-col gap-2 justify-center'>
            
                <PlatformCard logo={<VscAzureDevops className='text-blue-700' />} title={"Github"} />
                <PlatformCard logo={<FaGitlab className='text-orange-700' />} title={"Github"} />
            </div>
        }

    </div>;
}


const signinMode = atom({

    key: 'SigninMode',
    default: "SAAS",
  });