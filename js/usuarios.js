// ===== SISTEMA GIAN CASAS - CONECTADO AO SUPABASE =====

// Dados locais (fallback enquanto carrega do Supabase)
let usuariosSistema = [];
let propostasSistema = [];
let visitasSistema = [];

// ===== FUNÇÕES DE AUTENTICAÇÃO =====

async function verificarLogin(email, senha) {
    try {
        // Buscar usuário no Supabase
        const { data, error } = await supabase
            .from('usuarios')
            .select('*')
            .eq('email', email)
            .eq('senha', senha)
            .eq('ativo', true)
            .single();

        if (error || !data) {
            console.error('Erro no login:', error);
            return null;
        }

        // Salvar no localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(data));
        
        // Carregar dados do sistema
        await carregarDadosSistema();
        
        return data;
    } catch (err) {
        console.error('Erro ao verificar login:', err);
        return null;
    }
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

// ===== CARREGAR DADOS DO SUPABASE =====

async function carregarDadosSistema() {
    try {
        // Carregar propostas
        const { data: propostasData, error: propostasError } = await supabase
            .from('propostas')
            .select('*');
        
        if (!propostasError && propostasData) {
            propostasSistema = propostasData;
        }

        // Carregar visitas
        const { data: visitasData, error: visitasError } = await supabase
            .from('visitas')
            .select('*');
        
        if (!visitasError && visitasData) {
            visitasSistema = visitasData;
        }

        // Carregar usuários
        const { data: usuariosData, error: usuariosError } = await supabase
            .from('usuarios')
            .select('*');
        
        if (!usuariosError && usuariosData) {
            usuariosSistema = usuariosData;
        }

    } catch (err) {
        console.error('Erro ao carregar dados:', err);
    }
}

// ===== FUNÇÕES DE GESTÃO DE EQUIPE (SUPERVISOR) =====

function getTodosFuncionarios() {
    return usuariosSistema;
}

function getCorretoresAtivos() {
    return usuariosSistema.filter(u => u.perfil === 'corretor' && u.ativo !== false);
}

async function adicionarFuncionario(dados) {
    try {
        const novoId = Math.max(...usuariosSistema.map(u => u.id)) + 1;
        const novoFuncionario = {
            id: novoId,
            ...dados,
            ativo: true,
            data_cadastro: new Date().toISOString().split('T')[0],
            avatar: dados.nome.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
        };

        // Inserir no Supabase
        const { data, error } = await supabase
            .from('usuarios')
            .insert([novoFuncionario])
            .select();

        if (error) {
            console.error('Erro ao adicionar funcionário:', error);
            return null;
        }

        // Adicionar localmente
        usuariosSistema.push(novoFuncionario);
        return novoFuncionario;
    } catch (err) {
        console.error('Erro ao adicionar funcionário:', err);
        return null;
    }
}

async function removerFuncionario(id) {
    try {
        // Atualizar no Supabase (soft delete)
        const { error } = await supabase
            .from('usuarios')
            .update({ ativo: false })
            .eq('id', id);

        if (error) {
            console.error('Erro ao remover funcionário:', error);
            return false;
        }

        // Atualizar localmente
        const usuario = usuariosSistema.find(u => u.id === id);
        if (usuario) {
            usuario.ativo = false;
        }
        return true;
    } catch (err) {
        console.error('Erro ao remover funcionário:', err);
        return false;
    }
}

async function reativarFuncionario(id) {
    try {
        // Atualizar no Supabase
        const { error } = await supabase
            .from('usuarios')
            .update({ ativo: true })
            .eq('id', id);

        if (error) {
            console.error('Erro ao reativar funcionário:', error);
            return false;
        }

        // Atualizar localmente
        const usuario = usuariosSistema.find(u => u.id === id);
        if (usuario) {
            usuario.ativo = true;
        }
        return true;
    } catch (err) {
        console.error('Erro ao reativar funcionário:', err);
        return false;
    }
}

// ===== FUNÇÕES FINANCEIRAS =====

async function atualizarStatusFinanceiro(propostaId, novoStatus, observacoes = "") {
    try {
        const updateData = {
            status_financeiro: novoStatus,
            ...(observacoes && { observacoes: observacoes }),
            ...(novoStatus === "pago" && { data_pagamento: new Date().toISOString().split('T')[0] })
        };

        const { error } = await supabase
            .from('propostas')
            .update(updateData)
            .eq('id', propostaId);

        if (error) {
            console.error('Erro ao atualizar status:', error);
            return false;
        }

        // Atualizar localmente
        const proposta = propostasSistema.find(p => p.id === propostaId);
        if (proposta) {
            Object.assign(proposta, updateData);
        }
        
        return true;
    } catch (err) {
        console.error('Erro ao atualizar status:', err);
        return false;
    }
}

function getComissoesAPagar(corretorId = null) {
    let comissoes = propostasSistema.filter(p => 
        p.status !== "rejeitada" && 
        p.status_financeiro !== "pago" && 
        p.status_financeiro !== "cancelado" &&
        p.comissao > 0
    );
    
    if (corretorId) {
        comissoes = comissoes.filter(p => p.corretor_id === corretorId);
    }
    
    return comissoes.sort((a, b) => new Date(a.data_previsao_pagamento) - new Date(b.data_previsao_pagamento));
}

function getHistoricoPagamentos(corretorId = null) {
    let historico = propostasSistema.filter(p => 
        p.status_financeiro === "pago" || p.status_financeiro === "cancelado"
    );
    
    if (corretorId) {
        historico = historico.filter(p => p.corretor_id === corretorId);
    }
    
    return historico;
}

function getTotalComissoes(corretorId = null, statusFinanceiro = null) {
    let propostas = propostasSistema;
    
    if (corretorId) {
        propostas = propostas.filter(p => p.corretor_id === corretorId);
    }
    
    if (statusFinanceiro) {
        propostas = propostas.filter(p => p.status_financeiro === statusFinanceiro);
    }
    
    return propostas.reduce((total, p) => total + p.comissao, 0);
}

function gerarRelatorioMensal(mes, ano) {
    const propostasMes = propostasSistema.filter(p => {
        const data = new Date(p.data_proposta);
        return data.getMonth() + 1 === mes && data.getFullYear() === ano;
    });
    
    return {
        mes,
        ano,
        totalVendas: propostasMes.reduce((s, p) => s + p.valor, 0),
        totalComissoes: propostasMes.reduce((s, p) => s + p.comissao, 0),
        quantidadePropostas: propostasMes.length
    };
}

// ===== INICIALIZAÇÃO =====

// Carregar dados ao carregar a página
document.addEventListener('DOMContentLoaded', async function() {
    await carregarDadosSistema();
});
