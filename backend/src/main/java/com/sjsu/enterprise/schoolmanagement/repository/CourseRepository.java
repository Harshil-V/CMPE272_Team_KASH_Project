package com.sjsu.enterprise.schoolmanagement.repository;

import com.sjsu.enterprise.schoolmanagement.entity.CourseEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends CrudRepository<CourseEntity, Integer> {
	CourseEntity findByCourseId(Integer courseId);
	List<CourseEntity> findByGradeId(String gradeId);
}
