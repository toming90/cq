package com.ariba.cq.controllers;


import com.ariba.cq.models.Employee;
import com.ariba.cq.services.EmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/people")
public class SearchController {
    private static final Logger LOGGER = LoggerFactory.getLogger(SearchController.class);
    private final EmployeeService employeeService;

    @Autowired
    public SearchController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }



    @RequestMapping(value = "/all", method = {RequestMethod.GET})
    public @ResponseBody Iterable<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @RequestMapping(value = "/search", method = {RequestMethod.GET})
    public List<Employee> handleEmployeeByKeywords (@RequestParam("content") String content) {
            return employeeService.getQuery(content);
    }

    @RequestMapping(value = "/add", method = {RequestMethod.POST})
    public EmployeeResponse addNewEmployee(@RequestBody EmployeeRequest employeeRequest) {
    	//add the new employee to the database
    	Employee newEmployee = employeeService.insert(employeeRequest.toEmployee());

    	//return the result
    	return new EmployeeResponse(newEmployee);
    }

    @RequestMapping(value = "/delete", method = {RequestMethod.DELETE})
    public boolean deleteEmployee(@RequestParam("id") long id) {
        try {
            employeeService.deleteQuery(id);
            return true;
        } catch(Exception e) {
            SearchController.LOGGER.error("Exception occurred when deleting the id: " + id, e);
            return false;
        }

//        employeeService.deleteQuery(id);
    }


}
