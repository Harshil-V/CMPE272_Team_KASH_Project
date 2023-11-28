package com.sjsu.enterprise.schoolmanagement.service;

import com.sjsu.enterprise.schoolmanagement.entity.StudentEntity;
import com.sjsu.enterprise.schoolmanagement.model.Error;
import com.sjsu.enterprise.schoolmanagement.model.Student;
import com.sjsu.enterprise.schoolmanagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
		
	public Student authenticateStudentLogin(Student student) {
		Student mystudent = new Student();
		Error error = new Error();
		StudentEntity studentEntity =  studentRepository.findByStudentId(student.getStudentId());
	    if(null == studentEntity) {
		  	error.setErrorMessage("Something went wrong. Please try again!");
			mystudent.setError(error);
	    } else if(studentEntity.getStudentPassword().equalsIgnoreCase(student.getStudentPassword())) {
			mystudent.setStudentEmail(studentEntity.getStudentEmail());
			mystudent.setStudentFirstName(studentEntity.getStudentFirstName());
			mystudent.setStudentLastName(studentEntity.getStudentLastName());
		} else {
			error.setErrorMessage("Invalid username or password. Please try again");
			mystudent.setError(error);
		}
		return mystudent;
	}

	public StudentEntity getStudent(Long id) {
		return studentRepository.findByStudentId(id);
	}

	public String deleteStudent(Long id) {
		studentRepository.deleteById(id);
		return "Student entry deleted";
	}

	public List<StudentEntity> getAllStudents() {
		List userList = new ArrayList<StudentEntity>();
		studentRepository.findAll().forEach(userList::add);
		return userList;
	}

	public List<StudentEntity> getAllStudentsByGrade(String gradeId) {
		List userList = new ArrayList<StudentEntity>();
		userList.addAll(studentRepository.findByGradeId(gradeId));
		return userList;
	}

	public StudentEntity addOrUpdateStudent(StudentEntity studentEntity) {
		studentRepository.save(studentEntity);
		return studentRepository.findByStudentId(studentEntity.getStudentId());
	}

}
