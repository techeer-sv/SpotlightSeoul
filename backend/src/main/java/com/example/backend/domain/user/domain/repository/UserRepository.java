package com.example.backend.domain.user.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.domain.user.domain.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}

