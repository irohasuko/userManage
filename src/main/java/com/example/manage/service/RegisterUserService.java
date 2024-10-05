package com.example.manage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.manage.dao.UserDao;
import com.example.manage.dto.BaseResponse;
import com.example.manage.model.UserRequest;

@Service
public class RegisterUserService {

	@Autowired
	private UserDao userDao;

	public BaseResponse registerUser(UserRequest user) {
		BaseResponse res = new BaseResponse();
		userDao.register(user.toEntity());

		res.setStatusCode(HttpStatus.CREATED);

		return res;
	}
}
