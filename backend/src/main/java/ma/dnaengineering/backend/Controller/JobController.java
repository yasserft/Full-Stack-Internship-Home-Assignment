package ma.dnaengineering.backend.Controller;

import ma.dnaengineering.backend.Entity.Job;
import ma.dnaengineering.backend.Repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;

@RestController

public class JobController {
    @Autowired
    JobRepo jobRepo;
    @GetMapping("/api/jobs")
    public List<Job> getAllJob(){
        return jobRepo.findAll();
    }

}
