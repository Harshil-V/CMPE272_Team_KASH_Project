package com.sjsu.enterprise.schoolmanagement.service;

import com.sjsu.enterprise.schoolmanagement.entity.ExamEntity;
import com.sjsu.enterprise.schoolmanagement.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExamService {

	@Autowired
	private ExamRepository examRepository;

	public List<ExamEntity> getAllExams() {
		List examList = new ArrayList<ExamEntity>();
		examRepository.findAll().forEach(examList::add);
		return examList;
	}

	public List<ExamEntity> findExam(ExamEntity.ExamId examId) {
		List examList = new ArrayList<ExamEntity>();
		examList.addAll(examRepository.findByExamId(examId));
		if(null==examList) {
			System.out.println("Does not exist");
		}
		return examList;
	}

	public String deleteExam(ExamEntity.ExamId examId) {
		examRepository.deleteById(examId);
		return "Exam deleted";
	}

	public List<ExamEntity> addOrUpdateExam(ExamEntity examEntity) {
		examRepository.save(examEntity);
		return examRepository.findByExamId(examEntity.getExamId());
	}
}
