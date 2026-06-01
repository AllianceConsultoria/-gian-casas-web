# Gian Casas - Imobiliária de Alto Padrão

Bem-vindo ao portal web da **Gian Casas**, uma imobiliária premium especializada em residências de luxo contemporâneas, coberturas com vista para o mar e propriedades exclusivas em Portugal.

Este é um site estático moderno, limpo, responsivo e de alta fidelidade visual, projetado com HTML5, CSS3 avançado e JavaScript puro.

## 📁 Estrutura de Arquivos

```text
/
├── index.html         # Página Inicial (com Banner Parallax, Estatísticas e Destaques)
├── imoveis.html       # Catálogo de Imóveis (com Sistema de Filtragem Dinâmico Interativo)
├── contato.html       # Formulário de Contacto Consular (com Validação de Leads e Mapa)
├── css/
│   └── style.css      # Folha de Estilo Completa (Layout Fluido, Tipografia Serif de Luxo)
└── js/
    └── main.js        # Lógica Interativa (Controlo de Filtros, Menu Responsivo e Toasts)
```

## 🚀 Como Publicar na Vercel (Sem Erros)

Se obteve um erro **404: NOT_FOUND** anteriormente na Vercel, isso ocorreu porque a ferramenta não encontrou um arquivo de entrada de página (como `index.html`) no diretório raiz do repositório no momento do deploy.

Agora que todos os arquivos estáticos necessários estão estruturados de forma limpa na raiz do seu repositório Git, o deploy na Vercel funcionará automaticamente!

### Passo a Passo de Configuração:

1. Suba este código para o seu repositório no GitHub.
2. Acesse o painel da **Vercel** e clique em **Add New > Project**.
3. Importe o seu repositório do GitHub.
4. **Configurações de Build (Framework Preset):** Selecione **Other** ou **Static Website** (a Vercel detectará automaticamente os arquivos estáticos).
5. **Root Directory:** Mantenha `./` (diretório raiz do repositório, pois o arquivo `index.html` agora está presente exatamente na raiz).
6. Clique em **Deploy**. O seu site estará online em menos de 1 minuto sem qualquer tipo de erro!

## 📱 Funcionalidades Implementadas

- **Menu Responsivo (Hambúrguer):** Adapta-se perfeitamente de grandes resoluções para telemóveis e tablets no mobile.
- **Sistema de Filtros Dinâmico (Sem Recarregamento de Página):** Na página de imóveis, os utilizadores podem refinar a busca por tipo de propriedade (Casa/Apartamento), quantidade de quartos, vagas e orçamento máximo. Os cards adaptam-se na hora através de atributos de dados (`data-*`).
- **Validação Inteligente de Contactos:** Valida em tempo real se os campos obrigatórios estão preenchidos e exibe notificações animadas do tipo *Toast* caso os dados sejam corretos ou possuam erros.
- **Identidade Estética Premium:** Utiliza cores inspiradas no tom *Slate Dark Gray* e detalhes em dourado champagne para evocar prestígio e alinhamento com imóveis de alto luxo.
