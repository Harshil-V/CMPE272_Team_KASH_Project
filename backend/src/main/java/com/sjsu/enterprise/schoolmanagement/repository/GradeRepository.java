package com.sjsu.enterprise.schoolmanagement.repository;

import com.sjsu.enterprise.schoolmanagement.entity.GradeEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeRepository extends CrudRepository<GradeEntity, String> {
	GradeEntity findByGradeId(String gradeId);
}
