package com.revision.Repos;

import com.revision.Entities.Auth.App_User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<App_User,Long> {

    public Optional<App_User> findByName(String name);
    public Optional<App_User> findByEmail(String email);

}
