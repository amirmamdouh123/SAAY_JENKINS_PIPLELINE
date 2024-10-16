package com.revision.Entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "emp" , schema = "revise")
@Setter
@NoArgsConstructor
@Getter
@AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    String name;

    @ManyToOne
    @JoinColumn(name = "department_id" , referencedColumnName = "id")
    Department department;

    Integer age;    //age has no getter



}
