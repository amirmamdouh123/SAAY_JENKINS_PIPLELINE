package com.revision.Entities.Auth;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.data.annotation.AccessType;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "app_users" , schema = "saai")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class App_User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;


    @AccessType(AccessType.Type.FIELD)
    @NotNull
    String name;     //has getter

    @AccessType(AccessType.Type.FIELD)
    @NotNull
    String email;

    @NotNull
    @Size(min = 4,max = 20)
    String password;      //has getter

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    Role role;           //has no getter

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role.getAuthorities();
    }



    @Override
    public String getUsername() {
        return email;
    }




    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String toString() {
        return "App_User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", role=" + role +
                '}';
    }
}
