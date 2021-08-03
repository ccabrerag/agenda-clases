package cl.trabajo.apiagenda;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;


import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@RestController
public class LoginController {


	private static final Logger logger = LogManager.getLogger(UserController.class);

    @Autowired
  	private UserRepository repository;

	@CrossOrigin(origins = "*")
	@PostMapping("/login")
	public User logear(@RequestBody User body) {

    String user1 = body.getUser();
    String password1 = body.getPassword();

    try {
  //  Block of code to try

      User response = repository.findByUser(user1);
    String password2 = response.getPassword();
        if (password1.equals(password2)){
        return response;
    } else {
        return null;
    }

	}
    catch(Exception e) {
    //  Block of code to handle errors
    return null;
    }


    }
}