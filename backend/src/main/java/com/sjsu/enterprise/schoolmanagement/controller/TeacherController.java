package com.sjsu.enterprise.schoolmanagement.controller;

import com.sjsu.enterprise.schoolmanagement.entity.TeacherEntity;
import com.sjsu.enterprise.schoolmanagement.model.Teacher;
import com.sjsu.enterprise.schoolmanagement.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller 
@RequestMapping(path="/teacher")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TeacherController {
	
	
	@Autowired
	private TeacherService teacherService;

	@GetMapping(path="/allTeachers")
	public @ResponseBody List<TeacherEntity> getAllTeachers() {
		return teacherService.getAllTeachers();
	}

	@GetMapping(path="/getTeacher/{teacherId}")
	public @ResponseBody TeacherEntity getTeacher(@PathVariable Long teacherId) {
		return teacherService.getTeacher(teacherId);
	}

	@GetMapping(path="/deleteTeacher/{teacherId}")
	public @ResponseBody String deleteTeacher(@PathVariable Long teacherId) {
		return teacherService.deleteTeacher(teacherId);
	}

	@PostMapping(path="/addTeacher")
	public @ResponseBody String addTeacher(@RequestBody TeacherEntity myTeacher) {
	    teacherService.addOrUpdateTeacher(myTeacher);
		return "Teacher added successfully";
	}

	@PostMapping(path="/updateTeacher")
	public @ResponseBody TeacherEntity updateTeacher(@RequestBody TeacherEntity myTeacher) {
		return teacherService.addOrUpdateTeacher(myTeacher);
	}
	
	@PostMapping(path="/authenticateTeacher")
	public @ResponseBody Teacher authenticateTeacherById (@RequestBody Teacher teacherDto) {
		TeacherEntity myTeacher = teacherService.authenticateTeacherLogin(teacherDto);
		Teacher teacher = new Teacher();
		teacher.setTeacherEmail(myTeacher.getTeacherEmail());
		teacher.setTeacherFirstName(myTeacher.getTeacherFirstName());
		teacher.setTeacherLastName(myTeacher.getTeacherLastName());
	    return teacher;
	  }

}
