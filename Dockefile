FROM node:22-alpine

# Instalar Yarn globalmente
RUN apk add --no-cache yarn

# Criar e definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de dependências
COPY package.json yarn.lock ./

# Instalar dependências
RUN yarn install --frozen-lockfile

# Copiar o código fonte
COPY . .

# Expor a porta que o servidor usa
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["yarn", "start"]