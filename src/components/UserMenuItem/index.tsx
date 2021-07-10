
import React from 'react';
import { Link } from 'react-router-dom';

interface IAsideItem {
    icon: any;
    label: string;
    path: string;
}

const UserMenuItem: React.FC<IAsideItem> = ({ icon, label, path }) => {
    return (
        <div>

            <Link to={path}>
                {icon}
                <h4> {label} </h4>
            </Link>
        </div>
    );
}

export default UserMenuItem;