export function Highlights({ title, subtitle }) {
    return <div>
        <div className="font-bold flex justify-center text-sm items-center">
            {title}
        </div>
        <div className="font-normal text-xxs flex justify-center items-center">
            {subtitle}
        </div>
    </div>;
}
