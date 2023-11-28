package com.sjsu.enterprise.schoolmanagement.controller;

import com.sjsu.enterprise.schoolmanagement.entity.ExamEntity;
import com.sjsu.enterprise.schoolmanagement.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path="/exam")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ExamController {

	@Autowired
	private ExamService examService;

	@GetMapping(path="/allExams")
	public @ResponseBody List<ExamEntity> allExams() {
		return examService.getAllExams();
	}

	@PostMapping(path="/getExam")
	public @ResponseBody List<ExamEntity> findExam (@RequestBody ExamEntity.ExamId examId) {
		return examService.findExam(examId);
	}

	@PostMapping(path="/deleteExam")
	public @ResponseBody String deleteExam (@RequestBody ExamEntity.ExamId examId) {
		return examService.deleteExam(examId);
	}

	@PostMapping(path="/addExam")
	public @ResponseBody String addExam (@RequestBody ExamEntity examEntity) {
		examService.addOrUpdateExam(examEntity);
		return "Exam added successfully!";
	}

	@PostMapping(path="/updateExam")
	public @ResponseBody List<ExamEntity> updateExam (@RequestBody ExamEntity examEntity) {
		return examService.addOrUpdateExam(examEntity);
	}
}
