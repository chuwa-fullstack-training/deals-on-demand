package com.example.dod.Exceptions;

public class ErrorDetails {
	private String message;
	private boolean flag;
	
	public ErrorDetails(String message, boolean flag) {
		super();
		this.message = message;
		this.flag = flag;
	}
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean getflag() {
		return flag;
	}
	public void setflag(boolean flag) {
		this.flag = flag;
	}
}