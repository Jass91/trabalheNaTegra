# trabalheNaTegra

Desafio desenvolvido para o processo seletivo de estágio na empresa Tegra.

Author: Jesley Cáceres Marcelino
<br>
Tecnologia: React JS

Para rodar a aplicação a partir do codigo fonte, siga os procedimentos:

1) abra o terminal e navegue até o diretório que deseja clonar o projeto.
<br>
rode git clone https://github.com/Jass91/trabalheNaTegra.git

2) no terminal rode:<br>
	npm install --save react react-dom react-router<br>
	npm install --save-dev html-webpack-plugin webpack webpack-dev-server<br>
	npm install --sabe-dev babel-core babel-loader babel-preset-react<br>

3) No arquivo package.json gerado na raiz do projeto,
na linha dentro de "scripts", insira uma nova linha contendo:
"production": "webpack -p", "start" : "webpack-dev-server"

4) no terminal, execute: npm run start

Ou veja direto no git pages:<br>
1) acesse o link: https://jass91.github.io/<br>
2) Thramm!
