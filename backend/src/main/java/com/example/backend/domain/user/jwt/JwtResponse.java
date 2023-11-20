package com.example.backend.domain.user.jwt;

import lombok.Builder;
import lombok.Getter;

@Getter
public class JwtResponse {
	private String accessToken;
	private String refreshToken;

	@Builder
	public JwtResponse(String accessToken, String refreshToken){
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}
}
