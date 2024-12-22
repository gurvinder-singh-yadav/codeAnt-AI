import { MainCard } from '../components/MainCard';
import { InfoCard } from '../components/InfoCard';
import logoSlate from '../assets/logoSlate.svg';

export function SideBar() {
    return <div className="hidden h-full md:flex md:col-span-1 justify-center items-center bg-white-200 font-sans relative">
        <MainCard />
        <div className='absolute  top-1/2 left-1/4 transform translate-x-3/4 translate-y-11'>
            <InfoCard />
        </div>
        <div className='absolute bottom-0 left-0 size-[25%]'>
            <img src={logoSlate} className="logo react" alt="React logo" />
        </div>

    </div>;
}
