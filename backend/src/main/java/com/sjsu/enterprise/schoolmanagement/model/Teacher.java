package com.sjsu.enterprise.schoolmanagement.model;

public class Teacher {
    private Long teacherId;
    private String teacherEmail;
    private String teacherFirstName;
    private String teacherLastName;
    private String teacherPassword;

    public Teacher() {
        super();
    }

    /**
     * @param teacherEmail
     * @param teacherFirstName
     * @param teacherLastName
     * @param teacherPassword
     */
    public Teacher(Long teacherId, String teacherEmail, String teacherFirstName, String teacherLastName, String teacherPassword) {
        super();
        this.teacherId = teacherId;
        this.teacherEmail = teacherEmail;
        this.teacherFirstName = teacherFirstName;
        this.teacherLastName = teacherLastName;
        this.teacherPassword = teacherPassword;
    }

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

    public void setTeacherFirstName(String teacherFirstName) {
        this.teacherFirstName = teacherFirstName;
    }

    public String getTeacherLastName() {
        return teacherLastName;
    }

    public void setTeacherLastName(String teacherLastName) {
        this.teacherLastName = teacherLastName;
    }

    public String getTeacherPassword() {
        return teacherPassword;
    }

    public void setTeacherPassword(String teacherPassword) {
        this.teacherPassword = teacherPassword;
    }
}
