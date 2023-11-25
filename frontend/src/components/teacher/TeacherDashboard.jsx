import { useState } from 'react';
import { Container, Card, Table, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


// Example Assignment Management Component
function AssignmentManagement() {
    // Dummy data for assignments
    const assignments = [
        { id: 1, title: 'Algebra Homework', dueDate: '2023-01-15' },
        { id: 2, title: 'Physics Project', dueDate: '2023-01-22' },
        // ... more assignments
    ];

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Assignment Management</Card.Title>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map(a => (
                            <tr key={a.id}>
                                <td>{a.title}</td>
                                <td>{a.dueDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}
// Example Class Schedules Component
function ClassSchedules() {
    // Dummy data for class schedules
    const schedules = [
        { id: 1, class: 'Mathematics', time: 'Mon, Wed, Fri - 09:00 AM' },
        { id: 2, class: 'Physics', time: 'Tue, Thu - 10:00 AM' },
        // ... more schedules
    ];

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Class Schedules</Card.Title>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map(schedule => (
                            <tr key={schedule.id}>
                                <td>{schedule.class}</td>
                                <td>{schedule.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}


function TeacherDashboard() {
    const [date, setDate] = useState(new Date());

    // Example data - replace this with actual data fetching logic
    const classes = [
        { id: 1, name: 'Mathematics', schedule: 'Mon, Wed, Fri' },
        { id: 2, name: 'Physics', schedule: 'Tue, Thu' },
        // ... more classes
    ];

    return (
        <div>


            {/* Main Content */}
            <Container style={{ marginTop: '20px' }}>
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>Welcome to Your Teacher Dashboard</Card.Title>
                        <Card.Text>
                            Manage your classes, schedules, and student grades.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Row>
                    {/* Classes Table */}
                    <Col >
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>My Classes</Card.Title>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Class Name</th>
                                            <th>Schedule</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classes.map(c => (
                                            <tr key={c.id}>
                                                <td>{c.name}</td>
                                                <td>{c.schedule}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <AssignmentManagement />
                        <ClassSchedules />

                    </Col>
                    <Col md={6}>
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
        </div>
    );
}

export default TeacherDashboard;
