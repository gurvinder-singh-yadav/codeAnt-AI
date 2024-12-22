import { FaArrowUp } from 'react-icons/fa';
import pie from '../assets/piecutout.svg';

export function InfoCard() {
    return <div className='border rounded-xl shadow-xl grid grid-cols-2 place-content-between p-1 gap-1  bg-white'>
        <div className='size-8 ml-2 mt-1'>
            <img src={pie} className="logo react" alt="React logo" />
        </div>
        <div className='flex flex-col'>
            <div className='flex text-blue-600 justify-center gap-1 pt-2'>
                <span className=''>
                    <FaArrowUp className='size-3' />
                </span>
                <span className='font-bold text-xs'>14%</span>
            </div>
            <div className='text-xxs flex justify-center'>
                This week
            </div>
        </div>
        <div className='flex flex-col text-bold p-1 whitespace-nowrap'>
            <span className='text-xxs'>
                Issues Fixed
            </span>
            <div className='text-xl font-bold'>
                500k+
            </div>
        </div>
    </div>;
}
