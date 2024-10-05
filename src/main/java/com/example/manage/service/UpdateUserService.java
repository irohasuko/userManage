package com.example.manage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.manage.dao.UserDao;
import com.example.manage.dto.BaseResponse;
import com.example.manage.model.UserRequest;

@Service
public class UpdateUserService {

	@Autowired
	private UserDao userDao;

	public BaseResponse updateUser(UserRequest user) {
		BaseResponse res = new BaseResponse();
		userDao.update(user.toEntity());

		res.setStatusCode(HttpStatus.OK);

		return res;
	}

	public BaseResponse updateUserRole(List<UserRequest> userList) {
		BaseResponse res = new BaseResponse();

		for (UserRequest user : userList) {
			userDao.update(user.toEntity());
		}

		res.setStatusCode(HttpStatus.OK);

		return res;
	}
}
