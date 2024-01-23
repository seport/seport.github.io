import React from 'react';
import forgeLogo from '@/images/forgelogo.png'
import taskrabbitLogo from '@/images/taskrabbitlogo.png';
import compassLogo from '@/images/compasslogo.png';
import FRALogo from '@/images/foodrescuealliancelogo.png';
import rottentomatoesLogo from '@/images/rottentomatoeslogo.png';
import h4laLogo from '@/images/hackforlalogo.png';
import soundcloudLogo from '@/images/soundcloudlogo.png';

const Clients = () => <div id="clients">
    <div>
        <img src={forgeLogo} className="logo" alt='Forge Logo' /> <img src={taskrabbitLogo} className="logo" alt='Taskrabbit Logo' /> <img src={compassLogo} className="logo" alt="Compass Logo"/>
    </div>
    <div>
        <img src={h4laLogo} className="logo" alt="Hack For LA Logo" /> <img src={FRALogo} className="logo" alt="Food Rescue Alliance Logo" /> <img src={rottentomatoesLogo} className="logo" alt="Rotten Tomatoes Logo" /> <img src={soundcloudLogo} className="logo" alt="Soundcloud Logo" />
    </div>
</div>

export default Clients;