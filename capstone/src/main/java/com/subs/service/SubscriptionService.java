package com.subs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.subs.entity.Subscription;
import com.subs.repository.SubscriptionRepository;

@Service
public class SubscriptionService {
	
	@Autowired
	SubscriptionRepository subscriptionRepository;

	public void saveSubscription(Subscription s1) {
		subscriptionRepository.save(s1);
	}
	
	public List<Subscription> printSubscriptions() {
		return subscriptionRepository.findAll();
	}
	public List<Subscription> findAllByUserEmail(String userEmail) {
		return subscriptionRepository.findAllByUserEmail(userEmail);
	}
}
