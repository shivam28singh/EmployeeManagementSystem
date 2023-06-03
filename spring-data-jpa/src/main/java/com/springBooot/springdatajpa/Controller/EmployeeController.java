package com.springBooot.springdatajpa.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springBooot.springdatajpa.Entity.Employee;
import com.springBooot.springdatajpa.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class EmployeeController {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	@GetMapping("/employees/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable long id){
		Optional<Employee>  res = employeeRepository.findById(id);
		return res;
	}
	
	@PostMapping("/employees")
	public Employee saveEmployee(@RequestBody Employee employee) {
		System.out.println(employee.getDateOfJoining());
		return employeeRepository.save(employee);
	}
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployeeDetails(@PathVariable long id,@RequestBody Employee employee) {
		  Employee emp = employee;
		  emp.setId(id);
		  return employeeRepository.save(emp);
	}
	
	@DeleteMapping("/employees/{id}")
	public void deleteEmployeeById(@PathVariable long id) {
		employeeRepository.deleteById(id);
	}
	
      
}
