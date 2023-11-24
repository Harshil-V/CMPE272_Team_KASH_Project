import { useState } from 'react';
import { Container, Card, Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function StudentDashboard() {
    const [date, setDate] = useState(new Date());

    const classes = [
        { id: 1, name: 'Mathematics', teacher: 'Mr. Smith', schedule: 'Mon, Wed, Fri' },
        { id: 2, name: 'Physics', teacher: 'Mrs. Johnson', schedule: 'Tue, Thu' },
        { id: 3, name: 'Biology', teacher: 'Dr. Green', schedule: 'Mon, Thu' },
        { id: 4, name: 'Chemistry', teacher: 'Ms. White', schedule: 'Wed, Fri' },
        { id: 5, name: 'English Literature', teacher: 'Mr. Brown', schedule: 'Tue, Thu' },
        { id: 6, name: 'World History', teacher: 'Ms. Black', schedule: 'Mon, Wed' },
        // ... you can add more classes as needed
    ];


    const grades = [
        { class: 'Mathematics', grade: 'A' },
        { class: 'Physics', grade: 'B+' },
        { class: 'Biology', grade: 'A-' },
        { class: 'Chemistry', grade: 'B' },
        { class: 'English Literature', grade: 'B+' },
        { class: 'World History', grade: 'A' },
        // ... more grades for additional classes
    ];


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

                {/* Additional Components */}
                {/* For example, a button to view detailed grade reports */}
                {/* <Button variant="primary">View Detailed Grade Report</Button> */}
            </Container>
        </>

    )
}

export default StudentDashboard