package com.sjsu.enterprise.schoolmanagement.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "parent")
public class ParentEntity {
	@Id
	@Column(name="parent_id")
	private Long parentId;

	@Column(name="parent_email")
	private String parentEmail;

	@Column(name="parent_fname")
	private String parentFirstName;

	@Column(name="parent_lname")
	private String parentLastName;

	@Column(name="parent_password")
	private String parentPassword;

	@Column(name="relationship")
	private String relationship;

	@Column(name="parent_phone")
	private Long parentPhone;

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

	public String getParentPassword() {
		return parentPassword;
	}

	public void setParentPassword(String parentPassword) {
		this.parentPassword = parentPassword;
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
}
