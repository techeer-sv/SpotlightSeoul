package com.example.backend.domain.user.entity;

import org.hibernate.annotations.Where;

import com.example.backend.domain.user.dto.request.UserUpdateRequest;
import com.example.backend.global.audit.Auditable;
import com.example.backend.global.audit.BaseTime;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "users")
@Where(clause = "is_deleted = false")
public class User implements Auditable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@Column(nullable = false, unique = true)
	private String username;

	@Column(nullable = false)
	private String password;

	@Column(nullable = false)
	private String email;

	@Column(nullable = false)
	private String location;

	@Setter
	@Embedded
	@Column(nullable = false)
	private BaseTime baseTime;

	@Column(name = "is_deleted")
	private boolean isDeleted = false;

	@Builder
	public User(String username, String password, String email, String location){
		this.username = username;
		this.password = password;
		this.email = email;
		this.location = location;
	}

	public void update(UserUpdateRequest request){
		this.username = request.getUsername();
		this.password = request.getPassword();
		this.email = request.getEmail();
		this.location = request.getLocation();
	}

	public void softDelete() {
		this.isDeleted = true;
	}

}


