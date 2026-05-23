import { useState, useEffect } from 'react';

/* customizado para gerenciar dados no localStorage - Funciona apenas no front-end (navegador)*/
export function useLocalStorage<T>(key: string, valorInicial: T) {

    const [valor, setValor] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : valorInicial;
        } catch (error) {
            console.error(`Erro ao carregar ${key} do localStorage:`, error);
            return valorInicial;
        }
    });

    // Salvar no localStorage sempre que o valor mudar
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(valor));
        } catch (error) {
            console.error(`Erro ao salvar ${key} no localStorage:`, error);
        }
    }, [key, valor]);

    return [valor, setValor] as const;
}

export function baixarComoTXT(conteudo: string, nomeArquivo: string) {
    try {
        // Criar um blob com o conteúdo
        const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });

        // Criar uma URL temporária
        const url = window.URL.createObjectURL(blob);

        // Criar um link temporário e clicar nele
        const link = document.createElement('a');
        link.href = url;
        link.download = nomeArquivo;
        document.body.appendChild(link);
        link.click();

        // Limpar
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        return true;
    } catch (error) {
        console.error('Erro ao baixar arquivo:', error);
        return false;
    }
}