package com.sjsu.enterprise.schoolmanagement.service;

import com.sjsu.enterprise.schoolmanagement.entity.AdminEntity;
import com.sjsu.enterprise.schoolmanagement.model.Admin;
import com.sjsu.enterprise.schoolmanagement.repository.AdminRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AdminServiceTest {

    @Mock
    private AdminRepository adminRepository;

    @InjectMocks
    private AdminService adminService;

    @Test
    void testAuthenticateAdminLogin() {
        // Mock data
        Admin admin = new Admin("admin@example.com", "password");
        AdminEntity mockAdminEntity = new AdminEntity();
        mockAdminEntity.setAdminEmail("admin@example.com");
        mockAdminEntity.setAdminPassword("password");

        when(adminRepository.findByAdminEmail(admin.getAdminEmail())).thenReturn(mockAdminEntity);

        // Call the method
        ResponseEntity<String> result = adminService.authenticateAdminLogin(admin);

        // Verify the behavior
        verify(adminRepository, times(1)).findByAdminEmail(admin.getAdminEmail());

        // Assert the result
        assertEquals(new ResponseEntity<>("Login successful!", HttpStatus.OK), result);
    }

    @Test
    void testAuthenticateAdminLoginUserNotFound() {
        // Mock data
        Admin admin = new Admin("nonexistent@example.com", "password");

        when(adminRepository.findByAdminEmail(admin.getAdminEmail())).thenReturn(null);

        // Call the method
        ResponseEntity<String> result = adminService.authenticateAdminLogin(admin);

        // Verify the behavior
        verify(adminRepository, times(1)).findByAdminEmail(admin.getAdminEmail());

        // Assert the result
        assertEquals(new ResponseEntity<>("Email or password does not exist!", HttpStatus.NOT_FOUND), result);
    }

    @Test
    void testAuthenticateAdminLoginInvalidCredentials() {
        // Mock data
        Admin admin = new Admin("admin@example.com", "wrongpassword");
        AdminEntity mockAdminEntity = new AdminEntity();
        mockAdminEntity.setAdminEmail("admin@example.com");
        mockAdminEntity.setAdminPassword("password");

        when(adminRepository.findByAdminEmail(admin.getAdminEmail())).thenReturn(mockAdminEntity);

        // Call the method
        ResponseEntity<String> result = adminService.authenticateAdminLogin(admin);

        // Verify the behavior
        verify(adminRepository, times(1)).findByAdminEmail(admin.getAdminEmail());

        // Assert the result
        assertEquals(new ResponseEntity<>("Email or password does not match!", HttpStatus.FORBIDDEN), result);
    }

    @Test
    void testAddAdmin() {
        // Mock data
        AdminEntity mockAdminEntity = new AdminEntity();
        when(adminRepository.save(mockAdminEntity)).thenReturn(mockAdminEntity);

        // Call the method
        ResponseEntity<?> result = adminService.addAdmin(mockAdminEntity);

        // Verify the behavior
        verify(adminRepository, times(1)).save(mockAdminEntity);

        // Assert the result
        assertEquals(new ResponseEntity<>("Admin added successfully!", HttpStatus.CREATED), result);
    }

    @Test
    void testUpdateAdmin() {
        // Mock data
        AdminEntity mockAdminEntity = new AdminEntity();
        when(adminRepository.save(mockAdminEntity)).thenReturn(mockAdminEntity);

        // Call the method
        ResponseEntity<?> result = adminService.updateAdmin(mockAdminEntity);

        // Verify the behavior
        verify(adminRepository, times(1)).save(mockAdminEntity);

        // Assert the result
        assertEquals(new ResponseEntity<>("Admin updated successfully!", HttpStatus.OK), result);
    }

    @Test
    void testDeleteAdmin() {
        // Mock data
        AdminEntity mockAdminEntity = new AdminEntity();

        // Call the method
        ResponseEntity<?> result = adminService.deleteAdmin(mockAdminEntity);

        // Verify the behavior
        verify(adminRepository, times(1)).delete(mockAdminEntity);

        // Assert the result
        assertEquals(new ResponseEntity<>("Admin deleted successfully!", HttpStatus.OK), result);
    }
}

