import React from 'react';
import { createRoot } from 'react-dom/client';
import Resume from '@/pages/Resume.tsx';

import '@/style.scss';


const element = document.createElement('div');

const root = createRoot(element);
root.render(<Resume />)

document.body.appendChild(element);