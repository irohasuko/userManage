package com.example.manage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.manage.dto.BaseResponse;
import com.example.manage.model.UserRequest;
import com.example.manage.service.DeleteUserService;
import com.example.manage.service.GetUserService;
import com.example.manage.service.RegisterUserService;
import com.example.manage.service.UpdateUserService;

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private GetUserService getUserService;

	@Autowired
	private RegisterUserService registerUserService;

	@Autowired
	private UpdateUserService updateUserService;

	@Autowired
	private DeleteUserService deleteUserService;

	@GetMapping("/user")
	public ResponseEntity<BaseResponse> getUser() {
		BaseResponse res = getUserService.getUserList();
		return new ResponseEntity<>(res, null, res.getStatusCode());
	}

	@PostMapping("/user")
	public ResponseEntity<BaseResponse> registerUser(@RequestBody UserRequest user) {
		BaseResponse res = registerUserService.registerUser(user);
		return new ResponseEntity<>(res, null, res.getStatusCode());
	}

	@PutMapping("/user")
	public ResponseEntity<BaseResponse> updateUser(@RequestBody UserRequest user) {
		BaseResponse res = updateUserService.updateUser(user);
		return new ResponseEntity<>(res, null, res.getStatusCode());
	}

	@DeleteMapping("/user")
	public ResponseEntity<BaseResponse> deleteUser(@RequestParam int userId) {
		BaseResponse res = deleteUserService.deleteUser(userId);
		return new ResponseEntity<>(res, null, res.getStatusCode());
	}

	@PostMapping("/user/delete")
	public ResponseEntity<BaseResponse> deleteUsers(@RequestBody List<UserRequest> userList) {
		BaseResponse res = deleteUserService.deleteUsers(userList);
		return new ResponseEntity<>(res, null, res.getStatusCode());
	}

	@PutMapping("/user-role")
	public ResponseEntity<BaseResponse> updateUserRole(@RequestBody List<UserRequest> userList) {
		BaseResponse res = updateUserService.updateUserRole(userList);
		return new ResponseEntity<>(res, null, res.getStatusCode());
	}
}
