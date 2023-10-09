package com.example.dod.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

	// handling specific exception
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> resourceNotFoundHandling(Exception exception){
		ErrorDetails errorDetails = 
				new ErrorDetails(exception.getMessage(),false);
		return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	}
	
//	@ExceptionHandler(ResourceFoundException.class)
//	public ResponseEntity<?> resourceFoundHandling(ResourceFoundException exception, WebRequest request){
//		ErrorDetails errorDetails = 
//				new ErrorDetails(exception.getMessage(),false);
//		return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);
//	}
//	
//	@ExceptionHandler(InvalidCredentialsException.class)
//	public ResponseEntity<?> invalidCredentialsHandling(InvalidCredentialsException exception, WebRequest request){
//		ErrorDetails errorDetails = 
//				new ErrorDetails(exception.getMessage(),false);
//		return new ResponseEntity<>(errorDetails, HttpStatus.UNAUTHORIZED);
//	}
}
