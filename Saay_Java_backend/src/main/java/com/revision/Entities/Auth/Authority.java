package com.revision.Entities.Auth;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;


@Entity
@Table(name = "authorities", schema = "saai")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Authority implements GrantedAuthority{

    @Id
    Long id;

    String authority;



    @Override
    public String getAuthority() {
        return authority;
    }
}
