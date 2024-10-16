package com.revision.Services;

import com.revision.Entities.Auth.Role;
import com.revision.Repos.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    RoleRepo roleRepo;

    public Role getRoleById(Long id){
        Optional<Role> role =roleRepo.findById(id);
        if(role.isPresent()){
            return role.get();
        }
        throw new IllegalArgumentException("Role is not exists");
    }
}
