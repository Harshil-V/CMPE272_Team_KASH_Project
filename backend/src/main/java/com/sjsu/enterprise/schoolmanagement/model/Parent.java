package com.sjsu.enterprise.schoolmanagement.model;

public class Parent {
	private Long parentId;
	private String parentEmail;
	private String parentFirstName;
	private String parentLastName;
	private String relationship;
	private Long parentPhone;
	private String parentPassword;
	private Error error;

	public Parent() {
		super();
	}

	public Parent(Long parentId, String parentEmail, String parentFirstName, String parentLastName, String relationship, Long parentPhone, String parentPassword) {
		this.parentId = parentId;
		this.parentEmail = parentEmail;
		this.parentFirstName = parentFirstName;
		this.parentLastName = parentLastName;
		this.relationship = relationship;
		this.parentPhone = parentPhone;
		this.parentPassword = parentPassword;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public String getParentEmail() {
		return parentEmail;
	}

	public void setParentEmail(String parentEmail) {
		this.parentEmail = parentEmail;
	}

	public String getParentFirstName() {
		return parentFirstName;
	}

	public void setParentFirstName(String parentFirstName) {
		this.parentFirstName = parentFirstName;
	}

	public String getParentLastName() {
		return parentLastName;
	}

	public void setParentLastName(String parentLastName) {
		this.parentLastName = parentLastName;
	}

	public String getRelationship() {
		return relationship;
	}

	public void setRelationship(String relationship) {
		this.relationship = relationship;
	}

	public Long getParentPhone() {
		return parentPhone;
	}

	public void setParentPhone(Long parentPhone) {
		this.parentPhone = parentPhone;
	}

	public String getParentPassword() {
		return parentPassword;
	}

	public void setParentPassword(String parentPassword) {
		this.parentPassword = parentPassword;
	}

	public Error getError() {
		return error;
	}

	public void setError(Error error) {
		this.error = error;
	}
}
