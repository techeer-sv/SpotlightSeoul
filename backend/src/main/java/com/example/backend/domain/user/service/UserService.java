package com.example.backend.domain.user.service;

import org.springframework.stereotype.Service;

import com.example.backend.domain.user.dto.request.UserCreateRequest;
import com.example.backend.domain.user.dto.request.UserUpdateRequest;
import com.example.backend.domain.user.entity.User;
import com.example.backend.domain.user.mapper.UserMapper;
import com.example.backend.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	private  final UserRepository userRepository;
	private final UserMapper userMapper;

	public User createUser(UserCreateRequest request) {
		User user = userMapper.toEntity(request);
		return userRepository.save(user);
	}

	public User findUser(Long userId){
		return userRepository.findById(userId)
			.orElseThrow();
	}

	public User updateUser(UserUpdateRequest request){
		User user = userRepository.findById(request.getId()).orElseThrow();
		user.update(request);
		return userRepository.save(user);
	}

	public void deleteUser(Long userId) {
		User user = userRepository.findById(userId).orElseThrow();
		user.softDelete();
		userRepository.save(user);
	}

}
