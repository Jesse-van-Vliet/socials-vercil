import StaffMember from './StaffMember';
import React, { useState } from 'react';
import data from '../../../staffdata'

const StaffMemberList = () => {
    const [staff] = useState(data);
    return ( 
        <div className='sm:grid-cols-3 grid-cols-1 grid place-items-center gap-12 pb-5'>
            {staff.map((member) => {
                return (
                    <StaffMember key={member.id} Name={member.name} Role={member.role} Url={member.url} />
                );
            })}
        </div>
    );
}

export default StaffMemberList;
