import { useState, useEffect } from 'react';
import { Container, Table, Card, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ClassesTaught() {
    const [termClasses, setTermClasses] = useState({
        // 'Fall 2023': [],
        // 'Spring 2023': [],
        // Add more terms as needed
    });
    const [newCourse, setNewCourse] = useState({ name: '', term: '' });
    const [terms, setTerms] = useState([]);


    const handleNewCourseChange = (event) => {
        const { name, value } = event.target;
        setNewCourse(prevCourse => ({ ...prevCourse, [name]: value }));
    };

    const handleSubmitNewCourse = (event) => {
        event.preventDefault();
        // Here, you would typically make an API call to add the new course
        console.log('Adding new course:', newCourse);

        // Reset the form
        setNewCourse({ name: '', term: '' });
    };

    useEffect(() => {
        const fetchTerms = async () => {
            // Simulate fetching terms from an API
            setTimeout(() => {
                const fetchedTerms = ['Fall 2023', 'Spring 2023', 'Summer 2023'];
                setTerms(fetchedTerms);
            }, 1000);
        };

        fetchTerms();
    }, []);

    useEffect(() => {
        // Expanded data structure for classes
        const fetchedClasses = {
            'Fall 2023': [
                {
                    id: 1,
                    name: 'Mathematics',
                    schedule: 'Mon, Wed, Fri - 09:00 AM',
                    students: 30,
                    room: 'Room 101',
                    assistants: ['Alice Johnson', 'Bob Smith'],
                    notes: 'Focus on algebra and calculus'
                },
                {
                    id: 2,
                    name: 'Chemistry',
                    schedule: 'Tue, Thu - 10:00 AM',
                    students: 25,
                    room: 'Room 102',
                    assistants: ['Charlie Davis'],
                    notes: 'Lab work every Thursday'
                },
                {
                    id: 5,
                    name: 'World History',
                    schedule: 'Mon, Wed - 01:00 PM',
                    students: 28,
                    room: 'Room 201',
                    assistants: ['Greg Hale'],
                    notes: 'Guest speakers every month'
                },
                {
                    id: 6,
                    name: 'Art',
                    schedule: 'Tue, Thu - 02:00 PM',
                    students: 22,
                    room: 'Room 202',
                    assistants: ['Hannah Zee'],
                    notes: 'Field trip to the art museum in October'
                },
                // ... more fall classes
            ],
            'Spring 2023': [
                {
                    id: 3,
                    name: 'Physics',
                    schedule: 'Mon, Wed - 11:00 AM',
                    students: 20,
                    room: 'Room 103',
                    assistants: [],
                    notes: 'Includes a monthly project'
                },
                {
                    id: 4,
                    name: 'Biology',
                    schedule: 'Tue, Thu - 12:00 PM',
                    students: 28,
                    room: 'Room 104',
                    assistants: ['Diana Reed', 'Evan Lee'],
                    notes: 'Field trips planned'
                },
                {
                    id: 7,
                    name: 'Computer Science',
                    schedule: 'Mon, Fri - 10:00 AM',
                    students: 25,
                    room: 'Room 301',
                    assistants: ['Ivan Gregg'],
                    notes: 'Focus on programming and algorithms'
                },
                {
                    id: 8,
                    name: 'Physical Education',
                    schedule: 'Wed, Fri - 01:00 PM',
                    students: 30,
                    room: 'Gym',
                    assistants: ['Jackie Kline'],
                    notes: 'Preparation for the annual sports day'
                },
                // ... more spring classes
            ],
            // ... other terms
        };
        setTermClasses(fetchedClasses);
    }, []);


    return (
        <Container>
            <Card className="mb-4 mt-4">
                <Card.Body>
                    <Card.Title>Classes I Teach</Card.Title>
                    <Tabs defaultActiveKey="Fall 2023" id="class-term-tabs">
                        {Object.keys(termClasses).map(term => (
                            <Tab eventKey={term} title={term} key={term}>
                                <Table striped bordered hover className="mt-3">
                                    <thead>
                                        <tr>
                                            <th>Class Name</th>
                                            <th>Schedule</th>
                                            <th>Number of Students</th>
                                            <th>Room</th>
                                            <th>Assistants</th>
                                            <th>Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {termClasses[term].map(c => (
                                            <tr key={c.id}>
                                                <td>
                                                    <Link to={`/manage/${term}/${c.name}`} target='_blank'>{c.name}</Link>
                                                </td>
                                                <td>{c.schedule}</td>
                                                <td>{c.students}</td>
                                                <td>{c.room}</td>
                                                <td>{c.assistants.join(', ')}</td>
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
                            <Form.Label>Term</Form.Label>
                            <Form.Control
                                as="select"
                                name="term"
                                value={newCourse.term}
                                onChange={handleNewCourseChange}
                                required
                            >
                                <option value="">Select a Term</option>
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
