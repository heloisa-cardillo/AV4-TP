import React from 'react';
import './Menu.css';

interface MenuProps {
    onNavigate: (tela: string) => void;
    telaAtiva: string;
}

const Menu: React.FC<MenuProps> = ({ onNavigate, telaAtiva }) => {

    const menuItems = [
        {
            id: 'hospedes',
            label: 'Hóspedes',
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            id: 'acomodacoes',
            label: 'Acomodações',
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            id: 'hospedagens',
            label: 'Hospedagens',
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        }
    ];

    return (
        <div className="sidebar">
            <div className="logo-section">
                <div className="logo-icon">
                    <img src="/icones/logo.png" alt="Atlantis Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                </div>
                <div className="logo-text">ATLANTIS</div>
            </div>

            <nav className="menu-nav">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className={`menu-item ${telaAtiva === item.id ? 'active' : ''}`}
                        onClick={() => onNavigate(item.id)}
                    >
                        <span className="menu-icon">{item.icon}</span>
                        <span className="menu-label">{item.label}</span>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Menu;