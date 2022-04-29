CREATE DATABASE IF NOT EXISTS Reportes_Inmuebles;

USE Reportes_Inmuebles;

CREATE TABLE Laboratorio(
    lab_id INT unsigned NOT NULL AUTO_INCREMENT,
    lab_nom VARCHAR(28) NOT NULL,
    PRIMARY KEY (lab_id),
    KEY lab_nom (lab_nom)
);

CREATE TABLE Asignatura(
    asi_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    asi_nom VARCHAR(30) NOT NULL,
    PRIMARY KEY (asi_id),
    KEY asg_nom (asi_nom)
);

CREATE TABLE Cpu(
    cpu_nserie VARCHAR(20) NOT NULL,
    cpu_descripcion VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (cpu_nserie)
);

CREATE TABLE Teclado(
    tec_id VARCHAR(28) NOT NULL,
    tec_descripcion VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (tec_id) 
);

CREATE TABLE Mouse(
    mou_id VARCHAR(28) NOT NULL,
    mou_descripcion VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (mou_id)
);

CREATE TABLE Marca(
    mar_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    mar_nom VARCHAR(128) NOT NULL,
    PRIMARY KEY (mar_id),
    KEY mar_nom (mar_nom)
);

CREATE TABLE Monitor(
    mon_id VARCHAR(20) NOT NULL,
    mon_descripcion VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (mon_id)
);

CREATE TABLE Estado(
    est_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    est_nom VARCHAR(128) NOT NULL,
    PRIMARY KEY (est_id)
);

CREATE TABLE Prioridad(
    pri_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    pri_nom VARCHAR(100) NOT NULL,
    PRIMARY KEY (pri_id),
    KEY pri_nom (pri_nom)
);

CREATE TABLE Tecnico(
    tec_id INT NOT NULL AUTO_INCREMENT,
    tec_nombre VARCHAR(30) NOT NULL,
    tec_appat VARCHAR(20) NOT NULL,
    tec_apmat VARCHAR(20) NOT NULL,
    PRIMARY KEY (tec_id)
);

CREATE TABLE Sexo(
    sex_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    sex_nom VARCHAR(10) NOT NULL,
    PRIMARY KEY (sex_id),
    KEY sex_nom (sex_nom)
);

CREATE TABLE Profesor(
    pro_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    pro_numempleado INT UNSIGNED NOT NULL,
    pro_nombre VARCHAR(25) NOT NULL,
    pro_appat VARCHAR(25) NOT NULL,
    pro_apmat VARCHAR(25) NOT NULL,
    sex_id INT NOT NULL,
    pro_fnacimiento DATE DEFAULT NULL,
    pro_email VARCHAR(100) NOT NULL,
    pro_contrasena varchar(30) NOT NULL,
    pro_creatat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pro_active TINYINT(1) DEFAULT 1,
    PRIMARY KEY (pro_id),
    KEY pro_numempleado (pro_numempleado),
    UNIQUE KEY pro_email (pro_email),
    FOREIGN KEY (sex_id) REFERENCES Sexo(sex_id)
);

CREATE TABLE Equipo (
    equ_etiqueta VARCHAR(10) NOT NULL,
    cpu_nserie VARCHAR(20) NOT NULL,
    tec_id VARCHAR(20) NOT NULL,
    mou_id VARCHAR(20) NOT NULL,
    mar_id INT UNSIGNED NOT NULL,
    mon_id VARCHAR(20) NOT NULL,
    PRIMARY KEY (equ_etiqueta),
    KEY cpu_seria (cpu_nserie),
    KEY tec_id (tec_id),
    KEY mou_id (mou_id),
    KEY mar_id (mar_id),
    KEY mon_id (mon_id),
    FOREIGN KEY (cpu_nserie) REFERENCES Cpu (cpu_nserie),
    FOREIGN KEY (tec_id) REFERENCES Teclado (tec_id),
    FOREIGN KEY (mou_id) REFERENCES Mouse (mou_id),
    FOREIGN KEY (mar_id) REFERENCES Marca (mar_id),
    FOREIGN KEY (mon_id) REFERENCES Monitor (mon_id)
);

CREATE TABLE Reporte (
    rep_id INT NOT NULL AUTO_INCREMENT,
    lab_id INT NOT NULL,
    rep_fechhor TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    equ_etiqueta VARCHAR(10) NOT NULL,
    pro_numempleado INT UNSIGNED NOT NULL,
    asi_id INT UNSIGNED,
    rep_problema VARCHAR(255) NOT NULL,
    rep_estado ENUM(Funcional, No Funcional) DEFAULT NOT NULL,
    pri_id INT UNSIGNED NOT NULL,
    est_id INT UNSIGNED DEFAULT NULL,
    tec_id INT UNSIGNED,
    PRIMARY KEY (rep_id),
    KEY lab_id (lab_id),
    KEY rep_fechahora (rep_fechahora),
    KEY equ_etiqueta (equ_etiqueta),
    KEY pro_nombre (pro_nombre),
    KEY pro_numempleado (pro_numempleado),
    KEY asi_id (asi_id),
    KEY rep_problema (rep_problema),
    KEY rep_estado (rep_estado),
    KEY pri_id (pri_id),
    KEY est_id (est_id),
    KEY tec_id (tec_id),
    FOREIGN KEY (lab_id) REFERENCES Laboratorio (lab_id),
    FOREIGN KEY (equ_etiqueta) REFERENCES Equipo (equ_etiqueta),
    FOREIGN KEY (pro_numempleado) REFERENCES Profesor (pro_numempleado),
    FOREIGN KEY (asi_id) REFERENCES Asignatura (asi_id),
    FOREIGN KEY (pri_id) REFERENCES Prioridad (pri_id),
    FOREIGN KEY (est_id) REFERENCES Estado (est_id),
    FOREIGN KEY (tec_id) REFERENCES Tecnico (tec_id)
);