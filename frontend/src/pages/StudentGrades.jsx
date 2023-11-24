import { Table, Container } from 'react-bootstrap';
import NavigationBar from '../components/NavBar';
import '../StudentCourses.css';

function GradesPage() {
    const grades = [
        { class: 'Mathematics', grade: 'A' },
        { class: 'Physics', grade: 'B+' },
        { class: 'Biology', grade: 'A-' },
        { class: 'Chemistry', grade: 'B' },
        { class: 'English Literature', grade: 'B+' },
        { class: 'World History', grade: 'A' },
        // ... additional grades
    ];

    return (
        <>
            <NavigationBar/> 
            <Container className="student-classes-container">
                <h1>Your Grades</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((item, index) => (
                            <tr key={index}>
                                <td>{item.class}</td>
                                <td>{item.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default GradesPage;
