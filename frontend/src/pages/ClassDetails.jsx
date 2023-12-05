import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

import ClassDescription from '../components/studentCourseView/ClassDescription';
import UpcomingAssignments from '../components/studentCourseView/UpcomingAssignments';
import CurrentGrade from '../components/studentCourseView/CurrentGrade';

function ClassDetail() {
    let { className } = useParams();
    const [courseData, setCourseData] = useState(null);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/courses/${className}`); // Replace with your actual API endpoint
                setCourseData(response.data);
            } catch (error) {
                console.error('Error fetching course data:', error);
                alert('Error fetching course data')
                // Handle error appropriately
            }
        };

        if (className) {
            fetchData();
        }
    }, [className]);

    if (!courseData) {
        return <div>Loading...</div>; // Or some loading component
    }

    return (
        <>
            <Container style={{ marginTop: '20px' }}>
                <h1>{courseData.title}</h1>
                <Row>
                    <Col md={8}>
                        <ClassDescription description={courseData.description} />
                        <UpcomingAssignments assignments={courseData.assignments} />
                    </Col>
                    <Col md={4}>
                        <CurrentGrade grade={courseData.currentGrade} />
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Calendar</Card.Title>
                                <center>
                                    <Calendar onChange={setDate} value={date} />
                                </center>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ClassDetail;
