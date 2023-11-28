package com.sjsu.enterprise.schoolmanagement.model;

public class Error {
	private Integer errorId;
	private String errorMessage;
	private String errorDescription;

	public Error() {
		super();
	}

	public Error(Integer errorId, String errorMessage, String errorDescription) {
		this.errorId = errorId;
		this.errorMessage = errorMessage;
		this.errorDescription = errorDescription;
	}

	public Integer getErrorId() {
		return errorId;
	}

	public void setErrorId(Integer errorId) {
		this.errorId = errorId;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getErrorDescription() {
		return errorDescription;
	}

	public void setErrorDescription(String errorDescription) {
		this.errorDescription = errorDescription;
	}
}
