package com.sjsu.enterprise.schoolmanagement.service;

import com.sjsu.enterprise.schoolmanagement.entity.ParentEntity;
import com.sjsu.enterprise.schoolmanagement.model.Error;
import com.sjsu.enterprise.schoolmanagement.model.Parent;
import com.sjsu.enterprise.schoolmanagement.repository.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ParentService {
	
	@Autowired
	private ParentRepository parentRepository;
		
	public Parent authenticateParentLogin(Parent parent) {
		Parent newParent = new Parent();
		Error error = new Error();
		ParentEntity parentEntity =  parentRepository.findByParentId(parent.getParentId());
	    if(null == parentEntity) {
		  	error.setErrorMessage("Something went wrong. Please try again!");
			newParent.setError(error);
	    } else if(parentEntity.getParentPassword().equalsIgnoreCase(parent.getParentPassword())) {
			newParent.setParentId(parentEntity.getParentId());
			newParent.setParentEmail(parentEntity.getParentEmail());
			newParent.setParentFirstName(parentEntity.getParentFirstName());
			newParent.setParentLastName(parentEntity.getParentLastName());
		} else {
			error.setErrorMessage("Invalid username or password. Please try again");
			newParent.setError(error);
		}
		return newParent;
	}

	public ParentEntity getParent(Long id) {
        return parentRepository.findByParentId(id);
	}

	public String deleteParent(Long id) {
		parentRepository.deleteById(id);
		return "Parent entry deleted";
	}

	public List<ParentEntity> getAllParents() {
		List userList = new ArrayList<ParentEntity>();
		parentRepository.findAll().forEach(userList::add);
		return userList;
	}

	public ParentEntity addOrUpdateParent(ParentEntity parentEntity) {
		parentRepository.save(parentEntity);
		return parentRepository.findByParentId(parentEntity.getParentId());
	}
}
