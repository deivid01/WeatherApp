# ☁️ WeatherApp - Previsão do Tempo Moderna

<div align="center">

![Weather App](https://img.shields.io/badge/Weather-App-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Aplicação moderna de previsão do tempo construída com React, TypeScript e Vite**

**100% funcional no GitHub Pages**

[📖 Guia Completo](GETTING_STARTED.md) • [🚀 Início Rápido](QUICKSTART.md) • [🎨 Design](DESIGN.md) • [🛠️ Troubleshooting](TROUBLESHOOTING.md)

</div>

---

## ✨ Recursos

- 🎨 **Design Moderno**: Interface limpa e intuitiva com glassmorphism
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🌍 **Dados em Tempo Real**: Informações meteorológicas atualizadas via OpenWeather API
- 🖼️ **Backgrounds Dinâmicos**: Imagens de fundo da cidade pesquisada via Unsplash
- 🚩 **Bandeiras de Países**: Exibição automática da bandeira do país
- ⚡ **Performance Otimizada**: Build otimizado com Vite para carregamento rápido
- 🌐 **Deploy Automático**: CI/CD configurado para GitHub Pages

## 🛠️ Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização moderna com animações
- **OpenWeather API** - Dados meteorológicos
- **Unsplash API** - Imagens de cidades
- **Flags API** - Bandeiras de países

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta na [OpenWeather](https://openweathermap.org/api) para obter API Key
- Git instalado

## 🚀 Instalação e Uso Local

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/WeatherApp.git
cd WeatherApp
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a API Key

Abra o arquivo `src/config.ts` e substitua `YOUR_OPENWEATHER_API_KEY_HERE` pela sua chave da API:

```typescript
const API_KEY = "sua_chave_aqui";
```

### 4. Execute o projeto

```bash
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

## 📦 Build para Produção

Para criar uma build otimizada:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🌐 Deploy no GitHub Pages

### Método 1: Deploy Automático com GitHub Actions (Recomendado)

1. **Atualize o `vite.config.ts`**: Certifique-se de que o `base` corresponde ao nome do seu repositório:

```typescript
export default defineConfig({
  plugins: [react()],
  base: "/WeatherApp/", // Substitua pelo nome do seu repositório
});
```

2. **Faça push do código para o GitHub**:

```bash
git add .
git commit -m "Setup project"
git push origin main
```

3. **Configure GitHub Pages**:
   - Vá em **Settings** → **Pages**
   - Em **Source**, selecione **GitHub Actions**
   - O deploy acontecerá automaticamente a cada push na branch `main`

4. **Acesse sua aplicação**:
   - URL: `https://seu-usuario.github.io/WeatherApp/`

### Método 2: Deploy Manual

```bash
npm run build
npm run deploy
```

## 📂 Estrutura do Projeto

```
WeatherApp/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── weather.ico             # Favicon
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx       # Barra de pesquisa
│   │   ├── SearchBar.css
│   │   ├── WeatherCard.tsx     # Card com dados do clima
│   │   ├── WeatherCard.css
│   │   ├── ErrorMessage.tsx    # Mensagem de erro
│   │   ├── ErrorMessage.css
│   │   ├── LoadingSpinner.tsx  # Indicador de carregamento
│   │   └── LoadingSpinner.css
│   ├── services/
│   │   └── weatherService.ts   # Serviços de API
│   ├── types/
│   │   └── weather.ts          # Tipos TypeScript
│   ├── App.tsx                 # Componente principal
│   ├── App.css
│   ├── main.tsx               # Entry point
│   ├── index.css
│   ├── config.ts              # Configurações de API
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Funcionalidades Principais

### Busca de Cidade

Digite o nome de qualquer cidade do mundo e receba informações meteorológicas instantâneas.

### Informações Exibidas

- 🌡️ Temperatura atual
- 💧 Umidade
- 💨 Velocidade do vento
- 🌡️ Sensação térmica
- 📊 Temperatura mínima e máxima
- ☁️ Condições climáticas

### Background Dinâmico

O fundo da aplicação muda automaticamente com uma imagem relacionada à cidade pesquisada.

### Tratamento de Erros

Mensagens claras e amigáveis quando uma cidade não é encontrada.

## 🔑 Obtendo sua API Key

1. Acesse [OpenWeather API](https://openweathermap.org/api)
2. Crie uma conta gratuita
3. Navegue até **API Keys**
4. Copie sua chave e cole em `src/config.ts`

> ⚠️ **Importante**: Nunca commite sua API key real no repositório público. Use variáveis de ambiente em produção.

## 🎨 Customização

### Alterar Cores

Edite as variáveis em `src/App.css` e nos arquivos CSS dos componentes:

```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Alterar Fonte

Modifique em `src/index.css`:

```css
font-family: "Sua Fonte", sans-serif;
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

Seu Nome

- GitHub: [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- [OpenWeather](https://openweathermap.org/) - API de dados meteorológicos
- [Unsplash](https://unsplash.com/) - Imagens de alta qualidade
- [Flags API](https://flagsapi.com/) - Bandeiras de países
- [React](https://react.dev/) - Biblioteca JavaScript
- [Vite](https://vitejs.dev/) - Build tool

---

<div align="center">
Feito com ❤️ e ☕
</div>
