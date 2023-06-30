/* CREATE DATABASE lugaresdb;
 
 \c lugaresdb; */
CREATE TABLE IF NOT EXISTS lugar(
        id_lugar INTEGER NOT NULL PRIMARY KEY,
        nombre VARCHAR(80) NOT NULL,
        id_estado INTEGER NOT NULL,
        estrellas FLOAT NOT NULL,
        total_comentarios INTEGER NOT NULL
)
INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (1, 'Aguascalientes', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (2, 'Prismas Basálticos', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (3, 'Ex hacienda de Santa María Regla', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (4, 'Peña del aire', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (5, 'Aguascalientes', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (6, 'Parroquia de San Juan Bautista', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (7, 'Aguascalientes', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (8, 'Aguascalientes', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (9, 'Bosque del zembo', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (10, 'Museo de los duendes', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (11, 'Bosque de las truchas', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (12, 'El Huariche', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (13, 'El arquito', 13, 0, 0);

INSERT INTO
        lugar(
                id_lugar,
                nombre,
                id_estado,
                estrellas,
                total_comentarios
        )
VALUES
        (14, 'Presa San Antonio', 13, 0, 0)
        /* */
        /* */
        CREATE TABLE IF NOT EXISTS estados(
                id_estado INTEGER NOT NULL PRIMARY KEY,
                nombre_estado VARCHAR(50) NOT NULL
        )
INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (1, 'Aguascalientes');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (2, 'Baja California');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (3, 'Baja California Sur');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (4, 'Campeche');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (5, 'Chiapas');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (6, 'Chihuahua');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (7, 'Ciudad de México');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (8, 'Coahuila de Zaragoza');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (9, 'Colima');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (10, 'Durango');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (11, 'Guanajuato');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (12, 'Guerrero');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (13, 'Hidalgo');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (14, 'Jalisco');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (15, 'Estado de México');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (16, 'Michoacán de Ocampo');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (17, 'Morelos');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (18, 'Nayarit');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (19, 'Nuevo León');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (20, 'Oaxaca');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (21, 'Puebla');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (22, 'Querétaro');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (23, 'Quintana Roo');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (24, 'San Luis Potosí');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (25, 'Sinaloa');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (26, 'Sonora');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (27, 'Tabasco');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (28, 'Tamaulipas');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (29, 'Tlaxcala');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (30, 'Veracruz de Ignacio de la Llave');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (31, 'Yucatán');

INSERT INTO
        estados(id_estado, nombre_estado)
VALUES
        (32, 'Zacatecas')
SELECT
        *
FROM
        estados;

/* */
/* */
--
/* */
/* */
CREATE TABLE IF NOT EXISTS transporte(
        id_transporte INTEGER NOT NULL PRIMARY KEY,
        nombre VARCHAR(30) NOT NULL
)
INSERT INTO
        transporte(id_transporte, nombre)
VALUES
        (1, 'Auto propio');

INSERT INTO
        transporte(id_transporte, nombre)
VALUES
        (2, 'Transporte público');

INSERT INTO
        transporte(id_transporte, nombre)
VALUES
        (3, 'Autobús turístico');

INSERT INTO
        transporte(id_transporte, nombre)
VALUES
        (4, 'Otro')
        /* */
        /* */
        /* */
        /* */
        CREATE TABLE IF NOT EXISTS visita(
                id_visita SERIAl NOT NULL PRIMARY KEY,
                lugar_seguro BOOLEAN NOT NULL,
                dias INTEGER NOT NULL,
                fecha DATE NOT NULL,
                hora TIME NOT NULL,
                visita_previa BOOLEAN NOT NULL,
                visita_proxima BOOLEAN NOT NULL,
                id_estado INTEGER NOT NULL,
                FOREIGN KEY(id_estado) REFERENCES estados(id_estado),
                id_transporte INTEGER NOT NULL,
                FOREIGN KEY(id_transporte) REFERENCES transporte(id_transporte),
                extranjeros BOOLEAN NOT NULL,
                numero INTEGER NOT NULL,
                id_lugar INTEGER NOT NULL,
                FOREIGN KEY(id_lugar) REFERENCES lugar(id_lugar)
        )
INSERT INTO
        visita(
                lugar_seguro,
                dias,
                fecha,
                hora,
                visita_previa,
                visita_proxima,
                id_estado,
                id_transporte,
                extranjeros,
                numero,
                id_lugar
        )
VALUES
        (
                TRUE,
                1,
                '2008/12/31',
                '13:00:59',
                FALSE,
                TRUE,
                2,
                1,
                TRUE,
                5,
                1
        )
        /* */
        /* */
        CREATE TABLE IF NOT EXISTS comentarios(
                id_comentarios SERIAL NOT NULL PRIMARY KEY,
                id_lugar INTEGER NOT NULL,
                FOREIGN KEY(id_lugar) REFERENCES lugar(id_lugar),
                id_visita INTEGER NOT NULL,
                FOREIGN KEY(id_visita) REFERENCES visita(id_visita),
                comentario VARCHAR(500),
                calificacion INTEGER NOT NULL,
                fecha DATE NOT NULL,
                hora TIME NOT NULL,
                aceptado BOOLEAN NOT NULL,
                revisado BOOLEAN NOT NULL
        )
INSERT INTO
        comentarios(
                id_lugar,
                id_visita,
                comentario,
                calificacion,
                fecha,
                hora,
                aceptado,
                revisado
        )
VALUES
        (
                1,
                1,
                'KHFG REWKJHGR',
                5,
                '2008/12/31',
                '13:00:59',
                FALSE,
                FALSE
        )
INSERT INTO
        comentarios(
                id_lugar,
                id_visita,
                comentario,
                calificacion,
                fecha,
                hora,
                aceptado,
                revisado
        )
VALUES
        (
                2,
                4,
                'KHFG REWKJHGR',
                5,
                '2008/12/31',
                '13:00:59',
                FALSE,
                FALSE
        )
        /* */
        /* */