/* eslint-disable react/prop-types */
import { Card, ListGroup } from 'react-bootstrap';

function UpcomingAssignments({ assignments }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Upcoming Assignments</Card.Title>
        <ListGroup variant="flush">
          {assignments && assignments.map((assignment, index) => (
            <ListGroup.Item key={index}>
              {assignment.name} - Due: {assignment.dueDate}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default UpcomingAssignments;
