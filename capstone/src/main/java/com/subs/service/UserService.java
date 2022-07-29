package com.subs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.subs.entity.User;
import com.subs.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public void saveUser(User user) {
		userRepository.save(user);
	}

	public User loginUser(User user) {
		User login = userRepository.login(user.getEmail(), user.getPassword());
		return login;

	}

	public Optional<User> findByEmail(String email) {
		return userRepository.findById(email);
	}

	public List<User> findAllUsers() {
		return userRepository.findAll();

	}

	public void deleteUserByEmail(String email) {
		userRepository.deleteById(email);
	}

	

}
