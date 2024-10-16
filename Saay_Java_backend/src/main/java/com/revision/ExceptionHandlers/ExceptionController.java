package com.revision.ExceptionHandlers;

import com.revision.ExceptionHandlers.Exceptions.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@ControllerAdvice
public class ExceptionController {

    @ExceptionHandler(value = NotFoundException.class)
    public ResponseEntity<?> handleNotFound(NotFoundException notFound){

//        private String message;     // Error message
//        private String details;     // Additional details about the exception (e.g., URI or method)
//        private int statusCode;     // HTTP status code (optional, if you're using this in a web context)
//        private String timestamp;   // Timestamp when the error occurred


        ExceptionDTO exceptionDTO = new ExceptionDTO(notFound.getMessage(), HttpStatus.BAD_REQUEST.value(), LocalDateTime.now().toString());

        return ResponseEntity.badRequest().body(exceptionDTO);
    }

}
