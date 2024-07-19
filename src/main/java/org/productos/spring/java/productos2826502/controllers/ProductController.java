package org.productos.spring.java.productos2826502.controllers;

import java.util.List;

import org.productos.spring.java.productos2826502.entities.Producto;
import org.productos.spring.java.productos2826502.services.Product;
import org.productos.spring.java.productos2826502.services.ProductService;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/products")
public class ProductController {

    //inyectar el servicio
    private ProductService service = 
                    new ProductService();

    //Primer endpoint
    //Endpoint: un metodo en un controlador

    @GetMapping("/saludo")
    public String saludo(){
        return "Hola ... 2826502";

    }

    //Segundo endpoint
    //Get: obtener informacion SIN ALTERARLA
    //  (inmutable)
    @GetMapping("/{idproducto}")
    public String findProductById(@PathVariable String idproducto) {
        return "aqui se mostrará el producto cuyo id es:" + idproducto;
    }

    @GetMapping
    public List<Producto> findAllProducts(){
        //utilizo el servicio
        return service.findAllProducts();}
    
    

}
