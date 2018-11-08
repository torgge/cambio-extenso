package com.datapar.cambio.shared;

import java.util.InputMismatchException;
import java.util.Scanner;

/**
 * Created by George Bonespirito on 18/04/2017.
 */
public class ConversorBrl {

    public ConversorBrl() {
    }

    public void main(String[] args) {
        Scanner ler = new Scanner(System.in);

        double vlr;
        System.out.printf("Informe um valor em R$: ");
        try {
            vlr = ler.nextDouble();
            System.out.printf("\nValor por extenso:\n");
            System.out.printf("%s\n", valorPorExtenso(vlr));
        } catch (InputMismatchException e) {
            System.out.printf("\nErro: valor informado imcompatível.\n");
        }
    }

    public String valorPorExtenso(double vlr) {
        if (vlr == 0)
            return ("zero");

        long inteiro = (long) Math.abs(vlr); // parte inteira do valor
        double resto = vlr - inteiro;       // parte fracionÃ¡ria do valor

        String vlrS = String.valueOf(inteiro);
        if (vlrS.length() > 15)
            return ("Erro: valor superior a 999 trilhÃµes.");

        String s = "", saux, vlrP;
        String centavos = String.valueOf((int) Math.round(resto * 100));

        String[] unidade = {"", "um", "dois", "trÃªs", "quatro", "cinco",
                "seis", "sete", "oito", "nove", "dez", "onze",
                "doze", "treze", "quatorze", "quinze", "dezesseis",
                "dezessete", "dezoito", "dezenove"};
        String[] centena = {"", "cento", "duzentos", "trezentos",
                "quatrocentos", "quinhentos", "seiscentos",
                "setecentos", "oitocentos", "novecentos"};
        String[] dezena = {"", "", "vinte", "trinta", "quarenta", "cinquenta",
                "sessenta", "setenta", "oitenta", "noventa"};
        String[] qualificaS = {"", "mil", "milhão", "bilhão", "trilhão"};
        String[] qualificaP = {"", "mil", "milhões", "bilhões", "trilhões"};

// definindo o extenso da parte inteira do valor
        int n, unid, dez, cent, tam, i = 0;
        long d;
        boolean umReal = false, tem = false;
        while (!vlrS.equals("0")) {
            tam = vlrS.length();
// retira do valor a 1a. parte, 2a. parte, por exemplo, para 123456789:
// 1a. parte = 789 (centena)
// 2a. parte = 456 (mil)
// 3a. parte = 123 (milhÃµes)
            if (tam > 3) {
                vlrP = vlrS.substring(tam - 3, tam);
                vlrS = vlrS.substring(0, tam - 3);
            } else { // Ãºltima parte do valor
                vlrP = vlrS;
                vlrS = "0"; // vai terminar o looping
            }
            if (!vlrP.equals("000")) {
                saux = "";
                if (vlrP.equals("100"))
                    saux = "cem";
                else {
                    n = Integer.parseInt(vlrP, 10);  // para n = 371, tem-se:
                    cent = n / 100;                  // cent = 3 (centena trezentos)
                    dez = (n % 100) / 10;            // dez  = 7 (dezena setenta)
                    unid = (n % 100) % 10;           // unid = 1 (unidade um)
                    if (cent != 0)
                        saux = centena[cent];
                    if ((dez != 0) || (unid != 0)) {
                        if ((n % 100) <= 19) {
                            if (saux.length() != 0)
                                saux = saux + " e " + unidade[n % 100];
                            else saux = unidade[n % 100];
                        } else {
                            if (saux.length() != 0)
                                saux = saux + " e " + dezena[dez];
                            else saux = dezena[dez];
                            if (unid != 0) {
                                if (saux.length() != 0)
                                    saux = saux + " e " + unidade[unid];
                                else saux = unidade[unid];
                            }
                        }
                    }
                }
                if (vlrP.equals("1") || vlrP.equals("001")) {
                    if (i == 0) // 1a. parte do valor (um real)
                        umReal = true;
                    else saux = saux + " " + qualificaS[i];
                } else if (i != 0)
                    saux = saux + " " + qualificaP[i];

                if (s.length() != 0) {
                    switch (i) {
                        case 1: // mil
                            d = 100;
                            break;
                        case 2: // milhÃ£o
                            d = 100000;
                            break;
                        case 3: // bilhÃ£o
                            d = 100000000;
                            break;
                        default: // trilhÃ£o
                            d = 100000000000L;
                            break;
                    }

                    // verifica se o valor Ã© redondo na centena
                    if ((inteiro % d) == 0)
                        s = saux + " e " + s;
                    else s = saux + ", " + s;
                } else s = saux;
            }
            if (((i == 0) || (i == 1)) && s.length() != 0)
                tem = true; // tem centena ou mil no valor
            i = i + 1; // prÃ³ximo qualificador: 1- mil, 2- milhÃ£o, 3- bilhÃ£o, ...
        }

        if (s.length() != 0) {
            if (umReal)
                s = s + " real";
            else if (tem)
                s = s + " reais";
            else s = s + " de reais";
        }


// definindo o extenso dos centavos do valor
        if (!centavos.equals("0")) { // valor com centavos
            if (s.length() != 0) // se nÃ£o Ã© valor somente com centavos
                s = s + " e ";
            if (centavos.equals("1"))
                s = s + "um centavo";
            else {
                n = Integer.parseInt(centavos, 10);
                if (n <= 19)
                    s = s + unidade[n];
                else {             // para n = 37, tem-se:
                    unid = n % 10;   // unid = 37 % 10 = 7 (unidade sete)
                    dez = n / 10;    // dez  = 37 / 10 = 3 (dezena trinta)
                    s = s + dezena[dez];
                    if (unid != 0)
                        s = s + " e " + unidade[unid];
                }
                s = s + " centavos";
            }
        }
        return (s);
    }
}
