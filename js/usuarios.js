// ===== BANCO DE DADOS GIAN CASAS (VERSÃO COMPLETA) =====

const usuariosSistema = [
    // CORRETORES
    {
        id: 1,
        nome: "Ricardo Almeida",
        email: "ricardo@giancasas.com",
        senha: "corretor123",
        perfil: "corretor",
        creci: "12345-F",
        nivel: "Senior",
        avatar: "RA",
        ativo: true,
        dataCadastro: "2026-01-15"
    },
    {
        id: 2,
        nome: "Ana Pereira",
        email: "ana@giancasas.com",
        senha: "corretor123",
        perfil: "corretor",
        creci: "12346-F",
        nivel: "Pleno",
        avatar: "AP",
        ativo: true,
        dataCadastro: "2026-02-20"
    },
    {
        id: 3,
        nome: "Carlos Mendes",
        email: "carlos@giancasas.com",
        senha: "corretor123",
        perfil: "corretor",
        creci: "12347-F",
        nivel: "Junior",
        avatar: "CM",
        ativo: true,
        dataCadastro: "2026-04-10"
    },
    
    // SUPERVISORES / GESTORES
    {
        id: 100,
        nome: "Kleber Silva",
        email: "kleber@giancasas.com",
        senha: "supervisor123",
        perfil: "supervisor",
        cargo: "Supervisor Geral",
        avatar: "KL",
        ativo: true,
        dataCadastro: "2026-01-01"
    },
    {
        id: 101,
        nome: "Marina Costa",
        email: "marina@giancasas.com",
        senha: "rh123",
        perfil: "rh",
        cargo: "Gestora de RH",
        avatar: "MC",
        ativo: true,
        dataCadastro: "2026-01-01"
    },
    
    // FINANCEIRO (ESTE É O QUE ESTAVA FALTANDO!)
    {
        id: 200,
        nome: "Patricia Silva",
        email: "financeiro@giancasas.com",
        senha: "financeiro123",
        perfil: "financeiro",
        cargo: "Gerente Financeiro",
        avatar: "PS",
        ativo: true,
        dataCadastro: "2026-01-01"
    }
];

// PROPOSTAS DO SISTEMA
const propostasSistema = [
    { id: 1, corretorId: 1, cliente: "Ana Rodrigues", imovel: "Modern Villa Cascais", valor: 3250000, comissao: 9750, status: "negociacao", statusFinanceiro: "pendente", dataProposta: "2026-05-15", dataPrevisaoPagamento: "2026-06-15", dataPagamento: null, observacoes: "Aguardando assinatura" },
    { id: 2, corretorId: 1, cliente: "João Silva", imovel: "Ocean View Penthouse Estoril", valor: 1950000, comissao: 5850, status: "analise", statusFinanceiro: "pendente", dataProposta: "2026-05-20", dataPrevisaoPagamento: "2026-06-20", dataPagamento: null, observacoes: "Em análise jurídica" },
    { id: 3, corretorId: 1, cliente: "Família Santos", imovel: "Douro River Estate Villa", valor: 4500000, comissao: 13500, status: "nova", statusFinanceiro: "pendente", dataProposta: "2026-06-01", dataPrevisaoPagamento: "2026-07-01", dataPagamento: null, observacoes: "Proposta inicial" },
    { id: 4, corretorId: 1, cliente: "Pedro Costa", imovel: "Comporta Luxury Beach Lodge", valor: 2800000, comissao: 8400, status: "aprovada", statusFinanceiro: "aprovado", dataProposta: "2026-04-10", dataPrevisaoPagamento: "2026-05-10", dataPagamento: "2026-05-08", observacoes: "Pagamento realizado" },
    { id: 5, corretorId: 1, cliente: "Maria Ferreira", imovel: "Lisbon Downtown Luxury Loft", valor: 820000, comissao: 0, status: "rejeitada", statusFinanceiro: "cancelado", dataProposta: "2026-04-25", dataPrevisaoPagamento: null, dataPagamento: null, observacoes: "Cliente desistiu" },
    { id: 6, corretorId: 2, cliente: "Roberto Lima", imovel: "Villa Sintra", valor: 2100000, comissao: 6300, status: "analise", statusFinanceiro: "pendente", dataProposta: "2026-05-25", dataPrevisaoPagamento: "2026-06-25", dataPagamento: null, observacoes: "Aguardando documentação" },
    { id: 7, corretorId: 2, cliente: "Sofia Martins", imovel: "Apartamento Chiado", valor: 1200000, comissao: 3600, status: "aprovada", statusFinanceiro: "pago", dataProposta: "2026-03-15", dataPrevisaoPagamento: "2026-04-15", dataPagamento: "2026-04-12", observacoes: "Pagamento realizado" },
    { id: 8, corretorId: 3, cliente: "Fernando Alves", imovel: "Casa Almada", valor: 750000, comissao: 2250, status: "nova", statusFinanceiro: "pendente", dataProposta: "2026-06-01", dataPrevisaoPagamento: "2026-07-01", dataPagamento: null, observacoes: "Primeira proposta" }
];

// VISITAS
const visitasSistema = [
    { corretorId: 1, hora: "09:30", periodo: "manhã", imovel: "Modern Villa Cascais", cliente: "Ana Rodrigues", local: "Cascais", status: "confirmada" },
    { corretorId: 1, hora: "11:00", periodo: "manhã", imovel: "Ocean View Penthouse Estoril", cliente: "João Silva", local: "Estoril", status: "confirmada" },
    { corretorId: 1, hora: "15:00", periodo: "tarde", imovel: "Douro River Estate Villa", cliente: "Família Santos", local: "Porto", status: "aguardando" },
    { corretorId: 1, hora: "17:30", periodo: "tarde", imovel: "Comporta Luxury Beach Lodge", cliente: "Pedro Costa", local: "Comporta", status: "confirmada" },
    { corretorId: 2, hora: "10:00", periodo: "manhã", imovel: "Villa Sintra", cliente: "Roberto Lima", local: "Sintra", status: "confirmada" },
    { corretorId: 2, hora: "14:00", periodo: "tarde", imovel: "Apartamento Chiado", cliente: "Sofia Martins", local: "Lisboa", status: "confirmada" },
    { corretorId: 3, hora: "09:00", periodo: "manhã", imovel: "Casa Almada", cliente: "Fernando Alves", local: "Almada", status: "aguardando" }
];

// ===== FUNÇÕES DE AUTENTICAÇÃO =====

function verificarLogin(email, senha) {
    const usuario = usuariosSistema.find(u => u.email === email && u.senha === senha && u.ativo !== false);
    if (usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        return usuario;
    }
    return null;
}

function getUsuarioLogado() {
    const dados = localStorage.getItem('usuarioLogado');
    return dados ? JSON.parse(dados) : null;
}

function fazerLogout() {
    if (confirm('Deseja realmente sair do sistema?')) {
        localStorage.removeItem('usuarioLogado');
        window.location.href = 'login.html';
    }
}

// ===== FUNÇÕES DE GESTÃO DE EQUIPE (SUPERVISOR) =====

function getTodosFuncionarios() {
    return usuariosSistema;
}

function getCorretoresAtivos() {
    return usuariosSistema.filter(u => u.perfil === 'corretor' && u.ativo !== false);
}

function adicionarFuncionario(dados) {
    const novoId = Math.max(...usuariosSistema.map(u => u.id)) + 1;
    const novoFuncionario = {
        id: novoId,
        ...dados,
        ativo: true,
        dataCadastro: new Date().toISOString().split('T')[0],
        avatar: dados.nome.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    };
    usuariosSistema.push(novoFuncionario);
    localStorage.setItem('usuariosSalvos', JSON.stringify(usuariosSistema));
    return novoFuncionario;
}

function removerFuncionario(id) {
    const usuario = usuariosSistema.find(u => u.id === id);
    if (usuario) {
        usuario.ativo = false;
        localStorage.setItem('usuariosSalvos', JSON.stringify(usuariosSistema));
        return true;
    }
    return false;
}

function reativarFuncionario(id) {
    const usuario = usuariosSistema.find(u => u.id === id);
    if (usuario) {
        usuario.ativo = true;
        localStorage.setItem('usuariosSalvos', JSON.stringify(usuariosSistema));
        return true;
    }
    return false;
}

// ===== FUNÇÕES FINANCEIRAS =====

function atualizarStatusFinanceiro(propostaId, novoStatus, observacoes = "") {
    const proposta = propostasSistema.find(p => p.id === propostaId);
    if (proposta) {
        proposta.statusFinanceiro = novoStatus;
        if (observacoes) proposta.observacoes = observacoes;
        if (novoStatus === "pago") {
            proposta.dataPagamento = new Date().toISOString().split('T')[0];
        }
        localStorage.setItem('propostasSalvas', JSON.stringify(propostasSistema));
        return true;
    }
    return false;
}

function getComissoesAPagar(corretorId = null) {
    let comissoes = propostasSistema.filter(p => 
        p.status !== "rejeitada" && 
        p.statusFinanceiro !== "pago" && 
        p.statusFinanceiro !== "cancelado" &&
        p.comissao > 0
    );
    if (corretorId) comissoes = comissoes.filter(p => p.corretorId === corretorId);
    return comissoes.sort((a, b) => new Date(a.dataPrevisaoPagamento) - new Date(b.dataPrevisaoPagamento));
}

function getHistoricoPagamentos(corretorId = null) {
    let historico = propostasSistema.filter(p => 
        p.statusFinanceiro === "pago" || p.statusFinanceiro === "cancelado"
    );
    if (corretorId) historico = historico.filter(p => p.corretorId === corretorId);
    return historico;
}

function getTotalComissoes(corretorId = null, statusFinanceiro = null) {
    let propostas = propostasSistema;
    if (corretorId) propostas = propostas.filter(p => p.corretorId === corretorId);
    if (statusFinanceiro) propostas = propostas.filter(p => p.statusFinanceiro === statusFinanceiro);
    return propostas.reduce((total, p) => total + p.comissao, 0);
}

function gerarRelatorioMensal(mes, ano) {
    const propostasMes = propostasSistema.filter(p => {
        const data = new Date(p.dataProposta);
        return data.getMonth() + 1 === mes && data.getFullYear() === ano;
    });
    return {
        mes, ano,
        totalVendas: propostasMes.reduce((s, p) => s + p.valor, 0),
        totalComissoes: propostasMes.reduce((s, p) => s + p.comissao, 0),
        quantidadePropostas: propostasMes.length
    };
}

// Carregar dados salvos no localStorage (para manter alterações de cadastro/pagamentos)
const usuariosSalvos = localStorage.getItem('usuariosSalvos');
if (usuariosSalvos) {
    try {
        const usuariosAtualizados = JSON.parse(usuariosSalvos);
        usuariosSistema.length = 0;
        usuariosAtualizados.forEach(u => usuariosSistema.push(u));
    } catch (e) {
        console.error("Erro ao carregar usuários salvos:", e);
    }
}

const propostasSalvas = localStorage.getItem('propostasSalvas');
if (propostasSalvas) {
    try {
        const propostasAtualizadas = JSON.parse(propostasSalvas);
        propostasSistema.length = 0;
        propostasAtualizadas.forEach(p => propostasSistema.push(p));
    } catch (e) {
        console.error("Erro ao carregar propostas salvas:", e);
    }
}
