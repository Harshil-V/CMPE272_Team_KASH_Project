use schoolmanagementdb;
show TABLES;

create table admin(
admin_email varchar(30) primary key,
admin_password varchar(20),
admin_fname varchar(30),
admin_lname varchar(30),
join_date datetime);

select * from admin;
drop table admin;

INSERT INTO schoolmanagementdb.admin (admin_email, admin_fname,admin_lname, admin_password) 
VALUES ('miyarkarthikkamath@gmail.com','Miyar Karthik', 'Kamath','miya123');


create table course(
course_id int not null,
course_name varchar(70),
course_credit int,
course_type varchar(30),
grade_id varchar(30),
primary key (course_id),
foreign key (grade_id) references grade(grade_id)
);

select * from course;
drop table course;

insert into schoolmanagementdb.course (course_id, course_name, course_credit, course_type, grade_id)
values ('272', 'CMPE-272 - Enterprise SW Plat', '3', 'Compulsory', 'P1');
insert into schoolmanagementdb.course (course_id, course_name, course_credit, course_type, grade_id)
values ('281', 'CMPE-281 - Cloud Technologies', '3', 'Compulsory', 'K');
insert into schoolmanagementdb.course (course_id, course_name, course_credit, course_type, grade_id)
values ('283', 'CMPE 283 - Virtual Technologies', '3', 'Compulsory', 'P1');

create table teacher(
teacher_id bigint not null primary key,
teacher_email varchar(30),
teacher_password varchar(20),
teacher_fname varchar(30),
teacher_lname varchar(30),
join_date datetime);

select * from teacher;
drop table teacher;

INSERT INTO schoolmanagementdb.teacher (teacher_id, teacher_email, teacher_fname, teacher_lname, teacher_password) 
VALUES ('1007','andrewbond@gmail.com','Andrew', 'Bond','bond007');
INSERT INTO schoolmanagementdb.teacher (teacher_id, teacher_email, teacher_fname, teacher_lname, teacher_password) 
VALUES ('1008','sanjaygarje@gmail.com','Sanjay', 'Garje','san123');
INSERT INTO schoolmanagementdb.teacher (teacher_id, teacher_email, teacher_fname, teacher_lname, teacher_password) 
VALUES ('1009','michaellarkin@gmail.com','Michael', 'Larkin','mike123');


create table student(
student_id bigint not null,
parent_id bigint not null,
student_email varchar(30),
student_fname varchar(30),
student_lname varchar(30),
age int,
gender varchar(15),
student_address  varchar(100),
student_phone bigint,
student_password varchar(20),
join_date datetime,
grade_id varchar(30) not null,
primary key (student_id),
foreign key (grade_id) references grade(grade_id),
foreign key (parent_id) references parent(parent_id));

select * from student;
drop table student;

INSERT INTO schoolmanagementdb.student (student_id, student_email, student_fname, student_lname, age, gender, student_address, student_phone, student_password, parent_id, grade_id)
VALUES ('017449133', 'miyarkarthikkamath@gmail.com', 'Miyar Karthik', 'Kamath','26', 'Male', 'Alameda, San Jose', '4085813438', 'kaka123','9133', 'P1');
INSERT INTO schoolmanagementdb.student (student_id, student_email, student_fname, student_lname, age, gender, student_address, student_phone, student_password, parent_id, grade_id)
VALUES ('017449134', 'mohithsharma@gmail.com', 'Mohith', 'Sharma','23', 'Male', 'Alameda, San Jose', '4085813439', 'mohith123','9134', 'K');
INSERT INTO schoolmanagementdb.student (student_id, student_email, student_fname, student_lname, age, gender, student_address, student_phone, student_password, parent_id, grade_id)
VALUES ('017449135', 'harshilvyas@gmail.com', 'Harshil', 'Vyas','23', 'Male', 'San Fernando, San Jose', '4085813440', 'harsh123','9135', 'K');
INSERT INTO schoolmanagementdb.student (student_id, student_email, student_fname, student_lname, age, gender, student_address, student_phone, student_password, parent_id, grade_id)
VALUES ('017449136', 'pranavjain@gmail.com', 'Pravan', 'Jain','25', 'Male', 'Alameda, San Jose', '4085813441', 'pran123','9136', 'P1');



create table parent(
parent_id bigint not null,
parent_email varchar(30),
parent_fname varchar(30),
parent_lname varchar(30),
relationship varchar(15),
parent_phone bigint,
parent_password varchar(20),
join_date datetime,
primary key (parent_id));

select * from parent;
drop table parent;

INSERT INTO schoolmanagementdb.parent (parent_id, parent_email, parent_fname, parent_lname, relationship, parent_phone, parent_password)
VALUES ('9133', 'kamathfamily@gmail.com','Miyar', 'Kamath', 'Father', '3085813438', 'miya123');
INSERT INTO schoolmanagementdb.parent (parent_id, parent_email, parent_fname, parent_lname, relationship, parent_phone, parent_password)
VALUES ('9134', 'coorgfamily@gmail.com','Mahesh', 'G', 'Father', '3085813439', 'mahi123');
INSERT INTO schoolmanagementdb.parent (parent_id, parent_email, parent_fname, parent_lname, relationship, parent_phone, parent_password)
VALUES ('9136', 'bengalurufamily@gmail.com','Prasad', 'Jain', 'Father', '3085813440', 'prad123');


create table grade(
grade_id varchar(30) not null,
name varchar(30),
description varchar(100),
primary key (grade_id)
);

select * from grade;
drop table grade;

insert into schoolmanagementdb.grade (grade_id, name, description)
values ('P1', 'Preschool', 'Age 3-4');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('P2', 'Preschool', 'Age 4-5');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('K', 'Kindergarten', 'Age 5-6');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('1', 'Grade 1', 'Age 6-7');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('2', 'Grade 2', 'Age 7-8');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('3', 'Grade 3', 'Age 8-9');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('4', 'Grade 4', 'Age 9-10');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('5', 'Grade 5', 'Age 10-11');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('6', 'Grade 6', 'Age 11-12');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('7', 'Grade 7', 'Age 12-13');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('8', 'Grade 8', 'Age 13-14');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('9', 'Grade 9', 'Age 14-15');
insert into schoolmanagementdb.grade (grade_id, name, description)
values ('10', 'Grade 10', 'Age 15-16');

create table exam(
exam_name varchar(30),
exam_description varchar(100),
exam_type enum('Midterm', 'Final'),
grade enum('Pass', 'Fail'),
student_id bigint not null,
course_id int not null,
primary key (student_id, course_id),
foreign key (student_id) references student(student_id),
foreign key (course_id) references course(course_id)
);

select * from exam;
drop table exam;

insert into schoolmanagementdb.exam (exam_name, exam_description, exam_type, grade, student_id, course_id)
values ('CMPE 272', 'Exam', 'Midterm', 'Pass', '017449133', '272');


create table attendance(
date date,
student_id bigint not null,
course_id int not null,
status enum('Present', 'Absent'),
primary key (date, student_id, course_id),
foreign key (student_id) references student(student_id),
foreign key (course_id) references course(course_id)
);

select * from attendance;
drop table attendance;

insert into schoolmanagementdb.attendance (date, student_id, course_id, status)
values ('2023-11-09', '017449133', '272', 'Present');

create table assignement(
date date,
student_id bigint not null,
course_id int not null,
status enum('Submitted', 'Pending'),
primary key (date, student_id, course_id),
foreign key (student_id) references student(student_id),
foreign key (course_id) references course(course_id)
);

select * from assignement;
insert into schoolmanagementdb.assignement (date, student_id, course_id, status)
values ('2023-12-01', '017449133', '272', 'Submitted');


create table file(
file_name varchar(50) not null,
file_desc varchar(500),
file_url varchar(500),
version_no varchar(50),
upload_date varchar(100),
update_date varchar(100),
primary key (file_name),
student_email varchar(60) references student(student_email)
);

SELECT * from schoolmanagementdb.file;
drop table file;