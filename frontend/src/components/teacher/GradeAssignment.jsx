/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Form, Button, Table, Card } from 'react-bootstrap';

function GradeAssignment({ courseId }) {
    let { courseID } = useParams();
    const [assignments, setAssignments] = useState([]);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [students, setStudents] = useState([]);
    const [grades, setGrades] = useState({});

    useEffect(() => {
        // Simulate fetching assignments for the course
        const fetchAssignments = async () => {
            const fetchedAssignments = [
                { id: 1, title: 'Essay on Environmental Science' },
                { id: 2, title: 'Lab Report: Chemistry Experiment' },
                // More assignments
            ];
            setAssignments(fetchedAssignments);
        };

        fetchAssignments();
    }, [courseId]);

    useEffect(() => {
        if (selectedAssignment) {
            // Simulate fetching students when an assignment is selected
            const fetchStudents = async () => {
                const enrolledStudents = [
                    { id: 1, name: 'John Doe' },
                    { id: 2, name: 'Jane Smith' },
                    // ... more students
                ];
                setStudents(enrolledStudents);
                setGrades({}); // Reset grades state
            };

            fetchStudents();
        }
    }, [selectedAssignment]);

    const handleGradeChange = (studentId, grade) => {
        setGrades(prevGrades => ({ ...prevGrades, [studentId]: grade }));
    };

    const handleSubmitGrades = () => {
        console.log('Submitting Grades:', grades);
        // Here you would typically make an API call to submit the grades to the backend
    };

    return (
        <Container>

            {courseID &&
                <Card className="my-4">
                    <Card.Body>
                        <Card.Title>Course: {courseID}</Card.Title>
                    </Card.Body>
                </Card>
            }


            <Card className="my-4">
                <Card.Body>
                    <Card.Title>Select Assignment to Grade</Card.Title>
                    <Form.Control as="select" onChange={(e) => setSelectedAssignment(e.target.value)}>
                        <option value="">Select an Assignment</option>
                        {assignments.map(assignment => (
                            <option key={assignment.id} value={assignment.id}>
                                {assignment.title}
                            </option>
                        ))}
                    </Form.Control>
                </Card.Body>
            </Card>


            {selectedAssignment && (
                <Card>
                    <Card.Body>
                        <Card.Title>Grading: {assignments.find(a => a.id === selectedAssignment)?.title}</Card.Title>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Student</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter grade"
                                                value={grades[student.id] || ''}
                                                onChange={(e) => handleGradeChange(student.id, e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Button variant="primary" onClick={handleSubmitGrades}>Submit Grades</Button>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
}

export default GradeAssignment;
