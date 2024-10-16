package com.revision.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "departments", schema = "revise")
@Setter
@Getter
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;


    String name;



}
