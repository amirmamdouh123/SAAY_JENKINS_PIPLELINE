package com.revision.AOP;

import com.mysql.cj.log.Log;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Aspect
@Component
public class AOP {

    private static final Logger  logger = LoggerFactory.getLogger("sss");

    // Pointcut to match the execution of all doFilter methods in classes implementing Filter
    @Around("execution(* javax.servlet.Filter+.doFilter(..))")
    public Object logFilterExecution(ProceedingJoinPoint joinPoint) throws Throwable {
        // Log the class name and method name before execution
        String filterClassName = joinPoint.getSignature().getDeclaringTypeName();
        logger.info("Request passed through filter: {}", filterClassName);

        try {
            // Proceed with the method execution (filter processing)
            Object result = joinPoint.proceed();

            // Log after successful execution
            logger.info("Filter {} executed successfully", filterClassName);

            return result;
        } catch (Throwable ex) {
            // Log exception if it occurs during filter execution
            logger.error("Exception in filter {}: {}", filterClassName, ex.getMessage());
            throw ex;
        }
    }

}
