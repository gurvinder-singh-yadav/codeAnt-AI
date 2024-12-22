import logoBlack from '../assets/logoblack.svg';
import { Highlights } from './Highlights';

export function MainCard() {
    return <div className="flex flex-col border shadow-xl rounded-xl w-3/4">
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
    </div>;
}
