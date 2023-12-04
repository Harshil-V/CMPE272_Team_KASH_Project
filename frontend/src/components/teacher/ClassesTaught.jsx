import { useState, useEffect } from 'react';
import { Container, Table, Card, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ClassesTaught() {
    const [termClasses, setTermClasses] = useState({});
    const [newCourse, setNewCourse] = useState({ name: '', term: '' });
    const [terms, setTerms] = useState([]);


    const handleNewCourseChange = (event) => {
        const { name, value } = event.target;
        setNewCourse(prevCourse => ({ ...prevCourse, [name]: value }));
    };

    const handleSubmitNewCourse = async (event) => {
        event.preventDefault();

        const newCourseData = {
            id: Math.floor(Math.random() * 10000), // Generating a random ID for mock purposes
            name: newCourse.name,
            schedule: 'TBD', // Schedule can be set to a default value or managed separately
            students: 0, // Initial student count
            room: 'TBD', // Room can be managed separately
            assistants: [],
            notes: ''
        };

        // Assuming your API endpoint is '/api/courses'
        await axios.post('/api/courses', newCourseData);

        // Refresh data after adding a new course
        fetchData();
    };

    const fetchData = async () => {
        try {
            // Fetch terms
            const responseTerms = await axios.get('/api/terms');
            setTerms(responseTerms.data);

            // Fetch classes
            const responseClasses = await axios.get('/api/classes');
            setTermClasses(responseClasses.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <Container>
            <Card className="mb-4 mt-4">
                <Card.Body>
                    <Card.Title>Classes I Teach</Card.Title>
                    <Tabs defaultActiveKey="Grade 10" id="grade-level-tabs">
                        {Object.keys(termClasses).map(gradeLevel => (
                            <Tab eventKey={gradeLevel} title={gradeLevel} key={gradeLevel}>
                                <Table striped bordered hover className="mt-3">
                                    <thead>
                                        <tr>
                                            <th>Class Name</th>
                                            <th>Schedule</th>
                                            <th>Number of Students</th>
                                            {/* <th>Room</th>
                                            <th>Assistants</th> */}
                                            <th>Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {termClasses[gradeLevel].map(c => (
                                            <tr key={c.id}>
                                                <td><Link to={`/manage/${gradeLevel}/${c.name}`} target='_blank'>{c.name}</Link></td>
                                                <td>{c.schedule}</td>
                                                <td>{c.students}</td>
                                                {/* <td>{c.room}</td>
                                                <td>{c.assistants.join(', ')}</td> */}
                                                <td>{c.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Tab>
                        ))}
                    </Tabs>

                </Card.Body>
            </Card>

            {/* Form for adding a new course */}
            <Card className="mb-4 mt-4">
                <Card.Body>
                    <Card.Title>Add New Course</Card.Title>
                    <Form onSubmit={handleSubmitNewCourse}>
                        <Form.Group>
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={newCourse.name}
                                onChange={handleNewCourseChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Grade Level</Form.Label>
                            <Form.Control
                                as="select"
                                name="term"
                                value={newCourse.term}
                                onChange={handleNewCourseChange}
                                required
                            >
                                <option value="">Select a Grade</option>
                                {terms.map(term => (
                                    <option key={term} value={term}>{term}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Button className='mt-3' type="submit">Add Course</Button>
                    </Form>
                </Card.Body>
            </Card >
        </Container >
    );
}

export default ClassesTaught;
