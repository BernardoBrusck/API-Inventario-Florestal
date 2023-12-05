CREATE DATABASE inventario_florestal;
\c inventario_florestal;

CREATE TABLE reinos (
    id   SERIAL PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE filos (
    id       SERIAL PRIMARY KEY NOT NULL,
    nome     VARCHAR(100) NOT NULL,
    id_reino INTEGER NOT NULL,
    FOREIGN KEY (id_reino) REFERENCES reinos(id)
);

CREATE TABLE classes (
    id      SERIAL PRIMARY KEY NOT NULL,
    nome    VARCHAR(100) NOT NULL,
    id_filo INTEGER NOT NULL,
    FOREIGN KEY (id_filo) REFERENCES filos(id)
);

CREATE TABLE ordens (
    id        SERIAL PRIMARY KEY NOT NULL,
    nome      VARCHAR(100) NOT NULL,
    id_classe INTEGER NOT NULL,
    FOREIGN KEY (id_classe) REFERENCES classes(id)
);

CREATE TABLE familias (
    id       SERIAL PRIMARY KEY NOT NULL,
    nome     VARCHAR(100) NOT NULL,
    id_ordem INTEGER NOT NULL,
    FOREIGN KEY (id_ordem) REFERENCES ordens(id)
);

CREATE TABLE generos (
    id         SERIAL PRIMARY KEY NOT NULL,
    nome       VARCHAR(100) NOT NULL,
    id_familia INTEGER NOT NULL,
    FOREIGN KEY (id_familia) REFERENCES familias(id)
);

CREATE TABLE especies (
    id        SERIAL PRIMARY KEY NOT NULL,
    nome      VARCHAR(100) NOT NULL,
    id_genero INTEGER NOT NULL,
    FOREIGN KEY (id_genero) REFERENCES generos(id)
);

CREATE TABLE fauna (
    id              SERIAL PRIMARY KEY NOT NULL,
    nome_cientifico VARCHAR(100) NOT NULL,
    nome_popular    VARCHAR(100) NOT NULL,
    id_especie      INTEGER NOT NULL,
    FOREIGN KEY (id_especie) REFERENCES especies(id)
);

CREATE TABLE museu_entomo (
    id           INTEGER PRIMARY KEY NOT NULL,
    nome_coletor TEXT NOT NULL,
    data         DATE NOT NULL,
    local        TEXT NOT NULL,
    FOREIGN KEY (id) REFERENCES fauna(id)
);

CREATE TABLE avi_fauna (
    id                INTEGER PRIMARY KEY NOT NULL,
    habitat           TEXT NOT NULL,
    habitat_alimentar TEXT NOT NULL,
    FOREIGN KEY (id) REFERENCES fauna(id)
);

CREATE TABLE flora (
    id              SERIAL PRIMARY KEY NOT NULL,
    nome_cientifico VARCHAR(100) NOT NULL,
    nome_popular    VARCHAR(100) NOT NULL,
    id_especie      INTEGER NOT NULL,
    FOREIGN KEY (id_especie) REFERENCES especies(id)
);

CREATE TABLE inventario (
    id       INTEGER PRIMARY KEY NOT NULL,
    volume   NUMERIC NOT NULL,
    diametro NUMERIC NOT NULL,
    altura   NUMERIC NOT NULL,
    FOREIGN KEY (id) REFERENCES flora(id)
);

CREATE TABLE plantas_daninhas (
    id       INTEGER PRIMARY KEY NOT NULL,
    problema TEXT NOT NULL,
    FOREIGN KEY (id) REFERENCES flora(id)
);

CREATE TABLE plantas_medicinais (
    id INTEGER PRIMARY KEY NOT NULL,
    FOREIGN KEY (id) REFERENCES flora(id)
);

CREATE TABLE relogio_medicinal (
    id              INTEGER PRIMARY KEY NOT NULL,
    acao            TEXT NOT NULL,
    horario         TIME NOT NULL,
    plantio         TEXT NOT NULL,
    modo_uso        TEXT NOT NULL,
    contraindicacao TEXT NOT NULL,
    indicacao       TEXT NOT NULL,
    FOREIGN KEY (id) REFERENCES plantas_medicinais(id)
);

CREATE TABLE pancs (
    id              INTEGER PRIMARY KEY NOT NULL,
    plantio         TEXT NOT NULL,
    modo_uso        TEXT NOT NULL,
    contraindicacao TEXT NOT NULL,
    indicacao       TEXT NOT NULL,
    FOREIGN KEY (id) REFERENCES plantas_medicinais(id)
);

CREATE TABLE users (
    id       SERIAL PRIMARY KEY,
    nome     TEXT NOT NULL,
    cpf      TEXT NOT NULL,
    email    TEXT NOT NULL,
    telefone TEXT,
    senha    TEXT NOT NULL,
    cargo    VARCHAR(20) DEFAULT 'client' NOT NULL
);