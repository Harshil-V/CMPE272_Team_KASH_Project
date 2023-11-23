/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap';

function ClassDescription({ description }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Class Description</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ClassDescription;
