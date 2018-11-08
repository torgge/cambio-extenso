package com.datapar.cambio.service;

import com.datapar.cambio.shared.ConversorBrl;
import com.datapar.cambio.shared.ConversorPyg;
import org.springframework.stereotype.Service;

@Service
public class CambioService {

    public CambioService() {
    }

    public String getExtensoGuarani(Double vlr) {
        ConversorPyg conversorPyg = new ConversorPyg();
        return conversorPyg.convertNumberToLetter(vlr);
    }

    public String getExtensoReal(Double vlr) {
        ConversorBrl conversorBrl = new ConversorBrl();
        return conversorBrl.valorPorExtenso(vlr);
    }

}
