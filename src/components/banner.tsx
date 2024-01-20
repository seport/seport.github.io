import React, { PropsWithChildren, ReactNode } from 'react'

export const Banner = ({ icon, button, children }: PropsWithChildren<{ icon?: ReactNode, button?: ReactNode }>) =>
    <div className='banner'>{icon && <div className='banner--icon'>{icon}</div>}<div className='banner--content'>{children}</div>{button && <div className='banner--button'>{button}</div>}</div>