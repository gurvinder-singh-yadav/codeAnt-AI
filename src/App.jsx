import { SiginPanel } from './layouts/SiginPanel';
import { SideBar } from './layouts/SideBar';


import { useState } from 'react';
;

import { Dashboard } from './layouts/Dashboard';

export default function App(){
    return <div>
        <Dashboard />
    </div>
}



function SignIn(){
    return <div className="grid grid-cols-2 h-screen">
        <SideBar />
        <SiginPanel />
    </div>
}



