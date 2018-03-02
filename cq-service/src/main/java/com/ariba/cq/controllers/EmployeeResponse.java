package com.ariba.cq.controllers;

import com.ariba.cq.models.Employee;

public class EmployeeResponse {
	public long id;
	public String lastName;	    
    public String firstName;
    public String position;	   
    public String degree1;    
    public String degree2;	    
    public String degree3;	   
    public String specialist;
    public String fields;
    public String expertise;
    public String interests;

    public EmployeeResponse(Employee e) {
    	this.id = e.getId();
    	this.lastName = e.getLastName();
    	this.firstName = e.getFirstName();
    	this.position = e.getPosition();
    	this.degree1 = e.getDegree1();
    	this.degree2 = e.getDegree2();
    	this.degree3 = e.getDegree3();
    	this.specialist = e.getSpecialist();
    	this.fields = e.getFields();
    	this.expertise = e.getExpertise();
    	this.interests = e.getInterests();
	}

	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public long getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
