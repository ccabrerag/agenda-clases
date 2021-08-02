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
public class UserController {


	private static final Logger logger = LogManager.getLogger(UserController.class);

	@Autowired
  	private UserRepository repository;

	@CrossOrigin(origins = "*")
	@PostMapping("/user")
	public User logear(@RequestBody User body) {
		
	repository.save(body);
	logger.info("feo");

		return body;
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/user")
	public List<User> obtenerUser() {
		List<User> response = repository.findAll();
		return response;

	}

	


}