package com.sjsu.enterprise.schoolmanagement.repository;

import com.sjsu.enterprise.schoolmanagement.entity.TeacherEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends CrudRepository<TeacherEntity, Long>{
	TeacherEntity findByTeacherId(Long id);
}
