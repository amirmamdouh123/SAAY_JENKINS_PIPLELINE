package com.revision;

import com.revision.Entities.Auth.App_User;
import com.revision.Entities.Auth.Authority;
import com.revision.Entities.Auth.Role;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Command implements CommandLineRunner {

    @Autowired
    EntityManager entityManager;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public void run(String... args) throws Exception {

//        Role admin = new Role();
//        admin.setRoleName("ADMIN");
//
//        List<Authority>c =new ArrayList<>();
//        c.add(Authority.ROLE_READ);
//        c.add(Authority.ROLE_WRITE);
//        c.add(Authority.ROLE_UPDATE);
//        admin.setAuthorities(c);
//        App_User amir = new App_User(null,"bosy",passwordEncoder.encode("password"),admin);



//        entityManager.persist(admin);
//
//        entityManager.persist(amir);

    }
}
