CREATE TABLE TIPO_SUSCRIPCION(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50)
)

CREATE TABLE SUSCRIPCION (

    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50),
    Id_Tipo INT,
    FOREIGN KEY (Id_Tipo) REFERENCES TIPO_SUSCRIPCION(id) 

)

CREATE TABLE USUARIO (

    ID INT AUTO_INCREMENT PRIMARY KEY,
    Code Varchar(100),
    Nombre Varchar(100),
    Correo Varchar (100),
    Password Varchar(100)

)

CREATE TABLE Planes(

    ID INT AUTO_INCREMENT PRIMARY KEY,
    USUARIO_ID_FK INT,
    SUSCRIPCION_ID_FK INT,
    PRECIO INT,
    FACTURACION DATE,
    FOREIGN KEY (USUARIO_ID_FK) REFERENCES USUARIO(ID),
    FOREIGN KEY (SUSCRIPCION_ID_FK) REFERENCES SUSCRIPCION(ID)


)

-- INGRESOS A LA TABLA DE TIPO DE SUSCRIPCIÓN 

INSERT INTO TIPO_SUSCRIPCION VALUES (NULL,'Música'); -- 1
INSERT INTO TIPO_SUSCRIPCION VALUES (NULL,'Comida'); -- 2
INSERT INTO TIPO_SUSCRIPCION VALUES (NULL,'Videojuegos'); -- 3
INSERT INTO TIPO_SUSCRIPCION VALUES (NULL,'Series y Películas'); -- 4
INSERT INTO TIPO_SUSCRIPCION VALUES (NULL,'Deporte'); -- 5
INSERT INTO TIPO_SUSCRIPCION VALUES (NULL,'Libros'); -- 6
INSERT INTO TIPO_SUSCRIPCION VALUES (NULL,'Streaming'); -- 7
INSERT INTO TIPO_SUSCRIPCION VALUES (NULL,'Otros'); -- 8

-- FIN DE INGRESOS A LA TABLA DE SUSCRIPCIONES

-- INICIO DE INGRESO A LA TABLA DE SUSCRIPCIÓN

INSERT INTO SUSCRIPCION VALUES (NULL, 'Netflix', 4);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Amazon Prime', 4);
INSERT INTO SUSCRIPCION VALUES (NULL, 'HBO Max', 4);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Disney +', 4);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Star +', 4);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Apple TV +', 4);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Paramount +', 4);
INSERT INTO SUSCRIPCION VALUES (NULL, 'LionsGate', 4);

INSERT INTO SUSCRIPCION VALUES (NULL, 'Spotify', 1);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Youtube Music', 1);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Amazon Music', 1);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Apple Music', 1);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Deezer', 1);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Google Play Music', 1);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Tidal', 1);

INSERT INTO SUSCRIPCION VALUES (NULL, 'Twitch Prime', 3);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Xbox Game Pass', 3);
INSERT INTO SUSCRIPCION VALUES (NULL, 'PlayStation Plus', 3);
INSERT INTO SUSCRIPCION VALUES (NULL, 'PlayStation Now', 3);
INSERT INTO SUSCRIPCION VALUES (NULL, 'EA Access', 3);
INSERT INTO SUSCRIPCION VALUES (NULL, 'Nintendo Switch Online', 3);

INSERT INTO SUSCRIPCION VALUES (NULL, 'Star + (ESPN)', 5);
INSERT INTO SUSCRIPCION VALUES (NULL, 'DAZN', 5);
INSERT INTO SUSCRIPCION VALUES (NULL, 'OpenSport', 5);
INSERT INTO SUSCRIPCION VALUES (NULL, 'LaLigaSports', 5);
INSERT INTO SUSCRIPCION VALUES (NULL, 'TNT Sport', 5);

INSERT INTO SUSCRIPCION VALUES (NULL, 'Uber One', 2);

INSERT INTO SUSCRIPCION VALUES (NULL, 'Kindle Unlimited', 6);

-- FIN DE INGRESOS DE TABLA SUSCRIPCIÓN


-- INGRESO A TABLA DE USUARIOS

INSERT INTO USUARIO VALUES (NULL, 'H15ATMNXL', 'Esteban Vivanco', 'esteban@vivanco.cl', 'seguridad');


-- INGRESO DE UN PLAN

INSERT INTO planes VALUES(NULL, 1, 3, 7990, '31-05-2023');