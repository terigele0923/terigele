package cn.java.service.impl;

import java.io.Serializable;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import cn.java.service.RedisService;

@Service
public class RedisServiceImpl implements RedisService {
    @Autowired
    private RedisTemplate redisTemplate;

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#set(java.lang.String,
     *      java.lang.Object)
     */
    @Override
    public boolean set(final String key, Object value) {
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            operations.set(key, value);
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#set(java.lang.String,
     *      java.lang.Object, java.lang.Long)
     */
    @Override
    public boolean set(final String key, Object value, Long expireTime) {
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            operations.set(key, value);
            redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#remove(java.lang.String)
     */
    @Override
    public void remove(final String... keys) {
        for (String key : keys) {
            remove(key);
        }
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#removePattern(java.lang.String)
     */
    @Override
    public void removePattern(final String pattern) {
        Set<Serializable> keys = redisTemplate.keys(pattern);
        if (keys.size() > 0)
            redisTemplate.delete(keys);
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#remove(java.lang.String)
     */
    @Override
    public void remove(final String key) {
        if (exists(key)) {
            redisTemplate.delete(key);
        }
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#exists(java.lang.String)
     */
    @Override
    public boolean exists(final String key) {
        return redisTemplate.hasKey(key);
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#get(java.lang.String)
     */
    @Override
    public Object get(final String key) {
        Object result = null;
        ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
        result = operations.get(key);
        return result;
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#hmSet(java.lang.String,
     *      java.lang.Object, java.lang.Object)
     */
    @Override
    public void hmSet(String key, Object hashKey, Object value) {
        HashOperations<String, Object, Object> hash = redisTemplate.opsForHash();
        hash.put(key, hashKey, value);
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#hmGet(java.lang.String,
     *      java.lang.Object)
     */
    @Override
    public Object hmGet(String key, Object hashKey) {
        HashOperations<String, Object, Object> hash = redisTemplate.opsForHash();
        return hash.get(key, hashKey);
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#lPush(java.lang.String,
     *      java.lang.Object)
     */
    @Override
    public void lPush(String k, Object v) {
        ListOperations<String, Object> list = redisTemplate.opsForList();
        list.rightPush(k, v);
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#lRange(java.lang.String, long,
     *      long)
     */
    @Override
    public List<Object> lRange(String k, long l, long l1) {
        ListOperations<String, Object> list = redisTemplate.opsForList();
        return list.range(k, l, l1);
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#add(java.lang.String,
     *      java.lang.Object)
     */
    @Override
    public void add(String key, Object value) {
        SetOperations<String, Object> set = redisTemplate.opsForSet();
        set.add(key, value);
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#setMembers(java.lang.String)
     */
    @Override
    public Set<Object> setMembers(String key) {
        SetOperations<String, Object> set = redisTemplate.opsForSet();
        return set.members(key);
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#zAdd(java.lang.String,
     *      java.lang.Object, double)
     */
    @Override
    public void zAdd(String key, Object value, double scoure) {
        ZSetOperations<String, Object> zset = redisTemplate.opsForZSet();
        zset.add(key, value, scoure);
    }

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.RedisService#rangeByScore(java.lang.String,
     *      double, double)
     */
    @Override
    public Set<Object> rangeByScore(String key, double scoure, double scoure1) {
        ZSetOperations<String, Object> zset = redisTemplate.opsForZSet();
        return zset.rangeByScore(key, scoure, scoure1);
    }
}