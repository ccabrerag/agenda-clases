
package cl.trabajo.apiagenda;
import java.util.Date;

public class Agenda {

    private int sala;
    private String emailProfesor;
    private String fechaInicio;
    private String fechaFin;
    private String curso;


    public Agenda(int sala, String emailProfesor, String fechaInicio, String fechaFin, String curso) {
    this.sala = sala;
    this.emailProfesor = emailProfesor;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.curso = curso;
    }

    
    public int getSala() {
        return sala;
    }

    public void setSala(int sala) {
        this.sala = sala;
    }

    public String getemailProfesor() {
        return emailProfesor;
    }

    public void setemailProfesor(String emailProfesor) {
        this.emailProfesor = emailProfesor;
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

     public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }
}