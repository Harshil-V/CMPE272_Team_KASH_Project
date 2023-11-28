package com.sjsu.enterprise.schoolmanagement.controller;

import com.sjsu.enterprise.schoolmanagement.entity.GradeEntity;
import com.sjsu.enterprise.schoolmanagement.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller 
@RequestMapping(path="/grade")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GradeController {

	@Autowired
	private GradeService gradeService;

	@GetMapping(path="/allGrades")
	public @ResponseBody List<GradeEntity> allGrades() {
		return gradeService.getAllGrades();
	}

	@GetMapping(path="/getGrade/{gradeId}")
	public @ResponseBody GradeEntity findCourse (@PathVariable String gradeId) {
		return gradeService.findGrade(gradeId);
	}

	@GetMapping(path="/deleteGrade/{gradeId}")
	public @ResponseBody String deleteCourse (@PathVariable String gradeId) {
		return gradeService.deleteGrade(gradeId);
	}

	@PostMapping(path="/addGrade")
	public @ResponseBody String addCourse (@RequestBody GradeEntity gradeEntity) {
		gradeService.addOrUpdateGrade(gradeEntity);
		return "Grade added successfully!";
	}

	@PostMapping(path="/updateGrade")
	public @ResponseBody GradeEntity updateCourse (@RequestBody GradeEntity gradeEntity) {
		return gradeService.addOrUpdateGrade(gradeEntity);
	}
}
