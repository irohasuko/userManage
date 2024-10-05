package com.example.manage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.manage.dao.UserDao;
import com.example.manage.dto.BaseResponse;
import com.example.manage.model.UserRequest;

@Service
public class DeleteUserService {

	@Autowired
	private UserDao userDao;

	public BaseResponse deleteUser(int userId) {
		BaseResponse res = new BaseResponse();
		userDao.delete(userId);

		res.setStatusCode(HttpStatus.OK);

		return res;
	}

	public BaseResponse deleteUsers(List<UserRequest> userList) {
		BaseResponse res = new BaseResponse();

		for (UserRequest user : userList) {
			userDao.delete(user.getUserId());
		}

		res.setStatusCode(HttpStatus.OK);

		return res;
	}
}
