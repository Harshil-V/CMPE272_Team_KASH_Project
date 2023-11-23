import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import ClassDescription from '../components/studentCourseView/ClassDescription';
import UpcomingAssignments from '../components/studentCourseView/UpcomingAssignments';
import CurrentGrade from '../components/studentCourseView/CurrentGrade';
// import { fetchStudentViewCourseData } from '../api/api';
import mockData from '../components/studentCourseView/mockData.json';

function ClassDetail() {
    let { className } = useParams(); // Get class ID from the URL
    const [courseData, setCourseData] = useState(null);

    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             const data = await fetchStudentViewCourseData(className);
    //             setCourseData(data);
    //         } catch (error) {
    //             console.error('Error fetching course data:', error);
    //             // Handle error appropriately
    //         }
    //     };

    //     loadData();
    // }, [className]);

    useEffect(() => {
        // Simulate fetching data
        const fetchData = async () => {
            // Simulating an API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setCourseData(mockData); // Using mock data
        };

        if (className === mockData.code) {
            fetchData();
        }
    }, [className]);

    if (!courseData) {
        return <div>Loading...</div>; // Or some loading component
    }


    // Fetch class details using classId or display class information
    // For demonstration, just displaying the class ID
    return (
        <>
            {/* <NavigationBar /> */}
            {/* <div>
                <h2>Class Details</h2>
                <p>Displaying details for class ID: {className}</p>
               
            </div> */}
            <Container style={{ marginTop: '20px' }}>
                <h1>{courseData.title}</h1>
                <Row>
                    <Col md={8}>
                        <ClassDescription description={courseData.description} />
                        <UpcomingAssignments assignments={courseData.assignments} />
                    </Col>
                    <Col md={4}>
                        <CurrentGrade grade={courseData.currentGrade} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ClassDetail;
