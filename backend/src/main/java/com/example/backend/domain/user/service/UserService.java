package com.example.backend.domain.user.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.backend.domain.user.dto.request.UserCreateRequest;
import com.example.backend.domain.user.dto.request.UserLoginRequest;
import com.example.backend.domain.user.dto.request.UserRefreshTokenRequest;
import com.example.backend.domain.user.dto.request.UserUpdateRequest;
import com.example.backend.domain.user.entity.User;
import com.example.backend.domain.user.jwt.JwtAccessTokenResponse;
import com.example.backend.domain.user.jwt.JwtProvider;
import com.example.backend.domain.user.jwt.JwtResponse;
import com.example.backend.domain.user.mapper.UserMapper;
import com.example.backend.domain.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	private  final UserRepository userRepository;
	private final UserMapper userMapper;
	private final JwtProvider jwtProvider;

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

	public JwtAccessTokenResponse Login(UserLoginRequest request){
		User user = userRepository.findByEmailAndPassword(request.getEmail(), request.getPassword())
			.orElseThrow(() -> new RuntimeException("사용자가 없습니다."));

		if(user.getRefreshToken() == null || !jwtProvider.validateToken(user.getRefreshToken())){
			Map<String, Object> claims = new HashMap<>();
			claims.put("id", user.getId().longValue());
			claims.put("email", user.getEmail());
			JwtResponse jwtResponse = jwtProvider.createJwt(claims);

			// 생성된 Refresh Token을 데이터베이스에 저장
			user.refreshTokenUpdate(new UserRefreshTokenRequest(jwtResponse.getRefreshToken()));
			userRepository.save(user);

			return new JwtAccessTokenResponse(jwtResponse.getAccessToken());

		}else {
			String newAccessToken = jwtProvider.refreshTokenTOAccess(user.getRefreshToken());
			return new JwtAccessTokenResponse(newAccessToken);
		}
	}


	// private void checkPassword(final Member member, final String password) {
	// 	if (!passwordEncryptor.verifyPassword(member.getPassword(), passwordEncryptor.hashPassword(password))) {
	// 		throw new PasswordNotMatchException();
	// 	}
	// } 일단 모르는 형식이라 사용을 하지 않음


}
