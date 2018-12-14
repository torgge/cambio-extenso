package com.datapar.cambio.resource;


import com.datapar.cambio.model.Cambio;
import com.datapar.cambio.service.CambioService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/extenso/v1")
public class CambioResource {

    @Autowired
    CambioService service;

    Logger log = LoggerFactory.getLogger(this.getClass());

    //http://ip:port/extenso/v1/guarani/2800000
    @CrossOrigin(origins = { "*" }, maxAge = 6000)
    @RequestMapping("/guarani/{vlr}")
    public ResponseEntity<Cambio> getCambioGuarani(@PathVariable("vlr") double vlr) {
        Cambio cambio = new Cambio();
        try {
            log.info(String.format("Valor Guaraní %f", vlr));
            cambio.setExtenso(service.getExtensoGuarani(vlr));
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return !cambio.getExtenso().isEmpty() ? ResponseEntity.ok(cambio) : ResponseEntity.notFound().build();
    }

    //http://ip:port/extenso/v1/real/2800000
    @CrossOrigin(origins = { "*" }, maxAge = 6000)
    @RequestMapping("/real/{vlr}")
    public ResponseEntity<Cambio> getCambioReal(@PathVariable("vlr") double vlr) {
        Cambio cambio = new Cambio();
        try {
            log.info(String.format("Valor Real %f", vlr));
            cambio.setExtenso(service.getExtensoReal(vlr));
        } catch (Exception e) {
            log.error(e.getMessage());
        }
        return !cambio.getExtenso().isEmpty() ? ResponseEntity.ok(cambio) : ResponseEntity.notFound().build();
    }
}
