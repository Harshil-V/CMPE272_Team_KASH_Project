package com.sjsu.enterprise.schoolmanagement.model;

public class Grade {

	private String gradeId;
    private String name;
    private String description;

	public Grade() {
		super();
	}

	public Grade(String gradeId, String name, String description) {
		this.gradeId = gradeId;
		this.name = name;
		this.description = description;
	}

	public String getGradeId() {
		return gradeId;
	}

	public void setGradeId(String gradeId) {
		this.gradeId = gradeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
