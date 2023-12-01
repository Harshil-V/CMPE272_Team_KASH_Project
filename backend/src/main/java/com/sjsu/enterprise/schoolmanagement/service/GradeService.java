package com.sjsu.enterprise.schoolmanagement.service;

import com.sjsu.enterprise.schoolmanagement.entity.GradeEntity;
import com.sjsu.enterprise.schoolmanagement.repository.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GradeService {

	@Autowired
	private GradeRepository gradeRepository;

	public List<GradeEntity> getAllGrades() {
		List gradeList = new ArrayList<GradeEntity>();
		gradeRepository.findAll().forEach(gradeList::add);
		return gradeList;
	}

	public GradeEntity findGrade(String gradeId) {
		GradeEntity gradeEntity =  gradeRepository.findByGradeId(gradeId);
		if(null==gradeEntity) {
			System.out.println("Grade does not exist");
		}
		return gradeEntity;
	}

	public String deleteGrade(String gradeId) {
		gradeRepository.deleteById(gradeId);
		return "Grade deleted";
	}

	public GradeEntity addOrUpdateGrade(GradeEntity gradeEntity) {
		gradeRepository.save(gradeEntity);
		return gradeRepository.findByGradeId(gradeEntity.getGradeId());
	}
}
