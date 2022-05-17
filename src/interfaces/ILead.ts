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
    lista_bloqueio_afiliados?: any;
    lista_bloqueio_telefone_afiliados?: any;
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
}

export interface Lead {
    id: number;
    produto_id: number;
    cliente_id: number;
    plataforma: number;
    transacao: string;
    valor: string;
    quantidade: string;
    valorRecebido: string;
    tipo_frete: string;
    descr_tipo_frete?: any;
    valor_frete: string;
    onebuyclick?: any;
    venda_upsell?: any;
    upsell_esperado?: any;
    data_inicio: string;
    data_finalizada: string;
    meioPagamento: string;
    formaPagamento: string;
    formaPagamentoCode: number;
    statusPagamento: string;
    garantiaRestante: string;
    vendedor_id: number;
    status: string;
    created_at: string;
    updated_at: string;
    link_boleto?: any;
    codigo_plano: string;
    referencia_plano: string;
    nome_plano: string;
    quantidade_plano: string;
    linha_digitavel?: any;
    ga_selfUrl?: any;
    ga_deleteDate: string;
    google_agenda: number;
    comprovante?: any;
    follow_up?: any;
    faturado: number;
    fila_faturamento: number;
    vencimento_boleto?: any;
    data_agendamento?: any;
    carrinho_descricao?: any;
    ltv: number;
    listaComissionados: any[];
    produto: Produto;
    vendedor: Vendedor
}

export interface LeadProduct {
    id: number;
    nome: string;
    email: string;
    telefone_01: string;
    telefone_02?: any;
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
    leads: Lead[];
}
