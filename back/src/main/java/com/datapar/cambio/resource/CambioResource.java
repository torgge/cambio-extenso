package com.datapar.cambio.resource;


import com.datapar.cambio.service.CambioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/extenso/v1")
public class CambioResource {

    @Autowired
    CambioService service;
    //http://ip:port/extenso/v1/guarani/2800000
    @RequestMapping("/guarani/{vlr}")
    public ResponseEntity<String> getCambioGuarani(@PathVariable("vlr") Double vlr) {
        String extenso = service.getExtensoGuarani(vlr);
        return !extenso.isEmpty() ? ResponseEntity.ok(extenso) : ResponseEntity.notFound().build();
    }

    //http://ip:port/extenso/v1/real/2800000
    @RequestMapping("/real/{vlr}")
    public ResponseEntity<String> getCambioReal(@PathVariable("vlr") Double vlr) {
        String extenso = service.getExtensoReal(vlr);
        return !extenso.isEmpty() ? ResponseEntity.ok(extenso) : ResponseEntity.notFound().build();
    }
}
