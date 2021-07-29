package cl.trabajo.apiagenda;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;


@RestController
public class AgendaController {

	@CrossOrigin(origins = "*")
	@GetMapping("/agenda")
	public ArrayList<Agenda> obtenerAgenda() {
		Agenda primerRegistro = new Agenda('1', "profe@mail.com", "17/07/2021 10:00:00", "17/07/2021 12:00:00");
		Agenda segundoRegistro = new Agenda('1', "profe@mail.com", "17/07/2021 15:00:00", "17/07/2021 17:00:00");


		ArrayList<Agenda> agenda = new ArrayList<Agenda>();

		agenda.add(segundoRegistro);
		agenda.add(primerRegistro);

        return agenda;
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/agenda")
	public Agenda agendar() {



		Agenda agendaMock = new Agenda('1', "profe@mail.com", "17/07/2021 10:00:00", "17/07/2021 12:00:00");

		return agendaMock;
	}
}
