package com.sjsu.enterprise.schoolmanagement.controller;

import com.sjsu.enterprise.schoolmanagement.entity.StudentEntity;
import com.sjsu.enterprise.schoolmanagement.model.Student;
import com.sjsu.enterprise.schoolmanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller 
@RequestMapping(path="/student")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StudentController {
	@Autowired
	private StudentService studentService;

	@GetMapping(path="/allStudents")
	public ResponseEntity<?> getAllStudents () {
		return studentService.getAllStudents();
	}

	@GetMapping(path="/allStudents/{gradeId}")
	public ResponseEntity<?> getAllStudentsByGrade (@PathVariable String gradeId) {
		return studentService.getAllStudentsByGrade(gradeId);
	}

	@GetMapping(path="/getStudent/{id}")
	public ResponseEntity<?> getStudent (@PathVariable Long id) {
		return studentService.getStudent(id);
	}

	@GetMapping(path="/deleteStudent/{id}")
	public ResponseEntity<?> deleteStudent (@PathVariable Long id) {
		return studentService.deleteStudent(id);
	}

	@PostMapping(path="/addStudent")
	public ResponseEntity<?> addStudent (@RequestBody StudentEntity studentEntity) {
	    return studentService.addOrUpdateStudent(studentEntity);
	}

	@PostMapping(path="/updateStudent/")
	public ResponseEntity<?> updateStudent (@RequestBody StudentEntity studentEntity) {
		return studentService.addOrUpdateStudent(studentEntity);
	}
	
	@PostMapping(path="/authenticateStudent")
	public ResponseEntity<?> authenticateStudentById (@RequestBody Student student) {
	   return studentService.authenticateStudentLogin(student);
	}
}
