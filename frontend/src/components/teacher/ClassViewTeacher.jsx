import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button, Table, Modal, Form } from 'react-bootstrap';
import GradeAssignment from './GradeAssignment';

function CourseView() {
    let { term, className } = useParams();
    const [assignments, setAssignments] = useState([]);

    // Simulate fetching data from an API
    useEffect(() => {
        const fetchAssignments = async () => {
            setTimeout(() => {
                const fetchedAssignments = [
                    { id: 1, title: 'Essay on Environmental Science', dueDate: '2023-03-10' },
                    { id: 2, title: 'Lab Report: Chemistry Experiment', dueDate: '2023-03-17' },
                    // More assignments
                ];
                setAssignments(fetchedAssignments);
            }, 1000);
        };

        fetchAssignments();
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [currentAssignment, setCurrentAssignment] = useState(null);

    const handleOpenModal = (assignment = null) => {
        setCurrentAssignment(assignment);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic for form submission (Create/Update assignment)

        const formData = new FormData(event.target);
        const newAssignment = {
            term: term,
            title: formData.get('assignmentTitle'),
            dueDate: formData.get('assignmentDueDate')
        };

        // Determine if it's a new assignment or an edit
        const isEdit = currentAssignment !== null;
        console.log(`Is Edited: ${isEdit}`)
        console.log(term)
        console.log(`assignmentTitle: ${newAssignment.title}`)
        console.log(`assignmentDueDate: ${newAssignment.dueDate}`)

        
        // console.log(`assignmentDueDate: ${newAssignment.get('assignmentDueDate')}`)
        // const endpoint = isEdit ? `/api/assignments/${currentAssignment.id}` : '/api/assignments';
        // const method = isEdit ? 'put' : 'post';

        // axios[method](endpoint, newAssignment)
        //     .then(response => {
        //         // Handle the response
        //         console.log('Assignment saved successfully', response.data);
        //         // Update the assignments state or re-fetch assignments
        //     })
        //     .catch(error => {
        //         // Handle any errors
        //         console.error('Error saving assignment', error);
        //     });
        
        handleCloseModal();
    };

    const handleDelete = (assignmentId) => {
        const updatedAssignments = assignments.filter(assignment => assignment.id !== assignmentId);
        setAssignments(updatedAssignments);
    };

    // const handleSelectAssignment = (assignmentId) => {
    //     setSelectedAssignmentId(assignmentId);
    // };

    return (
        <Container>
            <Card className="my-4">
                <Card.Body>
                    <Card.Title>Course Management -  {className} ({term})</Card.Title>
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
                    <GradeAssignment term={term} courseId={className} />
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
