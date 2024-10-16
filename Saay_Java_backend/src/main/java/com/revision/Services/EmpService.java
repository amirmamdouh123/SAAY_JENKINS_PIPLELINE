package com.revision.Services;

import com.revision.Entities.Employee;
import com.revision.Repos.EmpRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpService {

    @Autowired
    EmpRepo empRepo;

    @Autowired
    public EmpService(EmpRepo empRepo) {
        this.empRepo = empRepo;
    }

    public List<Employee> getAll(){
        return empRepo.findAll();
    }

    public Employee getByID(Long id){
        return empRepo.findById(id).orElseThrow(()->new RuntimeException("Employee with this ID is not existed"));
    }

    public Employee insertEmployee(Employee employee){
        return empRepo.save(employee);
    }

}
