package com.sjsu.enterprise.schoolmanagement.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sjsu.enterprise.schoolmanagement.entity.AdminEntity;

@Repository
public interface AdminRepository extends CrudRepository<AdminEntity, String>{
	AdminEntity findByAdminEmail(String adminEmail);
}
