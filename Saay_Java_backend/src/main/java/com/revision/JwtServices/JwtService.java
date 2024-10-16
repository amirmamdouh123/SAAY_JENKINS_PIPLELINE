package com.revision.JwtServices;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.impl.DefaultJwtParser;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Function;


@Service
public class JwtService {

    private String key= "WEQFASDREGQ#$terf4w32545erfewrgrw24gEGERGWREGRTETYHTYh";

    public SecretKey generateKey() {
        byte[] d = key.getBytes();
        return Keys.hmacShaKeyFor(d);
    }

    public String generateToken(String username , List<Claims> claims){
        return Jwts.builder()
                .signWith(generateKey())
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*60*24))
                .compact();
    }

    public String generateToken(String username ){
        return generateToken(username,new ArrayList<>());
    }


    public Claims getAllClaims(String token){
        return Jwts.parserBuilder()
                .setSigningKey(generateKey())
                .build()
                .parseClaimsJws(token)      //we extract header , body,
                .getBody();
    }

    public <T> T getFromJwt(String token, Function<Claims,T> c ){
       Claims claims=  getAllClaims(token);
       return c.apply(claims);
    }

    public String getUsernameFromToken(String token){
        return  getFromJwt(token,Claims::getSubject);
    }

    public Date getIssuedAt(String token){
        return  getFromJwt(token,Claims::getIssuedAt);
    }

    public Date getExpiration(String token){
        return  getFromJwt(token,Claims::getExpiration);
    }

    public boolean isExpired(String token){
        Date exp = getExpiration(token);
        Date now = new Date();
        return exp.before(now);
    }




}
