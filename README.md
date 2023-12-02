# CMPE272_Team_KASH_Project

<div align="center">
  <h1 align="center">School Management: CMPE 272 -  Enterprise Project </h1>
</div>

## Project Introduction:
### Project Objective:

The School Management Application aims to create a centralized and efficient platform for key administrative and academic processes in a school environment. This includes managing student records, attendance tracking, academic performance monitoring, communication between teachers and parents, class and exam scheduling, financial management, and library services. The application aims to streamline these tasks, enhance collaboration, and provide real-time insights through reporting and analytics. Ultimately, it seeks to improve the overall efficiency, transparency, and communication within the school community, contributing to a better educational experience for students, teachers, and parents.

### Local Software Requirements
Make sure you have the following software installed on your local machine:
- React.js
- AWS CLI
- IntelliJ
- MySQL Workbench
- JDK 11
- Apache Maven
- PostMan

### Features
- Manage Student
- Manage Teacher
- Manage Parent
- Manage Course
- Manage Attendance
- Manage Assignments
- Manage Grade

### Local Project Configuration
[Provide instructions on how to configure the project locally, if applicable]

## How to Set Up and Run the Project Locally

1. **Clone the Repository:**

```bash
$ git clone https://github.com/Harshil-V/CMPE272_Team_KASH_Project

$ cd CMPE272_Team_KASH_Project
```

### Frontend
<h4>1. Change Directory to /frontend</h4>

```bash
$ cd frontend
```

<h34>2. Install Dependencies</h34> 

```bash
$ npm i # or npm install
```

<h4>3. Initialize Amplify</h4>

```bash
$ amplify init # complete the steps
```

<h4>4. Add Amplify Auth</h4>

```bash
$ amplify add auth # complete the steps
```
> Note: Use 'Default configuration' and 'Sign In with Username'

<h4>5. Push to Publish AWS Resouces Config for Frontend</h4>

```bash
$ amplify push 
```
> Note: This uses CloudFromation

<h4>6. Make any change to API Endpoint on the code</h4>

```bash
$ npm run dev # application will be accessible at `http://localhost:5173/``
```
> Note: Update `baseURL` where needed

### Backend (Spring Boot)

> Note: Have a JDK installation on your system. Either set the JAVA_HOME environment variable pointing to your JDK installation or have the Java executable on your PATH.

> This project uses JDK 11. To check your JDK version installed locally:

```bash
$ java -version
```

<h4>1. Change Directory to /backend</h4>

```bash
$ cd frontend
```

<h4>2. Run the below Maven cmd </h4>

```bash
$ mvn clean install
```

<h4>3. Run the below Maven cmd to create a jar in target folder</h4>

```bash
$ mvn clean package
```

<h4>4. To run the Spring boot application using jar </h4>

```bash
$ java -jar target/school-management-0.0.1-SNAPSHOT.jar
```

<h4>5. To run the Spring boot application using Maven </h4>

```bash
$ $ mvn spring-boot:run
```
