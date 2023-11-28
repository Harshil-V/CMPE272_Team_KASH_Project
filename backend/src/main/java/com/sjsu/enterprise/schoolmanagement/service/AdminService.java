package com.sjsu.enterprise.schoolmanagement.service;

import com.sjsu.enterprise.schoolmanagement.entity.AdminEntity;
import com.sjsu.enterprise.schoolmanagement.model.Admin;
import com.sjsu.enterprise.schoolmanagement.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
		
	public AdminEntity authenticateAdminLogin(Admin admin) {
	    AdminEntity adminEntity =  adminRepository.findByAdminEmail(admin.getAdminEmail());

		if(null==adminEntity) {
		  System.out.println("Not found!");
	    }

        assert adminEntity != null;
        if(admin.getAdminPassword().equalsIgnoreCase(adminEntity.getAdminPassword())) {
			return adminEntity;
		} else {
			System.out.println("Invalid username/password!");
		}
		return adminEntity;
	}

	public String addAdmin(AdminEntity myAdmin) {
		adminRepository.save(myAdmin); 
		return "Admin added successfully";
	}

	public String deleteAdmin(AdminEntity myAdmin) {
		adminRepository.deleteById(myAdmin.getAdminEmail());
		return "Admin deleted successfully";
	}
}
