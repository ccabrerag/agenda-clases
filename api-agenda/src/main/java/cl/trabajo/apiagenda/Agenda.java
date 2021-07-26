
package cl.trabajo.apiagenda;
import java.util.Date;

public class Agenda {

    private int sala;
    private String emailProgesor;
    private String fechaInicio;
    private String fechaFin;

    public Agenda(int sala, String emailProgesor, String fechaInicio, String fechaFin) {
        this.sala = sala;
        this.emailProgesor = emailProgesor;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    public int getSala() {
        return sala;
    }

    public void setSala(int sala) {
        this.sala = sala;
    }

    public String getEmailProgesor() {
        return emailProgesor;
    }

    public void setEmailProgesor(String emailProgesor) {
        this.emailProgesor = emailProgesor;
    }

    public String getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(String fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public String getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(String fechaFin) {
        this.fechaFin = fechaFin;
    }
}