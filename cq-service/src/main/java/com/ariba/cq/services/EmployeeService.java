package com.ariba.cq.services;

import com.ariba.cq.models.Employee;
import com.ariba.cq.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    public List<Employee> getQuery(String content) {
        String trimContent = content.trim().replaceAll("\\s{2,}", " ");
        return this.employeeRepository.getResultByContent(trimContent);
    }

    public List<Employee> getAllEmployees() {
        return this.employeeRepository.findAll();
    }

    public Employee insert(Employee employee) {
        return this.employeeRepository.save(employee);
    }

    public void deleteQuery(Long id) {
        employeeRepository.delete(id);
    }

}
