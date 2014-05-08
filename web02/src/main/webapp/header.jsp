<%@ page language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id="loginBar">
${loginUser.name}(${loginUser.email})
<a href="${pageContext.request.contextPath}/auth/logout.bit">로그아웃</a>
</div>