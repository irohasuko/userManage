package com.example.manage.model;

import com.example.manage.entity.UserEntity;

import lombok.Data;

@Data
public class UserRequest {

	private Integer userId;
	private String userName;
	private String departmentName;
	private String userRole;

	public UserEntity toEntity() {
		UserEntity userEntity = new UserEntity();
		userEntity.setUserId(this.userId);
		userEntity.setUserName(this.userName);
		userEntity.setUserRole(this.userRole);
		userEntity.setDepartmentName(this.departmentName);

		return userEntity;
	}
}
