package com.sjsu.enterprise.schoolmanagement.model;

public class File {
	
	private Long fileID;
    private String fileName;
    private String fileDescription;
    private String fileURL;
    private String uploadTime;
    private String updateTime;
    private Student student;
   
	public File() {
		super();
	}

	/**
	 * @param fileID
	 * @param fileName
	 * @param fileDescription
	 * @param fileURL
	 * @param uploadTime
	 * @param updateTime
	 */
	public File(Long fileID, String fileName, String fileDescription, String fileURL, String uploadTime,
                   String updateTime, Student student) {
		super();
		this.fileID = fileID;
		this.fileName = fileName;
		this.fileDescription = fileDescription;
		this.fileURL = fileURL;
		this.uploadTime = uploadTime;
		this.updateTime = updateTime;
		this.student = student;
	}
    
	public Long getFileID() {
		return fileID;
	}
	
	public void setFileID(Long fileID) {
		this.fileID = fileID;
	}
	
	public String getFileName() {
		return fileName;
	}
	
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
	public String getFileDescription() {
		return fileDescription;
	}
	
	public void setFileDescription(String fileDescription) {
		this.fileDescription = fileDescription;
	}
	
	public String getFileURL() {
		return fileURL;
	}
	
	public void setFileURL(String fileURL) {
		this.fileURL = fileURL;
	}
	
	public String getUploadTime() {
		return uploadTime;
	}
	
	public void setUploadTime(String uploadTime) {
		this.uploadTime = uploadTime;
	}
	
	public String getUpdateTime() {
		return updateTime;
	}
	
	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}
	
	public Student getUser() {
		return student;
	}

	public void setUser(Student student) {
		this.student = student;
	}
}
