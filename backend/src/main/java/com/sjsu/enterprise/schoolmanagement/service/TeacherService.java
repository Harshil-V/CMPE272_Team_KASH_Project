package com.sjsu.enterprise.schoolmanagement.service;

import com.sjsu.enterprise.schoolmanagement.entity.TeacherEntity;
import com.sjsu.enterprise.schoolmanagement.model.Teacher;
import com.sjsu.enterprise.schoolmanagement.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeacherService {
	
	@Autowired
	private TeacherRepository teacherRepository;

	public TeacherEntity authenticateTeacherLogin(Teacher teacher) {
		TeacherEntity teacherEntity =  teacherRepository.findByTeacherId(teacher.getTeacherId());

		if(teacherEntity==null) {
		  System.out.println("Null TeacherEntity");
	    }

        assert teacherEntity != null;
        if(teacher.getTeacherPassword().equalsIgnoreCase(teacherEntity.getTeacherPassword())) {
			return teacherEntity;
		} else {
			System.out.println("Invalid username/password!");
		}
		return teacherEntity;
	}

	public TeacherEntity addOrUpdateTeacher(TeacherEntity myTeacher) {
		teacherRepository.save(myTeacher);
		return teacherRepository.findByTeacherId(myTeacher.getTeacherId());
	}

	public TeacherEntity getTeacher(Long myTeacher) {
		return teacherRepository.findByTeacherId(myTeacher);
	}

	public String deleteTeacher(Long id) {
		teacherRepository.deleteById(id);
		return "Teacher entry deleted";
	}

	public List<TeacherEntity> getAllTeachers() {
		List teacherList = new ArrayList<TeacherEntity>();
		teacherRepository.findAll().forEach(teacherList::add);
		return teacherList;
	}
}
