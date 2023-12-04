package com.sjsu.enterprise.schoolmanagement.service;

import com.sjsu.enterprise.schoolmanagement.entity.StudentEntity;
import com.sjsu.enterprise.schoolmanagement.model.Student;
import com.sjsu.enterprise.schoolmanagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
		
	public ResponseEntity<?> authenticateStudentLogin(Student student) {
		try {
			StudentEntity userEntity = studentRepository.findByStudentEmail(student.getStudentEmail());
			if (userEntity == null) {
				return new ResponseEntity<>("Email or password not found!", HttpStatus.NOT_FOUND);
			} else if (userEntity.getStudentPassword().equals(student.getStudentPassword())){
				return new ResponseEntity<>("Login successful!", HttpStatus.OK);
			} else {
				return new ResponseEntity<>("Email or password does not match!", HttpStatus.FORBIDDEN);
			}
		} catch (DataAccessException e) {
			return new ResponseEntity<>("An error occurred during login.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<?> getStudent(Long id) {
		try {
			StudentEntity userEntity = studentRepository.findByStudentId(id);
			if (userEntity == null) {
				return new ResponseEntity<>("User not found!", HttpStatus.NOT_FOUND);
			} else {
				return new ResponseEntity<>(userEntity, HttpStatus.OK);
			}
		} catch (DataAccessException e) {
			return new ResponseEntity<>("An error occurred while fetching student.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<?> deleteStudent(Long id) {
		try {
			studentRepository.delete(new StudentEntity(id));
			System.out.println("User deleted successfully!");
			return new ResponseEntity<>("User deleted successfully!", HttpStatus.OK);
		} catch (DataAccessException e) {
			return new ResponseEntity<>("An error occurred while deleting student.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<?> getAllStudents() {
		try {
			List<StudentEntity> userList = new ArrayList<>();
			studentRepository.findAll().forEach(userList::add);
			return new ResponseEntity<>(userList, HttpStatus.OK);
		} catch (DataAccessException e) {
			return new ResponseEntity<>("An error occurred while fetching all students.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<?> getAllStudentsByGrade(String gradeId) {
		try {
			List userList = new ArrayList<StudentEntity>();
			userList.addAll(studentRepository.findByGradeId(gradeId));
			return new ResponseEntity<>(userList, HttpStatus.OK);
		} catch (DataAccessException e) {
			return new ResponseEntity<>("An error occurred while fetching all students.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<?> addOrUpdateStudent(StudentEntity studentEntity) {
		try {
			studentRepository.save(studentEntity);
			System.out.println("User updated successfully!");
			return new ResponseEntity<>("Student details updated successfully!", HttpStatus.OK);
		} catch (DataAccessException e) {
			return new ResponseEntity<>("An error occurred while updating student.", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
