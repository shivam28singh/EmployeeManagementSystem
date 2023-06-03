package com.springBooot.springdatajpa;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.springBooot.springdatajpa.Entity.Employee;
import com.springBooot.springdatajpa.repository.EmployeeRepository;

@SpringBootTest
class SpringDataJpaApplicationTests {
    
	@Autowired
	private EmployeeRepository employeeRepository;
	
//	@Autowired
//	private Employee employee;
	
	@Test
	void saveMethodTest() {
		Employee employee = new Employee();
		
		employee.setFirstName("Shivam");
		employee.setLastName("Singh");
		employee.setEmailId("shivamsingh280501@gmail.com");
		LocalDate date = LocalDate.of(2022, 2,7);
		employee.setDateOfJoining(date);
		
		Employee res = employeeRepository.save(employee);
	}
	
	@Test
	void saveAllMethodTest() {
		Employee employee2 = new Employee();
		employee2.setFirstName("Rahul");
		employee2.setLastName("Kumar");
		employee2.setEmailId("Rahul@gmail.com");
		LocalDate date = LocalDate.of(2018,12,14);
		employee2.setDateOfJoining(date);
		employeeRepository.saveAll(List.of(employee2));
	}
	
	@Test
	void findByIDMethodTest() {
		long id = 10L;
		Optional<Employee> res = employeeRepository.findById(id);
		System.out.println(res.isPresent());
		res.get();
	}

}
