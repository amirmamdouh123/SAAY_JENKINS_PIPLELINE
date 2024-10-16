package com.revision.Filters;

import com.revision.Entities.Auth.App_User;
import com.revision.ExceptionHandlers.Exceptions.NotFoundException;
import com.revision.JwtServices.JwtService;
import com.revision.Services.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JWTFilter extends OncePerRequestFilter {

    @Autowired
    JwtService jwtService;

    @Autowired
    UserService userService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        if(request.getRequestURI().startsWith("/auth")){
            filterChain.doFilter(request,response);
            return;

        }

        String jwt = null;

//        Cookie[] cookies =request.getCookies();
//        for (Cookie cookie : cookies){
//            if(cookie.getName().equals("Authorization")){
//                jwt= cookie.getValue();
//            }
//        }
        HttpSession session =request.getSession();
        jwt = (String)session.getAttribute("Authorization");
        System.out.println("jwt from cookies: "+ jwt);
        if(jwt == null) {
            jwt = request.getHeader("Authorization");
        }
        if( jwt.isBlank() || jwt.isEmpty() || !jwt.startsWith("Bearer")){
            throw new NotFoundException("Session is Expired, Please Login again.");
//                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                    response.getWriter().write("Unauthorized");
        }
        else {

            jwt = jwt.substring(7);



            String username = jwtService.getUsernameFromToken(jwt);

            System.out.println("username from jwt: "+username);

            App_User user = (App_User) userService.loadUserByUsername(username);  //get user from database

            System.out.println("user from jwt: "+user);


            if(user != null && !jwtService.isExpired(jwt)){

                System.out.println("JWT is login successfully from cookies");

                System.out.println("authority of current user is: "+user.getAuthorities() );
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(user,null,user.getAuthorities());

                SecurityContextHolder.getContext().setAuthentication(authToken);
                filterChain.doFilter(request,response);
            }
            else {

                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Unauthorized");
                return;
            }



        }


    }
}
