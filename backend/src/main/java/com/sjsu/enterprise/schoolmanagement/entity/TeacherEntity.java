package com.sjsu.enterprise.schoolmanagement.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "teacher")
public class TeacherEntity {

	@Id
	@Column(name="teacher_id")
	private Long teacherId;

	@Column(name="teacher_email")
	private String teacherEmail;
	
	@Column(name="teacher_fname")
    private String teacherFirstName;
    
	@Column(name="teacher_lname")
	private String teacherLastName;
    
	@Column(name="teacher_password")
	private String teacherPassword;

	public Long getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(Long teacherId) {
		this.teacherId = teacherId;
	}

	public String getTeacherEmail() {
		return teacherEmail;
	}

	public void setTeacherEmail(String teacherEmail) {
		this.teacherEmail = teacherEmail;
	}

	public String getTeacherFirstName() {
		return teacherFirstName;
	}

	public void setTeacherFirstName(String adminFirstName) {
		this.teacherFirstName = adminFirstName;
	}

	public String getTeacherLastName() {
		return teacherLastName;
	}

	public void setTeacherLastName(String adminLastName) {
		this.teacherLastName = adminLastName;
	}

	public String getTeacherPassword() {
		return teacherPassword;
	}

	public void setTeacherPassword(String adminPassword) {
		this.teacherPassword = adminPassword;
	}

}
