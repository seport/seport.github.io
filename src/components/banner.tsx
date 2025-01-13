import React, { PropsWithChildren, ReactNode } from 'react'
import cx from 'classnames'

export const Banner = ({ icon, button, color, children }: PropsWithChildren<{ icon?: ReactNode, button?: ReactNode, color: 'boba' | 'info' }>) =>
    <div className={cx('banner', `banner--${color}`)}>{icon && <div className='banner--icon'>{icon}</div>}<div className='banner--content'>{children}</div>{button && <div className='banner--button'>{button}</div>}</div>