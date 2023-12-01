package com.sjsu.enterprise.schoolmanagement.controller;

import com.sjsu.enterprise.schoolmanagement.entity.StudentEntity;
import com.sjsu.enterprise.schoolmanagement.model.Student;
import com.sjsu.enterprise.schoolmanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller 
@RequestMapping(path="/student")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StudentController {
	@Autowired
	private StudentService studentService;

	@GetMapping(path="/allStudents")
	public @ResponseBody List<StudentEntity> getAllStudents () {
		return studentService.getAllStudents();
	}

	@GetMapping(path="/allStudents/{gradeId}")
	public @ResponseBody List<StudentEntity> getAllStudentsByGrade (@PathVariable String gradeId) {
		return studentService.getAllStudentsByGrade(gradeId);
	}

	@GetMapping(path="/getStudent/{id}")
	public @ResponseBody StudentEntity getStudent (@PathVariable Long id) {
		return studentService.getStudent(id);
	}

	@GetMapping(path="/deleteStudent/{id}")
	public @ResponseBody String deleteStudent (@PathVariable Long id) {
		return studentService.deleteStudent(id);
	}

	@PostMapping(path="/addStudent")
	public @ResponseBody String addStudent (@RequestBody StudentEntity studentEntity) {
	    studentService.addOrUpdateStudent(studentEntity);
	    return "Student added successfully!!";
	}

	@PostMapping(path="/updateStudent/")
	public @ResponseBody StudentEntity updateStudent (@RequestBody StudentEntity studentEntity) {
		return studentService.addOrUpdateStudent(studentEntity);
	}
	
	@PostMapping(path="/authenticateStudent")
	public @ResponseBody Student authenticateStudentById (@RequestBody Student student) {
	   Student myUser = studentService.authenticateStudentLogin(student);
	   return myUser;
	}
}
