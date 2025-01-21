package ma.dnaengineering.backend.Repo;

import ma.dnaengineering.backend.Entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;



public interface JobRepo extends JpaRepository<Job,Long> {

}
