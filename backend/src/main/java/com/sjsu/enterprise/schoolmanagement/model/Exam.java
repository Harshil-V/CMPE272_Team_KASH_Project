package com.sjsu.enterprise.schoolmanagement.model;

public class Exam {
    private String examName;
    private String examDescription;
    private Enum examType;
	private Enum grade;
	private Long studentId;
	private Integer courseId;

	public Exam(String examName, String examDescription, Enum examType, Enum grade, Integer courseId) {
		this.examName = examName;
		this.examDescription = examDescription;
		this.examType = examType;
		this.grade = grade;
		this.courseId = courseId;
	}

	public String getExamName() {
		return examName;
	}

	public void setExamName(String examName) {
		this.examName = examName;
	}

	public String getExamDescription() {
		return examDescription;
	}

	public void setExamDescription(String examDescription) {
		this.examDescription = examDescription;
	}

	public Enum getExamType() {
		return examType;
	}

	public void setExamType(Enum examType) {
		this.examType = examType;
	}

	public Enum getGrade() {
		return grade;
	}

	public void setGrade(Enum grade) {
		this.grade = grade;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public Long getStudentId() {
		return studentId;
	}

	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}
}
