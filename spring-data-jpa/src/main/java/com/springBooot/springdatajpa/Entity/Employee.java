package com.springBooot.springdatajpa.Entity;


import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(
		name="employees",
        uniqueConstraints = {
        		@UniqueConstraint(columnNames = "email_ID", name="emailIdUniqueConstraint")
		}
)
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="first_name",nullable = false)
	private String firstName;
	private String lastName;
	
	@Column(name="email_ID",nullable = false)
	private String emailId;
	
	@Column(name="Joining_Date", nullable = true)
	private LocalDate dateOfJoining;

}
