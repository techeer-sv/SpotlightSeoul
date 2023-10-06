package com.example.backend.domain.user.mapper;

import org.springframework.stereotype.Component;

import com.example.backend.domain.user.dto.request.UserCreateRequest;
import com.example.backend.domain.user.dto.response.UserResponse;
import com.example.backend.domain.user.entity.User;

@Component
public class UserMapper {

	public User toEntity(UserCreateRequest request) {
		return User.builder()
			.username(request.getUsername())
			.password(request.getPassword())
			.email(request.getEmail())
			.location(request.getLocation())
			.build();
	}

	public UserResponse toResponse(User user) {
		return UserResponse.builder()
			.id(user.getId())
			.username(user.getUsername())
			.email(user.getEmail())
			.location(user.getLocation())
			.build();
	}


}
