export interface ListaComissionado {
    id: number;
    lead_id: number;
    refAfiliado: string;
    nome: string;
    tipo_comissao: string;
    valor: string;
    comissao?: any;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface Produto {
    id: number;
    produtor_id: number;
    user_id: number;
    nome: string;
    sigla: string;
    url: string;
    kapsula_id?: any;
    fisico: number;
    afiliado: number;
    lista_bloqueio_afiliados: string;
    lista_bloqueio_telefone_afiliados: string;
    status: number;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
    tipo_transacao: string;
    email_suporte: string;
    contato_suporte: string;
    tipo_comissao: number;
    valor_comissao: string;
}

export interface Vendedor {
    id: number;
    name: string;
    nomeSimplificado: string;
}

export interface Lead {
    id: number;
    valorRecebido: string;
    valor: string;
    status: string;
    meioPagamento: string;
    formaPagamento: string;
    statusPagamento: string;
    data_inicio: string;
    data_finalizada?: any;
    vendedor_id: number;
    produto_id: number;
    listaComissionados: ListaComissionado[];
    produto: Produto;
    vendedor: Vendedor;
}

export interface LeadLog {
    id: number;
    lead_id: number;
    cliente_id: number;
    retorno_id: number;
    status: number;
    created_at: string;
    updated_at: string;
    lead: Lead;
}

export interface LeadProduct {
    id: number;
    nome: string;
    email: string;
    telefone_01: string;
    telefone_02: string;
    cnpj_cpf: string;
    data_nascimento: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    created_at: string;
    updated_at: string;
    lead_log: LeadLog[];
}