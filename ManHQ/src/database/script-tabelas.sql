-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
CREATE DATABASE Manhq;

USE Manhq;

CREATE TABLE escola (
	idEscola INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100)
);


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100),
	email VARCHAR(50),
    idade VARCHAR (50),
	senha VARCHAR(50),
	fk_escola INT,
	FOREIGN KEY (fk_escola) REFERENCES escola(idEscola)
);

CREATE TABLE dados(
idDados INT PRIMARY KEY AUTO_INCREMENT,
genero VARCHAR (50),
idade VARCHAR (50),
leitura CHAR (2),
email VARCHAR(50),
tipoescola varchar (50)
);


CREATE TABLE livros (
idLivro INT PRIMARY KEY AUTO_INCREMENT,
nomelivro VARCHAR (50),
genero  VARCHAR (50),
lancamento  datetime,
autor VARCHAR (50)
);







Insert into escola values 
( default,'ALBINO MARIANO RODRIGUES EMEIF'),
( default,'PEDRO FERREIRA DUARTE NETO EMEF'),
( default, 'MARIA MIZUE NAGAISHI FLORENZANO PROFESSORA EMEF'),
( default,'MARIA COUTINHO FLORENZANO PROFESSORA EMEI'),
( default,'EMEF Prof Florestan Fernandes'),
( default,'Escola Estadual Professor José Vieira de Moraes'),
( default,'E. E. Paulino Nunes Esposo'),
( default,'Centro Educacional Cerimar'),
( default,'Escola Estadual Professor Alberto Conte'),
( default,'Escola Estadual Professor Dr. Laerte Ramos de Carvalho'),
( default,'EMEF Carlos Francisco Gaspar'),
( default,'Escola Poty'),
( default,'Colégio Objetivo'),
( default,'INSTIT. ASS NOVA PROJETO EDUCACAO E TRABALHO PARA PESSOA ESPECIAL');

