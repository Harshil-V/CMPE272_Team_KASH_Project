package com.sjsu.enterprise.schoolmanagement.model;

public class Course {

	private Integer courseId;
    private String courseName;
    private String courseCredit;
    private String courseType;
	private String gradeId;

	public Course() {
		super();
	}

	/**
	 * @param courseId
	 * @param courseName
	 * @param courseCredit
	 * @param courseType
	 * @param courseStatus
	 * @param gradeId
	 */
	public Course(Integer courseId, String courseName, String courseCredit, String courseType, String courseStatus, String gradeId) {
		super();
			this.courseId = courseId;
			this.courseName = courseName;
			this.courseCredit = courseCredit;
			this.courseType = courseType;
			this.gradeId = gradeId;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseCredit() {
		return courseCredit;
	}

	public void setCourseCredit(String courseCredit) {
		this.courseCredit = courseCredit;
	}

	public String getCourseType() {
		return courseType;
	}

	public void setCourseType(String courseType) {
		this.courseType = courseType;
	}

	public String getGradeId() {
		return gradeId;
	}

	public void setGradeId(String gradeId) {
		this.gradeId = gradeId;
	}
}
