package com.example.manage.dto;

import java.util.List;

import org.springframework.http.HttpStatusCode;

import com.example.manage.entity.UserEntity;

import lombok.Data;

@Data
public class BaseResponse {

	HttpStatusCode statusCode;
	List<UserEntity> userList;
}
