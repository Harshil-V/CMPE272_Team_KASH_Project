package com.sjsu.enterprise.schoolmanagement.repository;

import com.sjsu.enterprise.schoolmanagement.entity.StudentEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends CrudRepository<StudentEntity, Long> {
	StudentEntity findByStudentId(Long id);
	List<StudentEntity> findByGradeId(String gradeId);
}
