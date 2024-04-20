create database institute;
use institute;

CREATE TABLE Teacher(
	id INT primary key,
    name varchar(30),
    subject varchar(20),
    salary INT
);

Insert into Teacher
(id,name,subject,salary)
value
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000); 

select * from Teacher;

select name, salary from Teacher
where salary > 55000;

Alter table Teacher
change column salary ctc int;

select * from Teacher;

update Teacher
set ctc = ctc + ctc * 0.25;

select * from Teacher;

Alter table Teacher
add column city varchar(20) default "Gurgaon";

select * from Teacher;

Alter table Teacher
drop column ctc;

select * from Teacher;

create table student_info(
	roll_no INT Primary key,
    name varchar(30),
    city varchar(20),
    marks int
);

Insert into student_info
values
(110,"adam","Delhi",76),
(108,"bob","Mumbai",65),
(124,"Casey","Pune",94),
(112,"duke","Pune",80);

select * from student_info;

select name,marks from student_info
where marks > 75;

select distinct city
from student_info;

select city, count(roll_no) from student_info
group by city;

select city, max(marks)
from student_info
group by city;

select avg(marks)
from student_info;

alter table student_info
add column grade varchar(2);

update student_info
set grade = "O"
where marks >= 80;

update student_info
set grade = "A"
where marks >= 70 AND marks < 80;

update student_info
set grade = "B"
where marks >= 60 AND marks < 70;

select * from student_info;