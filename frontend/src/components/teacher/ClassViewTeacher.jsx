import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button, Table, Modal, Form } from 'react-bootstrap';
import GradeAssignment from './GradeAssignment';
import axios from 'axios'

function CourseView() {
    let { gradeLevel, className } = useParams();
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await axios.get(`/api/courses/${gradeLevel}/${className}/assignments`);
                setAssignments(response.data);
            } catch (error) {
                console.error('Error fetching assignments:', error);
                alert('Error fetching assignments:', error);
            }
        };

        fetchAssignments();
    }, [gradeLevel, className]);

    const [showModal, setShowModal] = useState(false);
    const [currentAssignment, setCurrentAssignment] = useState(null);

    const handleOpenModal = (assignment = null) => {
        setCurrentAssignment(assignment);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const newAssignmentData = {
            id: currentAssignment ? currentAssignment.id : Math.random(), // Temporary ID generation
            title: formData.get('assignmentTitle'),
            dueDate: formData.get('assignmentDueDate')
        };

        try {
            if (currentAssignment) {
                // Edit existing assignment
                await axios.put(`/api/courses/${gradeLevel}/${className}/assignments/${currentAssignment.id}`, newAssignmentData);
            } else {
                // Add new assignment
                await axios.post(`/api/courses/${gradeLevel}/${className}/assignments`, newAssignmentData);
            }

            // Refresh assignments after adding or editing
            const response = await axios.get(`/api/courses/${gradeLevel}/${className}/assignments`);
            setAssignments(response.data);
        } catch (error) {
            console.error('Error submitting assignment:', error);
        }

        // Reset form and close modal
        setCurrentAssignment(null);
        setShowModal(false);
    };

    const handleDelete = async (assignmentId) => {
        try {
            await axios.delete(`/api/courses/${gradeLevel}/${className}/assignments/${assignmentId}`);

            // Refresh assignments after deleting
            const response = await axios.get(`/api/courses/${gradeLevel}/${className}/assignments`);
            setAssignments(response.data);
        } catch (error) {
            console.error('Error deleting assignment:', error);
        }
    };

    return (
        <Container>
            <Card className="my-4">
                <Card.Body>
                    <Card.Title>Course Management -  {className} ({gradeLevel})</Card.Title>
                    <Button variant="primary" onClick={() => handleOpenModal()}>
                        Add Assignment
                    </Button>
                    <Table striped bordered hover className="mt-3">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Due Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignments.map(assignment => (
                                <tr key={assignment.id}>
                                    <td>{assignment.title}</td>
                                    <td>{assignment.dueDate}</td>
                                    <td>
                                        <Button variant="info" onClick={() => handleOpenModal(assignment)}>
                                            Edit
                                        </Button>{' '}
                                        <Button variant="danger" onClick={() => handleDelete(assignment.id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* <Card className="my-4">
                <Card.Body>
                    {assignments.map(assignment => (
                        <div key={assignment.id}>
                            {assignment.title}
                            <Button onClick={() => handleSelectAssignment(assignment.id)}>Grade</Button>
                        </div>
                    ))}
                </Card.Body>
            </Card> */}

            {/* Render GradeAssignment Component */}
            <Card className="my-4">
                <Card.Body>
                    <GradeAssignment gradeLevel={gradeLevel} courseId={className} assignmentList={assignments} />
                </Card.Body>
            </Card>

            {/* Modal for Add/Edit Assignment */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentAssignment ? 'Edit Assignment' : 'Add Assignment'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="assignmentTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="assignmentTitle"
                                defaultValue={currentAssignment ? currentAssignment.title : ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="assignmentDueDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="assignmentDueDate"
                                defaultValue={currentAssignment ? currentAssignment.dueDate : ''}
                                required
                            />
                        </Form.Group>
                        <Button className='mt-2' variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default CourseView;
