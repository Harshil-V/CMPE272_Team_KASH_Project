package com.sjsu.enterprise.schoolmanagement.controller;

import com.sjsu.enterprise.schoolmanagement.entity.CourseEntity;
import com.sjsu.enterprise.schoolmanagement.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller 
@RequestMapping(path="/course")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CourseController {

	@Autowired
	private CourseService courseService;

	@GetMapping(path="/allCourses")
	public @ResponseBody List<CourseEntity> allCourses() {
		return courseService.getAllCourses();
	}

	@GetMapping(path="/allCourses/{gradeId}")
	public @ResponseBody List<CourseEntity> allCoursesByGradeId(@PathVariable String gradeId) {
		return courseService.getAllCoursesByGradeId(gradeId);
	}

	@GetMapping(path="/getCourse/{courseId}")
	public @ResponseBody CourseEntity findCourse (@PathVariable Integer courseId) {
		return courseService.findCourse(courseId);
	}

	@GetMapping(path="/deleteCourse/{courseId}")
	public @ResponseBody String deleteCourse (@PathVariable Integer courseId) {
		return courseService.deleteCourse(courseId);
	}

	@PostMapping(path="/addCourse")
	public @ResponseBody String addCourse (@RequestBody CourseEntity courseEntity) {
		courseService.addOrUpdateCourse(courseEntity);
		return "Course added successfully!";
	}

	@PostMapping(path="/updateCourse")
	public @ResponseBody CourseEntity updateCourse (@RequestBody CourseEntity courseEntity) {
		return courseService.addOrUpdateCourse(courseEntity);
	}
}
