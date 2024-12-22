export function PlatformCard({ logo, title }) {
    return <div className='flex justify-center border rounded mx-10 gap-2 p-2'>
        <span className='size-3'>
            {logo}
        </span>
        <span className='text-xs'>
            Sign in with {title}
        </span>
    </div>;
}
