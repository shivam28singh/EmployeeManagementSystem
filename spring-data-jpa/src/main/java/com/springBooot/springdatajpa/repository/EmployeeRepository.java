package com.springBooot.springdatajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springBooot.springdatajpa.Entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
