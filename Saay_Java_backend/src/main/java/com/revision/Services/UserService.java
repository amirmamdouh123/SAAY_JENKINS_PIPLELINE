package com.revision.Services;

import com.revision.Entities.Auth.App_User;
import com.revision.Entities.Auth.Role;
import com.revision.ExceptionHandlers.Exceptions.NotFoundException;
import com.revision.Repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserRepo userRepo;

    @Autowired
    RoleService roleService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepo.findByEmail(email).orElseThrow(()-> new NotFoundException("email is not found"));
    }

    public boolean validateRegisterEmail(App_User user){

        Optional<App_User> existUser =  userRepo.findByEmail(user.getEmail());

        return existUser.isEmpty();
    }

    public String  userInsert(App_User appUser) {
        if(appUser.getRole() == null) {
            Role userRole = roleService.getRoleById(1L);
            appUser.setRole(userRole);
        }
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        userRepo.save(appUser);
        return "User is Registered successfully";
    }
}
