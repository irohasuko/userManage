package com.example.manage.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.manage.entity.UserEntity;

@Mapper
public interface UserDao {

	public List<UserEntity> getAll();

	public void register(UserEntity user);

	public int update(UserEntity user);

	public int delete(int userId);
}
