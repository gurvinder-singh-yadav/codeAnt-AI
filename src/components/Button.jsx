export function Button({ children, onClick }) {
    return <div className={`border rounded flex justify-center w-full text-xs py-2`}>
        <button onClick={onClick}>
            {children}
        </button>
    </div>;
}
