// Banco de dados de usuários do sistema Gian Casas
// Em produção real, isso ficaria em um servidor seguro (Firebase/Backend)

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
        avatar: "RA"
    },
    {
        id: 2,
        nome: "Ana Pereira",
        email: "ana@giancasas.com",
        senha: "corretor123",
        perfil: "corretor",
        creci: "12346-F",
        nivel: "Pleno",
        avatar: "AP"
    },
    {
        id: 3,
        nome: "Carlos Mendes",
        email: "carlos@giancasas.com",
        senha: "corretor123",
        perfil: "corretor",
        creci: "12347-F",
        nivel: "Junior",
        avatar: "CM"
    },
    
    // SUPERVISORES / GESTORES
    {
        id: 100,
        nome: "Kleber (Supervisor Geral)",
        email: "kleber@giancasas.com",
        senha: "supervisor123",
        perfil: "supervisor",
        cargo: "Supervisor Geral",
        avatar: "KL"
    },
    {
        id: 101,
        nome: "Marina Costa (RH)",
        email: "marina@giancasas.com",
        senha: "rh123",
        perfil: "rh",
        cargo: "Gestora de RH",
        avatar: "MC"
    }
];

// Função para verificar login
function verificarLogin(email, senha) {
    const usuario = usuariosSistema.find(u => u.email === email && u.senha === senha);
    if (usuario) {
        // Salva no localStorage (sessão do navegador)
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        return usuario;
    }
    return null;
}

// Função para pegar usuário atual
function getUsuarioLogado() {
    const dados = localStorage.getItem('usuarioLogado');
    return dados ? JSON.parse(dados) : null;
}

// Função para logout
function fazerLogout() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'login.html';
}

// Função para verificar se está logado (usado nas páginas protegidas)
function estaLogado() {
    const usuario = getUsuarioLogado();
    if (!usuario) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Dados das propostas (simulação)
const propostasSistema = [
    // Propostas do Ricardo (corretor id 1)
    { corretorId: 1, cliente: "Ana Rodrigues", imovel: "Modern Villa Cascais", valor: 3250000, comissao: 9750, status: "negociacao" },
    { corretorId: 1, cliente: "João Silva", imovel: "Ocean View Penthouse Estoril", valor: 1950000, comissao: 5850, status: "analise" },
    { corretorId: 1, cliente: "Família Santos", imovel: "Douro River Estate Villa", valor: 4500000, comissao: 13500, status: "nova" },
    { corretorId: 1, cliente: "Pedro Costa", imovel: "Comporta Luxury Beach Lodge", valor: 2800000, comissao: 8400, status: "aprovada" },
    { corretorId: 1, cliente: "Maria Ferreira", imovel: "Lisbon Downtown Luxury Loft", valor: 820000, comissao: 0, status: "rejeitada" },
    
    // Propostas da Ana (corretor id 2)
    { corretorId: 2, cliente: "Roberto Lima", imovel: "Villa Sintra", valor: 2100000, comissao: 6300, status: "analise" },
    { corretorId: 2, cliente: "Sofia Martins", imovel: "Apartamento Chiado", valor: 1200000, comissao: 3600, status: "aprovada" },
    
    // Propostas do Carlos (corretor id 3)
    { corretorId: 3, cliente: "Fernando Alves", imovel: "Casa Almada", valor: 750000, comissao: 2250, status: "nova" }
];

// Dados das visitas (simulação)
const visitasSistema = [
    { corretorId: 1, hora: "09:30", periodo: "manhã", imovel: "Modern Villa Cascais", cliente: "Ana Rodrigues", local: "Cascais", status: "confirmada" },
    { corretorId: 1, hora: "11:00", periodo: "manhã", imovel: "Ocean View Penthouse Estoril", cliente: "João Silva", local: "Estoril", status: "confirmada" },
    { corretorId: 1, hora: "15:00", periodo: "tarde", imovel: "Douro River Estate Villa", cliente: "Família Santos", local: "Porto", status: "aguardando" },
    { corretorId: 1, hora: "17:30", periodo: "tarde", imovel: "Comporta Luxury Beach Lodge", cliente: "Pedro Costa", local: "Comporta", status: "confirmada" },
    
    { corretorId: 2, hora: "10:00", periodo: "manhã", imovel: "Villa Sintra", cliente: "Roberto Lima", local: "Sintra", status: "confirmada" },
    { corretorId: 2, hora: "14:00", periodo: "tarde", imovel: "Apartamento Chiado", cliente: "Sofia Martins", local: "Lisboa", status: "confirmada" },
    
    { corretorId: 3, hora: "09:00", periodo: "manhã", imovel: "Casa Almada", cliente: "Fernando Alves", local: "Almada", status: "aguardando" }
];
