package com.revision.Entities.Auth;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;
import java.util.List;

@Table(name ="Role" , schema = "saai")
@Entity
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String roleName;

//    @ManyToMany
//    @JoinTable( name = "role_authority_join" ,
//            joinColumns = @JoinColumn(name = "authority_id",referencedColumnName = "id"),
//            inverseJoinColumns = @JoinColumn(name = "role_id",referencedColumnName = "id") )
//    List<Authority> authorities;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "role_authorities_join",
        joinColumns = @JoinColumn(name = "role_id" , referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "authority_id",referencedColumnName = "id"))
    private List<Authority> authorities;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public List<Authority> getAuthorities() {
        return authorities;
    }



    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", roleName='" + roleName + '\'' +
                ", authorities=" + authorities +
                '}';
    }

    public void setAuthorities(List<Authority> authorities) {
        this.authorities = authorities;
    }

}
