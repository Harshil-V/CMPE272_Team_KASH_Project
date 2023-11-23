import { useParams } from 'react-router-dom';
// import NavigationBar from '../components/NavBar';
function ClassDetail() {
    let { className } = useParams(); // Get class ID from the URL

    // Fetch class details using classId or display class information
    // For demonstration, just displaying the class ID
    return (
        <>
            {/* <NavigationBar /> */}
            <div>
                <h2>Class Details</h2>
                <p>Displaying details for class ID: {className}</p>
                {/* Display other class details here */}
            </div>
        </>
    );
}

export default ClassDetail;
