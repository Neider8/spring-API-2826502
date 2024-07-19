package org.productos.spring.java.productos2826502.repositories;

import java.util.List;

import org.productos.spring.java.productos2826502.entities.Producto;
import org.springframework.stereotype.Repository;


@Repository

public class ProductRepository {

    //La lista de un repositorio
    //debe ser inmutable
    //la logica de un negocio no modifica
    List<Producto> productos = List.of(
        Producto.builder()
        .id(1L)
        .nombre("Silla Reclinable")
        .precio(345500.0)
        .build()
        ,
    new Producto(2L, "nombre", 576576.0)
    );

    //metodo(comportamiento) para consultar todos
    //los productos del repository
    public List<Producto> findAll(){
        return this.productos;
    }

}
