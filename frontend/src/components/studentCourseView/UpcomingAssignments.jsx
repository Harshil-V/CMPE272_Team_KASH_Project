/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';

function UpcomingAssignments({ assignments }) {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadedIndex, setUploadedIndex] = useState(null);

  const handleUpload = (assignmentIndex) => {
    // Perform your upload logic here
    // For demonstration purposes, I'm using a setTimeout to simulate an asynchronous upload
    setTimeout(() => {
      setUploadSuccess(true);
      setUploadedIndex(assignmentIndex);
    }, 1000);
  };

  const filteredAssignments = assignments.filter((_, index) => index !== uploadedIndex);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Upcoming Assignments</Card.Title>
        <ListGroup variant="flush">
          {filteredAssignments.map((assignment, index) => (
            <ListGroup.Item key={index}>
              {assignment.name} - Due: {assignment.dueDate}
              <div>
                <Form.Group controlId={`formFile-${index}`} className="mb-3">
                  <Form.Control type="file" />
                  <Button
                    variant="primary"
                    className="mt-2"
                    onClick={() => handleUpload(index)}
                  >
                    Upload
                  </Button>
                </Form.Group>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        {uploadSuccess && (
          <Alert variant="success" className="mt-3">
            Upload successful!
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}

export default UpcomingAssignments;
