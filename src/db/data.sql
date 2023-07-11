CREATE DATABASE db_prueba_backend_sql;

USE db_prueba_backend_sql;

CREATE TABLE users(
    id BIGINT(20) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    email_verified_at TIMESTAMP,
    estado TINYINT(4) NOT NULL,
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    foto VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NULL,
    deleted_at TIMESTAMP DEFAULT NULL
);

CREATE TABLE productos(
    id BIGINT(20) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL UNIQUE,
    descripcion VARCHAR(255) NOT NULL,
    estado TINYINT(4) NOT NULL,
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY(created_by) REFERENCES users(id),
    FOREIGN KEY(update_by) REFERENCES users(id)
);

CREATE TABLE bodegas(
    id BIGINT(20) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL UNIQUE,
    id_responsable BIGINT(20) UNSIGNED NOT NULL,
    estado TINYINT(4) NOT NULL,
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY(id_responsable) REFERENCES users(id),
    FOREIGN KEY(created_by) REFERENCES users(id),
    FOREIGN KEY(update_by) REFERENCES users(id)
);

CREATE TABLE inventarios(
    id BIGINT(20) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_bodega BIGINT(20) UNSIGNED NOT NULL,
    id_producto BIGINT(20) UNSIGNED NOT NULL,
    cantidad INT(11) NOT NULL,
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY(id_bodega) REFERENCES bodegas(id),
    FOREIGN KEY(id_producto) REFERENCES productos(id),
    FOREIGN KEY(created_by) REFERENCES users(id),
    FOREIGN KEY(update_by) REFERENCES users(id)
);

CREATE TABLE historiales(
    id BIGINT(20) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cantidad INT(11) NOT NULL,
    id_bodega_origen BIGINT(20) UNSIGNED NOT NULL,
    id_bodega_destino BIGINT(20) UNSIGNED NOT NULL,
    id_inventario BIGINT(20) UNSIGNED NOT NULL,
    created_by BIGINT(20) UNSIGNED,
    update_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY(id_bodega_origen) REFERENCES bodegas(id),
    FOREIGN KEY(id_bodega_destino) REFERENCES bodegas(id),
    FOREIGN KEY(id_inventario) REFERENCES inventarios(id),
    FOREIGN KEY(created_by) REFERENCES users(id),
    FOREIGN KEY(update_by) REFERENCES users(id)
);