package com.datapar.cambio.model;

import java.util.Date;

public class Cambio {
    private String extenso;
    private Date executionDate;

    public Cambio() {
        this.extenso = "";
        this.executionDate = new Date();
    }

    public Cambio(String extenso, Date executionDate) {
        this.extenso = extenso;
        this.executionDate = executionDate;
    }

    public String getExtenso() {
        return extenso;
    }

    public void setExtenso(String extenso) {
        this.extenso = extenso;
    }

    public Date getExecutionDate() {
        return executionDate;
    }

    public void setExecutionDate(Date executionDate) {
        this.executionDate = executionDate;
    }
}
