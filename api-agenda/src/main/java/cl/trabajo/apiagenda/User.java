package cl.trabajo.apiagenda;
import java.util.Date;

public class User {

    private String user;
    private String password;
    private int nivel;

    public void User(String user, String password, int nivel) {
        this.user = user;
        this.password = password;
        this.nivel= nivel;
    }

 public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

 
}