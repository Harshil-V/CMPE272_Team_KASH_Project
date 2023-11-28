package com.sjsu.enterprise.schoolmanagement.model;

public class Student {
	private Long studentId;
	private Long parentId;
	private String studentEmail;
	private String studentFirstName;
	private String studentLastName;
	private Integer age;
	private String gender;
	private String address;
	private Long phone;
	private String studentPassword;
	private Error error;
	private String gradeId;

	public Student() {
		super();
	}

	/**
	 * @param studentEmail
	 * @param studentFirstName
	 * @param studentLastName
	 * @param studentPassword
	 */
	public Student(String studentEmail, String studentFirstName, String studentLastName, String studentPassword) {
		super();
		this.studentEmail = studentEmail;
		this.studentFirstName = studentFirstName;
		this.studentLastName = studentLastName;
		this.studentPassword = studentPassword;
	}

	public Long getStudentId() {
		return studentId;
	}

	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getStudentEmail() {
		return studentEmail;
	}

	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}

	public String getStudentFirstName() {
		return studentFirstName;
	}

	public void setStudentFirstName(String studentFirstName) {
		this.studentFirstName = studentFirstName;
	}

	public String getStudentLastName() {
		return studentLastName;
	}

	public void setStudentLastName(String studentLastName) {
		this.studentLastName = studentLastName;
	}

	public String getStudentPassword() {
		return studentPassword;
	}

	public void setStudentPassword(String studentPassword) {
		this.studentPassword = studentPassword;
	}

	public Error getError() {
		return error;
	}

	public void setError(Error error) {
		this.error = error;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public String getGradeId() {
		return gradeId;
	}

	public void setGradeId(String gradeId) {
		this.gradeId = gradeId;
	}

	@Override
	public String toString() {
		return "User [studentEmail=" + studentEmail + ", studentFirstName=" + studentFirstName + ", studentLastName=" + studentLastName
				+ ", studentPassword=" + studentPassword + "]";
	}
}
