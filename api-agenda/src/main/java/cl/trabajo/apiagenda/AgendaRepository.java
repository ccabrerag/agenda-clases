package cl.trabajo.apiagenda;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AgendaRepository extends MongoRepository<Agenda, String> {




}