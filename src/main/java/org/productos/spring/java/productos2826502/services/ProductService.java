package org.productos.spring.java.productos2826502.services;

import java.util.List;

import org.productos.spring.java.productos2826502.entities.Producto;
import org.productos.spring.java.productos2826502.repositories.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    //inyectar la dependencia 
    //al repositorio
    private ProductRepository repository
         = new ProductRepository();

    //operaciones de logica de negpocio
    //casos de uso, historias de ususario
    //requerimientos funcionales

    public List<Producto> findAllProducts(){
        return repository.findAll();
    }

}
