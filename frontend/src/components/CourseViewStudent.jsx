import { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';

function CourseViewStudent() {
    const [classes, setClasses] = useState([]);


    useEffect(() => {
        // Replace this with actual data fetching logic
        const fetchedClasses = [
            { id: 1, name: 'Mathematics', teacher: 'Mr. Smith' },
            { id: 2, name: 'Physics', teacher: 'Mrs. Johnson' },
            // ... other classes
        ];
        setClasses(fetchedClasses);
    }, []);



    return (
        <>
            <Container>
                <h1>Your Classes</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Class Name</th>
                            <th>Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map(c => (
                            <tr key={c.id}>
                                <td>{c.name}</td>
                                <td>{c.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default CourseViewStudent;