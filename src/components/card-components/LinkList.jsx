import React, { useState } from 'react';
import data from '../../../linkdata';
import Link from './Link';
import * as FaIcons from 'react-icons/fa';

const LinkList = () => {
    const [links] = useState(data);
    return (
        <div className='linkList w-full flex flex-row justify-center'>
        {links.map((link) => {
            const IconComponent = FaIcons[link.icon];
            return (
                <Link url={link.url} icon={IconComponent} key={link.id} />
            );
        })}
    </div>);
}

export default LinkList;