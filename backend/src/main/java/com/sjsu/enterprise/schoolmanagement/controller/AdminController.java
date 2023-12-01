package com.sjsu.enterprise.schoolmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sjsu.enterprise.schoolmanagement.entity.AdminEntity;
import com.sjsu.enterprise.schoolmanagement.model.Admin;
import com.sjsu.enterprise.schoolmanagement.service.AdminService;

@Controller 
@RequestMapping(path="/admin")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AdminController {
	
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping(path="/addAdmin")
	public @ResponseBody String addAdmin(@RequestBody AdminEntity myAdmin) {
	    return adminService.addAdmin(myAdmin);
	}

	@PostMapping(path="/deleteAdmin")
	public @ResponseBody String deleteAdmin(@RequestBody AdminEntity myAdmin) {
		return adminService.deleteAdmin(myAdmin);
	}
	
	@PostMapping(path="/authenticate")
	public @ResponseBody Admin authenticateAdmin (@RequestBody Admin adminDto) {

	    AdminEntity myAdmin = adminService.authenticateAdminLogin(adminDto);

	    Admin admin = new Admin();
	    admin.setAdminEmail(myAdmin.getAdminEmail());
	    admin.setAdminFirstName(myAdmin.getAdminFirstName());
	    admin.setAdminLastName(myAdmin.getAdminLastName());
	    return admin;
	  }

}
