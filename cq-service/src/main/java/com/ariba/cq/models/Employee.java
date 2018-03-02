package com.ariba.cq.models;


import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity(name="ttl_consultants")
@Table(name = "ttl_consultants")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    @Column(name="lastname")
    private String lastName;

    @NotNull
    @Column(name="firstname")
    private String firstName;

    @Column(name="position")
    private String position;

    @Column(name="degree1")
    private String degree1;

    @Column(name="degree2")
    private String degree2;

    @Column(name="degree3")
    private String degree3;

    @Column(name="specialist")
    private String specialist;

    @Column(name="fields")
    private String fields;

    @Column(name="expertise")
    private String expertise;

    @Column(name="interests")
    private String interests;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDegree1() {
        return degree1;
    }

    public void setDegree1(String degree1) {
        this.degree1 = degree1;
    }

    public String getDegree2() {
        return degree2;
    }

    public void setDegree2(String degree2) {
        this.degree2 = degree2;
    }

    public String getDegree3() {
        return degree3;
    }

    public void setDegree3(String degree3) {
        this.degree3 = degree3;
    }

    public String getSpecialist() {
        return specialist;
    }

    public void setSpecialist(String specialist) {
        this.specialist = specialist;
    }

    public String getFields() {
        return fields;
    }

    public void setFields(String fields) {
        this.fields = fields;
    }

    public String getExpertise() {
        return expertise;
    }

    public void setExpertise(String expertise) {
        this.expertise = expertise;
    }

    public String getInterests() {
        return interests;
    }

    public void setInterests(String interests) {
        this.interests = interests;
    }
}
