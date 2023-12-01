package com.sjsu.enterprise.schoolmanagement.service;

import com.sjsu.enterprise.schoolmanagement.entity.CourseEntity;
import com.sjsu.enterprise.schoolmanagement.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository courseRepository;

	public List<CourseEntity> getAllCourses() {
		List courseList = new ArrayList<CourseEntity>();
		courseRepository.findAll().forEach(courseList::add);
		return courseList;
	}

	public List<CourseEntity> getAllCoursesByGradeId(String gradeId) {
		List courseList = new ArrayList<CourseEntity>();
		courseList.addAll(courseRepository.findByGradeId(gradeId));
		return courseList;
	}


	public CourseEntity findCourse(Integer courseId) {
		CourseEntity courseEntity =  courseRepository.findByCourseId(courseId);
		if(null==courseEntity) {
		  System.out.println("Course does not exist");
		}
	 return courseEntity;
	}

	public String deleteCourse(Integer courseId) {
		courseRepository.deleteById(courseId);
		return "Course deleted";
	}

	public CourseEntity addOrUpdateCourse(CourseEntity courseEntity) {
		courseRepository.save(courseEntity);
		return courseRepository.findByCourseId(courseEntity.getCourseId());
	}
}
