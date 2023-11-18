package com.example.backend.domain.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.domain.user.dto.request.UserCreateRequest;
import com.example.backend.domain.user.dto.request.UserLoginRequest;
import com.example.backend.domain.user.dto.request.UserUpdateRequest;
import com.example.backend.domain.user.entity.User;
import com.example.backend.domain.user.jwt.JwtAuthorization;
import com.example.backend.domain.user.jwt.JwtResponse;
import com.example.backend.domain.user.jwt.UserTokenInfo;
import com.example.backend.domain.user.service.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;

	@PostMapping("/users")
	public ResponseEntity<User> createUser(@Valid @RequestBody UserCreateRequest request) {
		User newUser = userService.createUser(request);
		return ResponseEntity.ok(newUser);
	}

	@PostMapping("/login")
	public ResponseEntity<JwtResponse> login(@Valid @RequestBody UserLoginRequest request){
		JwtResponse jwtResponse = userService.Login(request);
		return ResponseEntity.ok(jwtResponse);
	}

	@GetMapping("/users/{userId}")
	public ResponseEntity<User> getUser(@PathVariable Long userId, @JwtAuthorization UserTokenInfo userInfo) {
		User foundUser = userService.findUser(userId);
		return ResponseEntity.ok(foundUser);
	}

	@PutMapping("/users")
	public ResponseEntity<User> updateUser(@Valid @RequestBody UserUpdateRequest request) {
		User updateUser = userService.updateUser(request);
		return ResponseEntity.ok(updateUser);
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable("id") Long id){
		userService.deleteUser(id);
		return ResponseEntity.noContent().build();
	}





	}
