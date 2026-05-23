import React from 'react';
import './Tabela.css';

interface TabelaColumn {
    key: string;
    label: string;
    render?: (value: any, row: any) => React.ReactNode;
}

interface TabelaProps {
    columns: TabelaColumn[];
    data: any[];
    onEdit?: (item: any) => void;
    onDelete?: (item: any) => void;
    customActions?: (item: any) => React.ReactNode;
    renderExpand?: (item: any) => React.ReactNode | null;
}

const Tabela: React.FC<TabelaProps> = ({
    columns,
    data,
    onEdit,
    onDelete,
    customActions,
    renderExpand
}) => {
    const handleDelete = (item: any) => {
        if (window.confirm('Tem certeza que deseja excluir este item?')) {
            onDelete?.(item);
        }
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key}>{column.label}</th>
                        ))}
                        {(onEdit || onDelete || customActions) && <th>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length + 1} className="table-empty">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    ) : (
                        data.map((row, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    {columns.map((column) => (
                                        <td key={column.key}>
                                            {column.render
                                                ? column.render(row[column.key], row)
                                                : row[column.key]
                                            }
                                        </td>
                                    ))}
                                    {(onEdit || onDelete || customActions) && (
                                        <td>
                                            <div className="table-actions">
                                                {customActions ? (
                                                    customActions(row)
                                                ) : (
                                                    <>
                                                        {onEdit && (
                                                            <button className="btn-icon btn-edit" onClick={() => onEdit(row)} title="Editar">
                                                                <span>Editar</span>
                                                            </button>
                                                        )}
                                                        {onDelete && (
                                                            <button className="btn-icon btn-delete" onClick={() => handleDelete(row)} title="Excluir">
                                                                <span>Excluir</span>
                                                            </button>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                                {renderExpand && renderExpand(row) && (
                                    <tr>
                                        <td colSpan={columns.length + 1} style={{ padding: 0 }}>
                                            {renderExpand(row)}
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Tabela;
