package com.revision.Entities.Auth.ResetPassword;

import com.revision.Entities.Auth.App_User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
public class ResetPassword {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    App_User appUser;

    String token;

    LocalDateTime expireTime;

    public boolean isExpired(){
        return expireTime.isBefore(LocalDateTime.now());
    }



}
