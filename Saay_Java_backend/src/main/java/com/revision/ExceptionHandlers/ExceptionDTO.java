package com.revision.ExceptionHandlers;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ExceptionDTO {

    private String message;     // Error message
    private int statusCode;     // HTTP status code (optional, if you're using this in a web context)
    private String timestamp;   // Timestamp when the error occurred



}
