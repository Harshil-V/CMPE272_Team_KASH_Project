import { useState, useEffect } from 'react';
import { Container, Card, Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

function StudentDashboard() {
    const [date, setDate] = useState(new Date());
    const [classes, setClasses] = useState([]);
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        const fetchClassesAndGrades = async () => {
            try {
                const classesResponse = await axios.get('/api/classes'); // Replace with your actual API endpoint for classes
                const gradesResponse = await axios.get('/api/grades'); // Replace with your actual API endpoint for grades

                setClasses(classesResponse.data);
                setGrades(gradesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert("Error fetching data")
            }
        };

        fetchClassesAndGrades();
    }, []);

    return (
        <>
            <Container style={{ marginTop: '20px' }}>
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>Welcome to Your Dashboard</Card.Title>
                        <Card.Text>
                            Here you can view your classes, grades, and update your profile.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Row>
                    {/* Enrolled Classes */}
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Enrolled Classes</Card.Title>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Class Name</th>
                                            <th>Teacher</th>
                                            <th>Schedule</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classes.map((c) => (
                                            <tr key={c.id}>
                                                <td>
                                                    <Link to={`/class/${c.name}`} target='_blank'>{c.name}</Link>
                                                </td>
                                                <td>{c.teacher}</td>
                                                <td>{c.schedule}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Recent Grades */}
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Recent Grades</Card.Title>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Class</th>
                                            <th>Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {grades.map((g, index) => (
                                            <tr key={index}>
                                                <td>{g.class}</td>
                                                <td>{g.grade}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Mini Calendar */}
                    <Col md={4}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Calendar</Card.Title>
                                <center>
                                    <Calendar onChange={setDate} value={date} />
                                </center>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default StudentDashboard;
