package com.sjsu.enterprise.schoolmanagement.model;

public class File {

	private String fileName;
	private String fileDescription;
	private String fileURL;
	private String versionNo;
	private String uploadTime;
	private String updateTime;
	private String userEmail;

	public File() {
		super();
	}

	/**
	 * @param fileName
	 * @param fileDescription
	 * @param fileURL
	 * @param uploadTime
	 * @param updateTime
	 * @param userEmail
	 */
	public File(String fileName, String fileDescription, String fileURL, String uploadTime,
				String updateTime,String userEmail) {
		super();
		this.fileName = fileName;
		this.fileDescription = fileDescription;
		this.fileURL = fileURL;
		this.uploadTime = uploadTime;
		this.updateTime = updateTime;
		this.userEmail = userEmail;
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

	public String getVersionNo() {
		return versionNo;
	}

	public void setVersionNo(String versionNo) {
		this.versionNo = versionNo;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
}
