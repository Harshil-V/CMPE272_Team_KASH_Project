import { Container, Card, Table, Row, Col, Button } from 'react-bootstrap';
import NavigationBar from '../components/NavBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

function StudentDashboard() {
    const [date, setDate] = useState(new Date());

    const classes = [
        { id: 1, name: 'Mathematics', teacher: 'Mr. Smith', schedule: 'Mon, Wed, Fri' },
        { id: 2, name: 'Physics', teacher: 'Mrs. Johnson', schedule: 'Tue, Thu' },
        // ... more classes
    ];

    const grades = [
        { class: 'Mathematics', grade: 'A' },
        { class: 'Physics', grade: 'B+' },
        // ... more grades
    ];

    return (
        <>
            <NavigationBar />

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
                                                <td>{c.name}</td>
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
                                <Calendar onChange={setDate} value={date} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Additional Components */}
                {/* For example, a button to view detailed grade reports */}
                <Button variant="primary">View Detailed Grade Report</Button>
            </Container> F
        </>

    )
}

export default StudentDashboard