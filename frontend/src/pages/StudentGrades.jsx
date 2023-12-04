import { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import NavigationBar from '../components/NavBar';
import axios from 'axios';
import '../StudentCourses.css';

function GradesPage() {
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                // Replace the URL with your actual API endpoint for fetching grades
                const response = await axios.get('/api/grades');
                setGrades(response.data);
            } catch (error) {
                console.error('Error fetching grades:', error);
                alert('Error fetching grades');
            }
        };

        fetchGrades();
    }, []);

    return (
        <>
            <NavigationBar /> 
            <Container className="student-classes-container">
                <h1>Your Grades</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((item, index) => (
                            <tr key={index}>
                                <td>{item.class}</td>
                                <td>{item.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default GradesPage;
