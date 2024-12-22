import { SignInCard } from '../components/SignInCard';

export function SiginPanel({signinMode}) {

    return <div className="col-span-2 md:col-span-1 h-full flex justify-center items-center bg-slate-100">

        <div className='flex flex-col w-full mx-2'>
            <SignInCard />
            <div className='text-xs flex justify-center'>
                By Signing up you agree to the <span className='pl-1 font-bold'>Privacy Policy</span>
            </div>
        </div>
    </div>;
}
