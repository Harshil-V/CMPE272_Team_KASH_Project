package com.sjsu.enterprise.schoolmanagement.entity;

import com.sjsu.enterprise.schoolmanagement.constant.ExamType;
import com.sjsu.enterprise.schoolmanagement.constant.Grade;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "exam-entity")
@Table(name = "exam")
public class ExamEntity {
	@EmbeddedId
	private ExamId examId;
	@Column(name="exam_name")
    private String examName;
	@Column(name="exam_description")
	private String examDescription;
	@Column(name = "exam_type")
	@Enumerated(EnumType.STRING)
	private ExamType examType;
	@Column(name = "grade")
	@Enumerated(EnumType.STRING)
	private Grade grade;

	@Embeddable
	public static class ExamId implements Serializable {
		@Column(name = "student_id")
		private Long studentId;

		@Column(name = "course_id")
		private Integer courseId;

		// Default constructor
		public ExamId() {
		}

		// Parameterized constructor
		public ExamId(Long studentId, Integer courseId) {
			this.studentId = studentId;
			this.courseId = courseId;
		}

		public ExamId(Long studentId) {
			this.studentId = studentId;
		}

		// Getters and setters
		public Long getStudentId() {
			return studentId;
		}

		public void setStudentId(Long studentId) {
			this.studentId = studentId;
		}

		public Integer getCourseId() {
			return courseId;
		}

		public void setCourseId(Integer courseId) {
			this.courseId = courseId;
		}
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

	public ExamType getExamType() {
		return examType;
	}

	public void setExamType(ExamType examType) {
		this.examType = examType;
	}

	public Grade getGrade() {
		return grade;
	}

	public void setGrade(Grade grade) {
		this.grade = grade;
	}

	public ExamId getExamId() {
		return examId;
	}

	public void setExamId(ExamId examId) {
		this.examId = examId;
	}
}
