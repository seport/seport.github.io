import React from 'react';
import forgeLogo from '@/public/forge-logo.png'
import taskrabbitLogo from '@/public/taskrabbit-logo.png';
import compassLogo from '@/public/compass-logo.png';
import FRALogo from '@/public/FRA-logo.png';
import rottentomatoesLogo from '@/public/rottentomatoes-logo.png';
import h4laLogo from '@/public/h4la-logo.png';

const Clients = () => <div id="clients">
    <img src={forgeLogo} className="logo" /> <img src={taskrabbitLogo} className="logo" /> <img src={compassLogo} className="logo" />
    <br/>
    <img src={h4laLogo} className="logo" /> <img src={FRALogo} className="logo" /> <img src={rottentomatoesLogo} className="logo" />
</div>

export default Clients;