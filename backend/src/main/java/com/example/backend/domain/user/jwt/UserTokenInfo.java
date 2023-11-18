package com.example.backend.domain.user.jwt;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserTokenInfo {
	private Long id;
	private String email;
}
