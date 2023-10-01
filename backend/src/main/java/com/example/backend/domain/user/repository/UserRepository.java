package com.example.backend.domain.user.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.backend.domain.user.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
