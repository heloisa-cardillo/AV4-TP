export enum TipoDocumento {
    CPF = 'Cadastro de Pessoa Física',
    RG = 'Registro Geral',
    Passaporte = 'Passaporte'
}

export enum NomeAcomodacao {
    SolteiroSimples = 'Acomodação simples para solteiro(a)',
    CasalSimples = 'Acomodação simples para casal',
    FamiliaSimples = 'Acomodação para família com até duas crianças',
    FamiliaMais = 'Acomodação para família com até cinco crianças',
    SolteiroMais = 'Acomodação com garagem para solteiro(a)',
    FamiliaSuper = 'Acomodação para até duas famílias, casal e três crianças cada'
}

export const NOME_EXIBICAO_ACOMODACAO: Record<NomeAcomodacao, string> = {
    [NomeAcomodacao.SolteiroSimples]: 'Single Bunny',
    [NomeAcomodacao.CasalSimples]: 'Velvet Bunny Suite',
    [NomeAcomodacao.FamiliaSimples]: 'Moon Bunny Lodge',
    [NomeAcomodacao.FamiliaMais]: 'The Bunny Garden',
    [NomeAcomodacao.SolteiroMais]: 'Single Bunny Premium',
    [NomeAcomodacao.FamiliaSuper]: 'Royal Burrow'
}

export const NOME_CURTO_ACOMODACAO: Record<NomeAcomodacao, string> = {
    [NomeAcomodacao.SolteiroSimples]: 'Solteiro Simples',
    [NomeAcomodacao.CasalSimples]: 'Casal Simples',
    [NomeAcomodacao.FamiliaSimples]: 'Família Simples',
    [NomeAcomodacao.FamiliaMais]: 'Família Mais',
    [NomeAcomodacao.SolteiroMais]: 'Solteiro Mais',
    [NomeAcomodacao.FamiliaSuper]: 'Família Super'
}

export interface Documento {
    numero: string;
    tipo: TipoDocumento;
    dataExpedicao: string;
}

export interface Endereco {
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    codigoPostal: string;
}

export interface Telefone {
    ddd: string;
    numero: string;
}

export interface Cliente {
    codigo: string;
    nome: string;
    nomeSocial: string;
    dataNascimento: string;
    dataCadastro: string;
    telefones: Telefone[];
    endereco: Endereco;
    documentos: Documento[];
    dependentes: string[];
    codigoTitular?: string;
    foto: string;
}

export interface Acomodacao {
    codigo: string;
    nomeAcomodacao: NomeAcomodacao;
    camaSolteiro: number;
    camaCasal: number;
    suite: number;
    climatizacao: boolean;
    garagem: number;
}

export interface Hospedagem {
    codigo: string;
    codigoCliente: string;
    codigoAcomodacao: string;
    dataCheckIn: string;
}

// ACOMODAÇÕES - dados iniciais
export const ACOMODACOES_INICIAIS: Acomodacao[] = [
    {
        codigo: 'ACOM001',
        nomeAcomodacao: NomeAcomodacao.SolteiroSimples,
        camaSolteiro: 1,
        camaCasal: 0,
        suite: 1,
        climatizacao: true,
        garagem: 0
    },
    {
        codigo: 'ACOM002',
        nomeAcomodacao: NomeAcomodacao.CasalSimples,
        camaSolteiro: 0,
        camaCasal: 1,
        suite: 1,
        climatizacao: true,
        garagem: 1
    },
    {
        codigo: 'ACOM003',
        nomeAcomodacao: NomeAcomodacao.FamiliaSimples,
        camaSolteiro: 2,
        camaCasal: 1,
        suite: 1,
        climatizacao: true,
        garagem: 1
    },
    {
        codigo: 'ACOM004',
        nomeAcomodacao: NomeAcomodacao.FamiliaMais,
        camaSolteiro: 5,
        camaCasal: 1,
        suite: 2,
        climatizacao: true,
        garagem: 2
    },
    {
        codigo: 'ACOM005',
        nomeAcomodacao: NomeAcomodacao.SolteiroMais,
        camaSolteiro: 0,
        camaCasal: 1,
        suite: 1,
        climatizacao: true,
        garagem: 1
    },
    {
        codigo: 'ACOM006',
        nomeAcomodacao: NomeAcomodacao.FamiliaSuper,
        camaSolteiro: 6,
        camaCasal: 2,
        suite: 3,
        climatizacao: true,
        garagem: 2
    }
]

// CLIENTES - dados iniciais
export const DADOS_INICIAIS = {
    clientes: [
        {
            codigo: 'HSP001',
            nome: 'José Ricardo',
            nomeSocial: 'O coelho audacioso',
            dataNascimento: '1985-03-10',
            dataCadastro: '2024-01-15',
            telefones: [{ ddd: '12', numero: '11111-1111' }],
            endereco: {
                rua: 'Rua Engenheiro Jose Longo, 622',
                bairro: 'Jardim Aquarius',
                cidade: 'São José dos Campos',
                estado: 'SP',
                pais: 'Brasil',
                codigoPostal: '12246-000'
            },
            documentos: [
                { numero: '111.111.111-11', tipo: TipoDocumento.CPF, dataExpedicao: '2005-01-01' },
                { numero: '11.111.111-1', tipo: TipoDocumento.RG, dataExpedicao: '2004-06-15' }
            ],
            dependentes: ['HSP002'],
            foto: '/imagens/jose.png'
        },
        {
            codigo: 'HSP002',
            nome: 'Daniele',
            nomeSocial: 'A coelha carinhosa',
            dataNascimento: '1990-07-22',
            dataCadastro: '2024-01-15',
            telefones: [{ ddd: '12', numero: '22222-2222' }],
            endereco: {
                rua: 'Rua Engenheiro Jose Longo, 622',
                bairro: 'Jardim Aquarius',
                cidade: 'São José dos Campos',
                estado: 'SP',
                pais: 'Brasil',
                codigoPostal: '12246-000'
            },
            documentos: [
                { numero: '222.222.222-22', tipo: TipoDocumento.CPF, dataExpedicao: '2008-03-10' },
                { numero: '22.222.222-2', tipo: TipoDocumento.RG, dataExpedicao: '2007-11-20' }
            ],
            dependentes: [],
            codigoTitular: 'HSP001',
            foto: '/imagens/dani.png'
        },
        {
            codigo: 'HSP003',
            nome: 'Amy',
            nomeSocial: 'A coelha exploradora',
            dataNascimento: '1992-11-05',
            dataCadastro: '2024-02-01',
            telefones: [{ ddd: '12', numero: '33333-3333' }],
            endereco: {
                rua: 'Rua Engenheiro Jose Longo, 622',
                bairro: 'Jardim Aquarius',
                cidade: 'São José dos Campos',
                estado: 'SP',
                pais: 'Brasil',
                codigoPostal: '12246-000'
            },
            documentos: [
                { numero: '333.333.333-33', tipo: TipoDocumento.CPF, dataExpedicao: '2010-05-15' }
            ],
            dependentes: [],
            foto: '/imagens/amy.png'
        },
        {
            codigo: 'HSP004',
            nome: 'Frida',
            nomeSocial: 'A coelha leal',
            dataNascimento: '1988-04-18',
            dataCadastro: '2024-02-10',
            telefones: [{ ddd: '12', numero: '44444-4444' }],
            endereco: {
                rua: 'Rua Engenheiro Jose Longo, 622',
                bairro: 'Jardim Aquarius',
                cidade: 'São José dos Campos',
                estado: 'SP',
                pais: 'Brasil',
                codigoPostal: '12246-000'
            },
            documentos: [
                { numero: '444.444.444-44', tipo: TipoDocumento.CPF, dataExpedicao: '2006-09-30' },
                { numero: '44.444.444-4', tipo: TipoDocumento.RG, dataExpedicao: '2005-12-01' }
            ],
            dependentes: [],
            foto: '/imagens/frida.png'
        },
        {
            codigo: 'HSP005',
            nome: 'Hanna',
            nomeSocial: 'A coelha gentil',
            dataNascimento: '1995-09-30',
            dataCadastro: '2024-03-05',
            telefones: [{ ddd: '12', numero: '55555-5555' }],
            endereco: {
                rua: 'Rua Engenheiro Jose Longo, 622',
                bairro: 'Jardim Aquarius',
                cidade: 'São José dos Campos',
                estado: 'SP',
                pais: 'Brasil',
                codigoPostal: '12246-000'
            },
            documentos: [
                { numero: '555.555.555-55', tipo: TipoDocumento.CPF, dataExpedicao: '2013-07-22' }
            ],
            dependentes: [],
            foto: '/imagens/hanna.png'
        }
    ] as Cliente[],

    hospedagens: [
        {
            codigo: 'HOS001',
            codigoCliente: 'HSP001',
            codigoAcomodacao: 'ACOM002',
            dataCheckIn: '2024-12-01'
        },
        {
            codigo: 'HOS002',
            codigoCliente: 'HSP003',
            codigoAcomodacao: 'ACOM001',
            dataCheckIn: '2024-12-03'
        },
        {
            codigo: 'HOS003',
            codigoCliente: 'HSP004',
            codigoAcomodacao: 'ACOM005',
            dataCheckIn: '2024-12-05'
        }
    ] as Hospedagem[]
}