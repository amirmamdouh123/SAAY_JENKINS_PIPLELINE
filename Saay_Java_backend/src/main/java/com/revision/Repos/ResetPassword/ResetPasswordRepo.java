package com.revision.Repos.ResetPassword;

import com.revision.Entities.Auth.ResetPassword.ResetPassword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResetPasswordRepo extends JpaRepository<ResetPassword,Long> {


    Optional<ResetPassword> findByToken(String token);

    @Override
    void deleteById(Long id);
}
