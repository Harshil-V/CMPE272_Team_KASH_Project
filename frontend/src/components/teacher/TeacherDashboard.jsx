import { useState, useEffect } from 'react';
import { Container, Card, Table, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const MOCK_CLASSES = [
    { id: 1, name: 'Mathematics', schedule: 'Mon, Wed, Fri', gradeLevel: 'Grade 10' },
    { id: 2, name: 'Physics', schedule: 'Tue, Thu', gradeLevel: 'Grade 11' },
    { id: 3, name: 'Chemistry', schedule: 'Mon, Wed', gradeLevel: 'Grade 10' },
    { id: 4, name: 'Biology', schedule: 'Tue, Thu', gradeLevel: 'Grade 12' },
    { id: 5, name: 'English Literature', schedule: 'Wed, Fri', gradeLevel: 'Grade 11' },
    { id: 6, name: 'World History', schedule: 'Mon, Tue', gradeLevel: 'Grade 10' },
    { id: 7, name: 'Computer Science', schedule: 'Thu, Fri', gradeLevel: 'Grade 12' },
];


function TeacherDashboard() {
    const [date, setDate] = useState(new Date());
    const [classes, setClasses] = useState(MOCK_CLASSES);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get('/api/teacher/classes'); // Replace with your actual API endpoint
                setClasses(response.data.classes); // Assuming the response has a 'classes' field
            } catch (error) {
                console.error('Error fetching classes:', error);
                // Handle error scenario (e.g., display an error message)
            }
        };

        fetchClasses();
    }, []);

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
                                            <th>Grade Level</th>
                                            <th>Schedule</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classes.map(c => (
                                            <tr key={c.id}>
                                                <td><Link to={`/manage/${c.gradeLevel}/${c.name}`} target='_blank'>{c.name}</Link></td>
                                                <td>{c.gradeLevel}</td>
                                                <td>{c.schedule}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>


                    </Col>
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
        </div>
    );
}

export default TeacherDashboard;
