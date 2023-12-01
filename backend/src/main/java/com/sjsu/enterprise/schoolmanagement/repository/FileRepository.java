package com.sjsu.enterprise.schoolmanagement.repository;

import java.util.List;

import com.sjsu.enterprise.schoolmanagement.entity.FileEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends CrudRepository<FileEntity, String>{
	
		void deleteByFileName(String fileName);
		
		List findByUserEmail(String userEmail);
		
		FileEntity findByFileId(Long fileId);
}
