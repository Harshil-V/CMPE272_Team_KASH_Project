import { useState, useEffect } from 'react';
import { Container, Table, Card, Tabs, Tab, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ClassesTaught() {
    const [termClasses, setTermClasses] = useState({});
    const [newCourse, setNewCourse] = useState({ name: '', term: '' });
    const [terms, setTerms] = useState([]);


    const handleNewCourseChange = (event) => {
        const { name, value } = event.target;
        setNewCourse(prevCourse => ({ ...prevCourse, [name]: value }));
    };

    const handleSubmitNewCourse = (event) => {
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

        setTermClasses(prevClasses => ({
            ...prevClasses,
            [newCourse.term]: [...(prevClasses[newCourse.term] || []), newCourseData]
        }));
        setNewCourse({ name: '', term: '' });
    };


    useEffect(() => {
        const fetchTerms = async () => {
            // Simulate fetching terms from an API
            setTimeout(() => {
                const fetchedTerms = ['Grade 10', 'Grade 11', 'Grade 12'];
                setTerms(fetchedTerms);
            }, 1000);
        };

        fetchTerms();
    }, []);

    useEffect(() => {
        const MOCK_CLASSES = {
            'Grade 10': [
                {
                    id: 1,
                    name: 'Algebra I',
                    schedule: 'Mon, Wed, Fri - 09:00 AM',
                    students: 1,
                    room: 'Room 101',
                    assistants: ['Alice Johnson'],
                    notes: 'Introductory algebra course'
                },
                {
                    id: 2,
                    name: 'Biology',
                    schedule: 'Tue, Thu - 10:00 AM',
                    students: 1,
                    room: 'Room 102',
                    assistants: ['Brian Taylor'],
                    notes: 'Focus on cellular biology and genetics'
                },
                {
                    id: 3,
                    name: 'English Literature',
                    schedule: 'Mon, Wed - 11:00 AM',
                    students: 1,
                    room: 'Room 103',
                    assistants: ['Cynthia Morris'],
                    notes: 'Study of classic and contemporary literature'
                },
                // ... more Grade 10 classes
            ],
            'Grade 11': [
                {
                    id: 4,
                    name: 'Geometry',
                    schedule: 'Tue, Thu - 09:00 AM',
                    students: 1,
                    room: 'Room 201',
                    assistants: ['David Allen'],
                    notes: 'Exploring geometric shapes and theorems'
                },
                {
                    id: 5,
                    name: 'Chemistry',
                    schedule: 'Mon, Wed, Fri - 10:00 AM',
                    students: 0,
                    room: 'Room 202',
                    assistants: ['Elaine He'],
                    notes: 'Introduction to chemical reactions and lab safety'
                },
                {
                    id: 6,
                    name: 'World History',
                    schedule: 'Tue, Thu - 11:00 AM',
                    students: 0,
                    room: 'Room 203',
                    assistants: ['Frank Gordon'],
                    notes: 'A study of global historical events from the 18th century'
                },
                // ... more Grade 11 classes
            ],
            'Grade 12': [
                {
                    id: 7,
                    name: 'Calculus',
                    schedule: 'Mon, Wed - 09:00 AM',
                    students: 1,
                    room: 'Room 301',
                    assistants: ['Gina Patel'],
                    notes: 'Advanced course in differential and integral calculus'
                },
                {
                    id: 8,
                    name: 'Physics',
                    schedule: 'Tue, Thu - 10:00 AM',
                    students: 0,
                    room: 'Room 302',
                    assistants: ['Harry Smith'],
                    notes: 'Understanding of basic principles of physics and experiments'
                },
                {
                    id: 9,
                    name: 'Political Science',
                    schedule: 'Mon, Wed, Fri - 11:00 AM',
                    students: 2,
                    room: 'Room 303',
                    assistants: ['Irene Adler'],
                    notes: 'Analysis of political systems and government policies'
                },
                // ... more Grade 12 classes
            ],
            // ... other grade levels
        };

        setTermClasses(MOCK_CLASSES);
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
