package com.sjsu.enterprise.schoolmanagement.controller;

import com.sjsu.enterprise.schoolmanagement.entity.FileEntity;
import com.sjsu.enterprise.schoolmanagement.model.Student;
import com.sjsu.enterprise.schoolmanagement.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "/file")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FileController {

	@Autowired
	private FileService fileService;

	@PostMapping(value= "/uploadFile")
    public ResponseEntity<String> uploadFile(@RequestPart(value = "file") final MultipartFile multipartFile){
		System.out.println(multipartFile);
		fileService.uploadFile(multipartFile);
		final String response = "[" + multipartFile.getOriginalFilename() + "] uploaded successfully.";
        return new ResponseEntity<>(response, HttpStatus.OK);
       
    }
	
	@PostMapping(value= "/uploadFileDetails")
    public ResponseEntity<String> uploadFileDetails(@RequestBody FileEntity fileEntity) {
		System.out.println(fileEntity);
		fileService.uploadFileDetails(fileEntity);
        return new ResponseEntity<>("Successfully updated DB", HttpStatus.OK);
       
    }
	
	@RequestMapping(value="/download/{fileName}")
    public String downloadFile(@PathVariable("fileName") String imageName) throws IOException {
		fileService.downloadImageFromS3(imageName);
		return "Download successful !!";
    }
	
	@RequestMapping(value="/delete/{fileName}")
    public String deleteFile(@PathVariable("fileName") String fileName) throws IOException {
		fileService.deleteImage(fileName);
		return "Delete successful !!";
    }
	
	@RequestMapping(value="/view")
    public @ResponseBody List<FileEntity> viewFile(@RequestBody Student student) throws IOException {
		return fileService.viewAllImages(student);
    }
	
	@RequestMapping(value="/studentView")
    public @ResponseBody List<FileEntity> viewMyFile(@RequestBody Student student) throws IOException {
		System.out.println("Student email "+ student.getStudentEmail());
		return fileService.viewMyImages(student);
    }
	
	@RequestMapping(value="/studentFile/{fileId}")
    public @ResponseBody FileEntity getMyUserFile(@PathVariable("fileId") Long fileId) throws IOException {
		System.out.println(fileId);
		return fileService.getMyUserFiledetails(fileId);
		
    }

	@RequestMapping(value="/updateImageAbout")
    public @ResponseBody String updateImageAbout(@RequestBody FileEntity fileEntity) throws IOException {
		System.out.println("Filentity updateImageAbout:"+fileEntity.toString());
		fileService.updateImageAbout(fileEntity);
		return "Updated successfully";
    }
	
	@RequestMapping(value="/updateImageDetail")
    public @ResponseBody String updateImageDetail(@RequestBody FileEntity fileEntity) throws IOException {
		System.out.println("Filentity updateImageDetail:"+fileEntity.toString());
		fileService.updateImageDetail(fileEntity);
		return "Updated successfully";
    }
	
	@RequestMapping(value="/allFiles")
    public List<FileEntity> getAllFiles() throws IOException {
		return fileService.getAllFiles();
    }
	
	@RequestMapping(value="/welcome")
    public @ResponseBody String defaultPage() {
		return "Welcome to School Management";
    }
}
