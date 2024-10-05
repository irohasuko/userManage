package com.example.manage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.manage.dao.UserDao;
import com.example.manage.dto.BaseResponse;
import com.example.manage.entity.UserEntity;

@Service
public class GetUserService {

	@Autowired
	private UserDao userDao;

	public BaseResponse getUserList() {
		BaseResponse res = new BaseResponse();
		List<UserEntity> userList = userDao.getAll();

		res.setStatusCode(HttpStatus.OK);
		res.setUserList(userList);

		return res;
	}
}
