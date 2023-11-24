import { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../StudentCourses.css';

function CourseViewStudent() {
    const [classes, setClasses] = useState([]);


    useEffect(() => {
        // Replace this with actual data fetching logic
        const fetchedClasses = [
            { id: 1, name: 'Mathematics', teacher: 'Mr. Smith', schedule: 'Mon, Wed, Fri' },
            { id: 2, name: 'Physics', teacher: 'Mrs. Johnson', schedule: 'Tue, Thu' },
            { id: 3, name: 'Biology', teacher: 'Dr. Green', schedule: 'Mon, Thu' },
            { id: 4, name: 'Chemistry', teacher: 'Ms. White', schedule: 'Wed, Fri' },
            { id: 5, name: 'English Literature', teacher: 'Mr. Brown', schedule: 'Tue, Thu' },
            { id: 6, name: 'World History', teacher: 'Ms. Black', schedule: 'Mon, Wed' },
            // ... you can add more classes as needed
        ];
        setClasses(fetchedClasses);
    }, []);



    return (
        <>
            <Container className="student-classes-container">
                <h1>My Courses</h1>
                <Table striped bordered hover className="student-classes-table">
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map(c => (
                            <tr key={c.id}>
                                <td>
                                    <Link to={`/class/${c.name}`} target='_blank'>{c.name}</Link>
                                </td>
                                <td>{c.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default CourseViewStudent;