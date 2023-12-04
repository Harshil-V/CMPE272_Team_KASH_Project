package com.sjsu.enterprise.schoolmanagement.service;

import com.sjsu.enterprise.schoolmanagement.entity.CourseEntity;
import com.sjsu.enterprise.schoolmanagement.repository.CourseRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CourseServiceTest {

    @Mock
    private CourseRepository courseRepository;

    @InjectMocks
    private CourseService courseService;

    @Test
    void testGetAllCourses() {
        // Mock data
        List<CourseEntity> mockCourses = new ArrayList<>();
        when(courseRepository.findAll()).thenReturn(mockCourses);

        // Call the method
        List<CourseEntity> result = courseService.getAllCourses();

        // Verify the behavior
        verify(courseRepository, times(1)).findAll();

        // Assert the result
        assertEquals(mockCourses, result);
    }

    @Test
    void testGetAllCoursesByGradeId() {
        // Mock data
        String gradeId = "123";
        List<CourseEntity> mockCourses = new ArrayList<>();
        when(courseRepository.findByGradeId(gradeId)).thenReturn(mockCourses);

        // Call the method
        List<CourseEntity> result = courseService.getAllCoursesByGradeId(gradeId);

        // Verify the behavior
        verify(courseRepository, times(1)).findByGradeId(gradeId);

        // Assert the result
        assertEquals(mockCourses, result);
    }

    @Test
    void testFindCourse() {
        // Mock data
        Integer courseId = 1;
        CourseEntity mockCourse = new CourseEntity();
        when(courseRepository.findByCourseId(courseId)).thenReturn(mockCourse);

        // Call the method
        CourseEntity result = courseService.findCourse(courseId);

        // Verify the behavior
        verify(courseRepository, times(1)).findByCourseId(courseId);

        // Assert the result
        assertEquals(mockCourse, result);
    }

    @Test
    void testDeleteCourse() {
        // Mock data
        Integer courseId = 1;

        // Call the method
        String result = courseService.deleteCourse(courseId);

        // Verify the behavior
        verify(courseRepository, times(1)).deleteById(courseId);

        // Assert the result
        assertEquals("Course deleted", result);
    }

    @Test
    void testAddOrUpdateCourse() {
        // Mock data
        CourseEntity mockCourse = new CourseEntity();
        when(courseRepository.save(mockCourse)).thenReturn(mockCourse);
        when(courseRepository.findByCourseId(mockCourse.getCourseId())).thenReturn(mockCourse);

        // Call the method
        CourseEntity result = courseService.addOrUpdateCourse(mockCourse);

        // Verify the behavior
        verify(courseRepository, times(1)).save(mockCourse);
        verify(courseRepository, times(1)).findByCourseId(mockCourse.getCourseId());

        // Assert the result
        assertEquals(mockCourse, result);
    }
}
