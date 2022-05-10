import React from 'react';
import './header.css';
import Logoheader from './header_logo/logo';

const SideHeader = () => {
    return (
        <header className='header'>
            <div className='header_contents'>
                <div className='nav'>
                    <Logoheader/>
                </div>
                <div className='nav'>
                </div>
                <div className='nav'>
                </div>
            </div>
        </header>
    )
}
export default SideHeader;