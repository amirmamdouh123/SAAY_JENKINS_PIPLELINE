package com.revision.Controllers;

import com.revision.Entities.Employee;
import com.revision.Services.EmpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("emp")
public class EmpController {

    @Autowired
    EmpService empService;

    @PreAuthorize("hasRole('READ')")
    @GetMapping("all")
    public List<Employee> getAll(){
        return empService.getAll();
    }

    @PreAuthorize("hasRole('WRITE')")
    @GetMapping("id")
    public Employee getByID(Long id){
        return empService.getByID(id);
    }

    @PostMapping
    public Employee insertEmployee(@RequestBody  Employee employee){
        return empService.insertEmployee(employee);
    }

}
