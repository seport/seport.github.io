import React from 'react';
import forgeLogo from '../forge-logo.png';
import taskrabbitLogo from '../taskrabbit-logo.png';
import compassLogo from '../compass-logo.png';
import FRALogo from '../FRA-logo.png';
import rottentomatoesLogo from '../rottentomatoes-logo.png';
import h4laLogo from '../h4la-logo.png';

const Clients = () => <div id="clients">
    <img src={forgeLogo} className="logo" /> <img src={taskrabbitLogo} className="logo" /> <img src={compassLogo} className="logo" />
    <br/>
    <img src={h4laLogo} className="logo" /> <img src={FRALogo} className="logo" /> <img src={rottentomatoesLogo} className="logo" />
</div>

export default Clients;