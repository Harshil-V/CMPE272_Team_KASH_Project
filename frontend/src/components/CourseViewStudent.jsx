import { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../StudentCourses.css';

function CourseViewStudent() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/classes');
                setClasses(response.data);
            } catch (error) {
                console.error('Error fetching classes:', error);
                alert('Error fetching classes')
            }
        };

        fetchData();
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
    );
}

export default CourseViewStudent;
