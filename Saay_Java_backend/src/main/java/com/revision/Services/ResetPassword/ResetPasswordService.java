package com.revision.Services.ResetPassword;

import com.revision.Entities.Auth.App_User;
import com.revision.Entities.Auth.ResetPassword.ResetPassword;
import com.revision.ExceptionHandlers.Exceptions.NotFoundException;
import com.revision.Repos.ResetPassword.ResetPasswordRepo;
import com.revision.Services.EmpService;
import com.revision.Services.UserService;
import com.revision.SmtpMail.App_SMTP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class ResetPasswordService {

    @Autowired
    UserService userService;

    @Autowired
    ResetPasswordRepo resetPasswordRepo;

    @Autowired
    App_SMTP appSmtp;


    public String generateToken(){
        return UUID.randomUUID().toString();
    }


    //request a new Resent password
    public String createPasswordResetUser(String email){

        App_User user= (App_User) userService.loadUserByUsername(email);

        ResetPassword resetPassword = new ResetPassword();
        resetPassword.setToken(generateToken());
        resetPassword.setExpireTime(LocalDateTime.now());
        resetPassword.setAppUser(user);
        resetPasswordRepo.save(resetPassword);
        //send email to this

        appSmtp.sendResetPasswordMail(user,resetPassword.getToken());

        return "Reset Mail is sent successfully";
    }

    public boolean validateTokenNotExpired(String token){
        Optional<ResetPassword> resetPassword = resetPasswordRepo.findByToken(token);

        if(resetPassword.isPresent()){
            return !resetPassword.get().isExpired();
        }
        return false;
    }


    public String updateUserPassword(String token , String password){

        Optional<ResetPassword> resetPasswordOptional = resetPasswordRepo.findByToken(token);
        if(resetPasswordOptional.isPresent()){
            ResetPassword resetPassword=resetPasswordOptional.get();
            App_User appUser= resetPassword.getAppUser();
            appUser.setPassword(password);
            userService.userInsert(appUser);

            //finished resetting password -> delete resetPasswordRequest

            deleteResetPasswordRequestById(resetPassword.getId());
            return "password is updated successfully";
        }

        throw new NotFoundException("Token is not Valid");
    }

    public void deleteResetPasswordRequestById(Long id) {
        resetPasswordRepo.deleteById(id);

    }

}
