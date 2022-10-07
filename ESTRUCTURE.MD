

<h1>
    Entendendo decisões
</h1>

O projeto é dividido em 3 camadas esta separação de camadas visa nos poupar de problemas futuros com a manutenção do software. Deixando, inclusive, o sistema completamente testável, pois as regras de negócios podem ser validadas sem a necessidade da interface do usuário, banco de dados, servidor ou qualquer outro elemento externo. Outro ponto de extrema relevância, por ser uma arquitetura de software amplamente independente, é que a princípio conseguimos fazer a substituição da interface do usuário sem que isso reflita no resto do sistema. 

<h2>
    Setup do ambiente
</h2>

node.js LTS
npm


<h3>dependencias</h3>


Como rodar na Maquina?

-clone o projeto
-entre na pasta do projeto
-digite o comando npm install
- comando npm start

Estrutura do projeto

/src - É a pasta onde todo o codigo está localizado

/src/app.ts - É o arquivo de configuração do express

/src/routes.ts - É o arquivo que está localizado as rotas da aplicação 

/src/server.ts - é onde as configurações do express são instanciadas e inicia o servidor

Dentro da pasta /src tambem estão localizado as regras de negocio da aplicação 

A aplicação é dividida em 3 camadas... 

    entidades ( /src/entities ),
    casos de uso ( /src/useCases/ ) e 
    repositories ( /src/repositories )

