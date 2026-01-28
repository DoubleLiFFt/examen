import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationBell = () => {
    const [isOpen, setIsOpen] = useState(false);

    const notifications = [
        "Tus egresos han superado el presupuesto establecido.",
        "CUIDADO! Tus Egresos están cerca de exceder tu presupuesto."
    ];

    const toggleNotifications = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="notification-bell" onClick={toggleNotifications}>
            <FaBell size={24} />
            <span className="notification-count">{notifications.length}</span>
            {isOpen && (
                <div className="notification-dropdown">
                    {notifications.map((notification, index) => (
                        <div key={index} className="notification-item">{notification}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NotificationBell;