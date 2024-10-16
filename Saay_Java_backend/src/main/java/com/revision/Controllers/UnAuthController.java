package com.revision.Controllers;

import com.revision.Entities.Auth.App_User;
import com.revision.Entities.Auth.Login;
import com.revision.Entities.Auth.ResetPassword.NewPasswordDTO;
import com.revision.ExceptionHandlers.Exceptions.NotFoundException;
import com.revision.JwtServices.JwtService;
import com.revision.Services.ResetPassword.ResetPasswordService;
import com.revision.Services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
public class UnAuthController {

    @Autowired
    AuthenticationManager manager;

    @Autowired
    JwtService jwtService;

    @Autowired
    UserService userService;

    @Autowired
    ResetPasswordService resetPasswordService;
//    @GetMapping()
//    public String z(){
//        return  "I'm unauthenticated";
//    }
//
//    @GetMapping("log")
//    public String x(){
//        return  "I'm unauthenticated";
//    }

//    @PostMapping("login")
//    public String login(@RequestBody Login loginUser , HttpServletResponse response){
//
//        System.out.println("login");
//        UsernamePasswordAuthenticationToken login = new UsernamePasswordAuthenticationToken(loginUser.getUsername(),loginUser.getPassword());
//        Authentication authentication = manager.authenticate(login);
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        String token = jwtService.generateToken(login.getName());
//
//        System.out.println(token);
//        Cookie c =new Cookie("Authorization","Bearer"+token.trim());
//        c.setHttpOnly(true);
//        c.setSecure(true); // Set to true if using HTTPS
//        c.setPath("/");
//        c.setMaxAge(3600); // Set cookie expiration time (1 hour in seconds)
//        response.addCookie(c);
//
//        return token;
//
//    }




    @PostMapping("login")
    public String login(HttpServletRequest request, HttpServletResponse response){

        System.out.println("login");
        UsernamePasswordAuthenticationToken login = new UsernamePasswordAuthenticationToken(request.getHeader("email"),request.getHeader("password"));
        Authentication authentication = manager.authenticate(login);

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtService.generateToken(login.getName());

        System.out.println(token);

        HttpSession session = request.getSession();
        session.setAttribute("Authorization","Bearer "+token.trim());

//        Cookie c =new Cookie("Authorization","Bearer"+token.trim());
//        c.setHttpOnly(true);
//        c.setSecure(true); // Set to true if using HTTPS
//        c.setPath("/");
//        c.setMaxAge(3600); // Set cookie expiration time (1 hour in seconds)
//        response.addCookie(c);

        return token;

    }

    @GetMapping("logout")
    public String logout(HttpServletRequest request,HttpServletResponse response , HttpSession httpSession){

        httpSession.invalidate();
        HttpSession session = request.getSession();
        session.removeAttribute("Authorization");

//
//
//        Cookie c =new Cookie("Authorization",null);
//        c.setPath("/");
//        c.setMaxAge(0); // Set cookie expiration time
//        response.addCookie(c);

        return "logout successfully";

    }

    @PostMapping("register")
    public String register(@RequestBody App_User register){
        System.out.println("register");
        if(userService.validateRegisterEmail(register)){

            return userService.userInsert(register);
        }else{
            throw new NotFoundException("email is already exists");
        }


    }

    @GetMapping("reset-password")
    public String resetPasswordRequest(@RequestParam String email){ // create a new ResetPassword object and send mail
       return resetPasswordService.createPasswordResetUser(email);
    }



    @GetMapping("validateToken")
    public boolean validateTokenNotExpired(@RequestParam("token") String token){ 
        return resetPasswordService.validateTokenNotExpired(token); //true or false
    }

    @PostMapping("newPassword")
    public String setNewPassword(@RequestParam String token, @RequestBody NewPasswordDTO passwordDTO){
        return resetPasswordService.updateUserPassword(token ,passwordDTO.getNewPassword());
    }


}
