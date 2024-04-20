Create Database College;
use college;
create table student (
	roll_no int,
    name varchar(30),
    age int
);

Insert into student
values
(101,"adam",12),
(102,"eve",13);

select * from student;

create table user (
	id int,
    age int,
    name varchar(30) not null,
    email varchar(50) unique,
    followers int,
    following int,
    constraint check (age >= 14),
    primary key (id)
);

create table post (
	id INT Primary key,
    content varchar(100),
    user_id int,
    foreign key (user_id) references user(id)
);

Insert into user
values
(1,15,"adam","adam@yahoo.com",102,202);

select * from user;

insert into post
value
(101,"GOOD MORNING",1);

select * from post;

drop table student;

Insert into user 
values
(2,16,"eve","eve@yahoo.com",202,302),
(3,15,"joe","joe@yahoo.com",442,232),
(4,17,"cj","cj@yahoo.com",402,222),
(5,19,"chand","chand@yahoo.com",302,432);

select * from user
where followers >= 300;

select name from user
where age > 15
Limit 2;

select name, age, followers
from user
order by followers ASC;

select name, age, followers
from user
order by followers desc;

select max(followers) from user;
select min(followers) from user;
select avg(followers) from user;
select sum(followers) from user;
select count(followers) from user;

select count(age) from user
where (age> 15);

select age, count(id) from user
group by age;

select age, max(followers) from user
group by age;

select age, max(followers) from user
group by age
having max(followers) > 400;

SET SQL_SAFE_UPDATES = 0;

update user
set followers = 600
where age = 15;

select age,followers from user;

alter table user
add column city varchar(30) default "Pune";

select * from user;

alter table user
rename to InstaUser;

select * from InstaUser;

truncate table post;
select * from post;

drop table post;
select * from post;


