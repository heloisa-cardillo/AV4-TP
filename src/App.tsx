// src/App.tsx
import React, { useState } from 'react';
import './App.css';

import Menu from './componentes/Menu';
import Hospedes from './telas/Hospedes';
import Acomodacoes from './telas/Acomodacoes';
import Hospedagens from './telas/Hospedagens';

const App: React.FC = () => {
    const [telaAtiva, setTelaAtiva] = useState<string>('hospedes');

    const renderizarTela = () => {
        switch (telaAtiva) {
            case 'hospedes':
                return <Hospedes />;
            case 'acomodacoes':
                return <Acomodacoes />;
            case 'hospedagens':
                return <Hospedagens />;
            default:
                return <Hospedes />;
        }
    };

    return (
        <div className="app-container">
            <Menu onNavigate={setTelaAtiva} telaAtiva={telaAtiva} />
            <div className="main-content">
                <div className="content-area">
                    {renderizarTela()}
                </div>
            </div>
        </div>
    );
};

export default App;
