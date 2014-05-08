<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>과목상세정보</title>
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="../css/common.css">
</head>
<body>
<div id="container">
<jsp:include page="/header.jsp"/>
<div class="contentBox medium">
<h3 style="margin-bottom: 100px">과목 상세정보(EL)</h3>
<table class="table">
<tr>
  <th>번호</th>
  <td>${subject.no}</td>
</tr>
<tr>
  <th>과목명</th>
  <td>${subject.title}</td>
</tr>
<tr>
  <th>내용</th>
 <td>${subject.description}</textarea></td>
</tr>
</table>
<a href='main.html' class="btn btn-primary btn-sm">목록</a> 
<!-- <a href='list.bit?pageNo=1&pageSize=10' class="btn btn-primary btn-sm">목록</a>  -->
<a href='delete.bit?no=${subject.no}' class="btn btn-primary btn-sm">삭제</a> 
<a href='update.bit?no=${subject.no}' class="btn btn-primary btn-sm">변경</a><br>
</div>
</div>
<jsp:include page="/footer.jsp"/>
</body></html>










