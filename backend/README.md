# schoolbackend
A Springboot application to handle CRUD operation for school management application.

<div align="center">

  <h1 align="center">School Management: CMPE 272 -  Enterprise Project </h1>

</div>

### Local Software Requirements
Make sure you have the following software installed on your local machine:

- AWS CLI
- IntelliJ
- MySQL Workbench
- JDK 11
- Apache Maven
- PostMan

### Backend (Spring Boot)

> Note: Have a JDK installation on your system. Either set the JAVA_HOME environment variable pointing to your JDK installation or have the java executable on your PATH.

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
$ java -jar target/travel-app-0.0.1-SNAPSHOT.jar
```

<h4>5. To run the Spring boot application using Maven </h4>

```bash
$ $ mvn spring-boot:run
```