/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';

function CurrentGrade({ grade }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Current Grade</Card.Title>
        <Card.Text>
          {grade ? `Your current grade is ${grade}` : 'Grade information not available'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CurrentGrade;
