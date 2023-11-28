package com.sjsu.enterprise.schoolmanagement.controller;

import com.sjsu.enterprise.schoolmanagement.entity.ParentEntity;
import com.sjsu.enterprise.schoolmanagement.model.Parent;
import com.sjsu.enterprise.schoolmanagement.repository.ParentRepository;
import com.sjsu.enterprise.schoolmanagement.service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller 
@RequestMapping(path="/parent")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ParentController {
	
	@Autowired
	private ParentRepository parentRepository;
	
	@Autowired
	private ParentService parentService;

	@GetMapping(path="/allParents")
	public @ResponseBody List<ParentEntity> getAllParents () {
		return parentService.getAllParents();
	}

	@GetMapping(path="/getParent/{id}")
	public @ResponseBody ParentEntity getParent (@PathVariable Long id) {
		return parentService.getParent(id);
	}

	@GetMapping(path="/deleteParent/{id}")
	public @ResponseBody String deleteParent (@PathVariable Long id) {
		return parentService.deleteParent(id);
	}

	@PostMapping(path="/updateParent/")
	public @ResponseBody ParentEntity updateParent (@RequestBody ParentEntity parentEntity) {
		return parentService.addOrUpdateParent(parentEntity);
	}

	@PostMapping(path="/addParent")
	public @ResponseBody String addParent (@RequestBody ParentEntity parentEntity) {
		parentService.addOrUpdateParent(parentEntity);
	    return "Parent added successfully!!";
	}
	
	@PostMapping(path="/authenticateParent")
	public @ResponseBody Parent authenticateParentById (@RequestBody Parent parent) {
	   Parent myUser = parentService.authenticateParentLogin(parent);
	   return myUser;
	}
}
