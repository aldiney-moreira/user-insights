# User Insights

Bem-vindo ao meu teste técnico! Este repositório contém a implementação de um sistema de cadastro e análise de usuários.

## Tecnologias utilizadas
- Vue JS
- Vuetify
- Vuex
- Vue Router
- Chart JS

## Configuração do projeto
### Scripts
```bash
npm install
```
```bash
npm run dev
```

## Funcionalidades Principais
- [x] Criar um formulário para cadastrar usuários.
- [ ] Apresentar um resumo da distribuição dos usuários por estado.
- [X] Apresentar um resumo da distribuição dos usuários por origem.
- [X] Apresentar uma tabela com todos os usuários cadastrados.
- [X] Bônus: Utilizar uma biblioteca para state management, como Vuex ou Pinia.

## Melhorias futuras
- [ ] Criar testes automatizados.
- [ ] Salvar usuários no localStorage.
- [ ] Permitir editar e excluir item.
- [ ] Fazer paginação da tabela de usuários.
- [ ] Fazer máscara para o input do CEP.

## Detalhes do projeto
- O projeto conta com navegação entre as páginas usando Vue Router.
- Ao cadastrar um usuário pelo formulário, os dados refletem na tabela e no gráfico.
- No formulário basta preencher o CEP que os outros campos são preenchidos automaticamente.

## Processo de aprendizagem
Ao aprender algo novo, gosto sempre de ver uma breve introdução à tecnologia, normalmente no YouTube. Após essa contextualização ao tema, parto para vídeos/publicações curtas fazendo algo e faço junto para ir me adaptando à sintaxe. Após isso, tento fazer algo sozinho, planejando o que deve ser feito.

Nesse teste passei um bom tempo planejando como faria as coisas e quais tecnologias deveria usar, por fim acabei escolhendo me desafiar para aprender novas ferramentas como: Vuex, Vue Router e Chart JS. E com a ajuda da documentação e pesquisas consegui fazer o que eu queria.

### O que eu aprendi
Apesar de já ter uma certa experiência com Vue, ela foi breve, então foi como se estivesse aprendendo de novo, mas o Vuetify auxiliou muito. Como ele se parece muito com o Material UI que já utilizei em React, foi fácil criar os componentes, usando a documentação como base. 

Fazer rotas com Vue também é muito parecido com React, então bastava entender a estrutura usando a própria documentação. Já o Vuex foi um pequeno desafio, apesar de ser muito parecido com o Redux, fazia certo tempo que não usava, então foi uma ótima oportunidade para relembrar a fazer gerenciamento de estado.

### Minhas dificuldades
Minha maior dificuldade foi com certeza a utilização da biblioteca Chart JS. Como não estava muito familiarizado com Vue e não conhecia o Vuex, acabei com problemas para fazer com que os dados que estivem no estado (users) ao serem atualizados refletissem no gráfico.

E para resolver isso criei o método `updateChart()` para atualizar os dados do gráfico com os valores mais recentes desse estado e chamei o método `update()` do Chart.js. Além disso, configurei um `watcher` para o estado origin, acionando o método `updateChart()` sempre que o estado fosse modificado.
