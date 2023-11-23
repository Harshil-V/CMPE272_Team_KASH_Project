// api.js
import axios from 'axios';

export const fetchStudentViewCourseData = async (courseId) => {
    try {
        const response = await axios.get(`https://yourapi.com/courses/${courseId}`);
        return response.data; // Axios automatically parses JSON data
    } catch (error) {
        // Handle or throw the error as needed
        console.error('Error fetching course data:', error);
        throw error;
    }
};
