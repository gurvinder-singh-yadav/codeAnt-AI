import { SiginPanel } from './layouts/SiginPanel';
import { SideBar } from './layouts/SideBar';

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


