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
public class AgendaController {


	private static final Logger logger = LogManager.getLogger(AgendaController.class);

	@Autowired
  	private AgendaRepository repository;

	@CrossOrigin(origins = "*")
	@GetMapping("/agenda")
	public List<Agenda> obtenerAgenda() {
		List<Agenda> response = repository.findAll();
		return response;

	}

	@CrossOrigin(origins = "*")
	@PostMapping("/agenda")
	public Agenda agendar(@RequestBody Agenda body) {
		
	repository.save(body);
	logger.info("feo");

		return body;
	}
}