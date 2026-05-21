<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
					+ request.getContextPath() + "/";
%>
<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<link href="<%=basePath %>/static/css/style.css" rel="stylesheet"
	type="text/css" />
<link href="<%=basePath %>/static/css/select.css" rel="stylesheet"
	type="text/css" />
<script type="text/javascript" src="<%=basePath %>/static/js/jquery.js"></script>
<script type="text/javascript"
	src="<%=basePath %>/static/js/jquery.idTabs.min.js"></script>
<script type="text/javascript"
	src="<%=basePath %>/static/js/select-ui.min.js"></script>
<script type="text/javascript"
	src="<%=basePath %>/static/js/editor/kindeditor.js"></script>
<script type="text/javascript"
	src="<%=basePath %>/static/js/laydate/laydate.js"></script>
<script type="text/javascript">
    KE.show({
        id : 'content7',
        cssPath : './index.css'
    });
  </script>
<script type="text/javascript">



$(document).ready(function(e) {
    $(".select1").uedSelect({
		width : 345			  
	});
	$(".select2").uedSelect({
		width : 167  
	});
	$(".select3").uedSelect({
		width : 100
	});
	
	
	
});


</script>
</head>

<body>
	<div class="place">
		<span>位置：</span>
		<ul class="placeul">
			<li><a href="#">首页</a></li>
			<li><a href="#">订单管理</a></li>
			<li><a href="#">添加订单</a></li>
		</ul>
	</div>
	<div class="formbody">
		<div class="formtitle">
			<span>添加订单</span>
		</div>
		<div id="usual1" class="usual">
			<div id="tab1" class="tabson">
			<form action="javascript:void(0)" type="POST">
				<ul class="forminfo">
					<li><label>房间号<b>*</b></label>
						<div class="vocation">
							<select class="select1" name="roomId">
								<c:forEach items="${roomList }" var="map">
									<option value="${map.id }">${map.room_num }</option>
								</c:forEach>
							</select>
						</div></li>
					<br />
					<li style="margin-top: 20px;"><label for="name">客人姓名<b>*</b></label>
						<div class="vocation">
							<input name="customerName" type="text" class="dfinput"
								placeholder="长度为2-20位的字符" style="width: 344px;" />
						</div></li>
					<br />
					<li><label for="name">身份证号码<b>*</b></label>
						<div class="vocation">
							<input name="idcard" type="text" class="dfinput"
								placeholder="请填写客户身份证号码" style="width: 344px;" />
						</div></li>
					<br />
					<li><label for="name">手机号码<b>*</b></label>
						<div class="vocation">
							<input name="phone" type="text" class="dfinput"
								placeholder="请填写客户手机号码" style="width: 344px;" />
						</div></li>
					<br />
					<li><label for="name">消费金额<b>*</b></label>
						<div class="vocation">
							<input name="money" type="text" class="dfinput"
								placeholder="输入正数" style="width: 344px;" />
						</div></li>
					<br />
					<li>
						<label for="orderStatus">结算状态<b>*</b></label> 
						<div class="vocation">
							<input name="orderStatus" type="radio" value="1" checked="checked" />已结算&nbsp;&nbsp;&nbsp;&nbsp; 
							<input name="orderStatus" type="radio" value="0" />未结算
						</div>
					</li>
					<br />
					<li><label for="date">入住时间<b>*</b></label>
						<div class="vocation">
							<input name="createDate" type="text" class="laydate-icon span1-1" id="Calendar"
								style="width: 324px; height: 30px; line-height: 28px; text-indent: 10px;" />
						</div></li>
					<br />
					<li>
						<label>&nbsp;</label> 
						<input type="submit"class="btn" value="添加" />
					</li>
				</ul>
			</form>
			</div>
		</div>
		<script type="text/javascript"> 
  
      $("#usual1 ul").idTabs(); 
    </script>
		<script type="text/javascript">
	$('.tablelist tbody tr:odd').addClass('odd');
	
	!function(){
laydate.skin('qianhuang');
laydate({elem: '#Calendar'});
laydate.skin('qianhuang');
laydate({elem: '#Calendar2'});
}();
$(function dd(){
		var d=new Date(),str="";
		str+=(d.getFullYear()+"-");
		str+="0";
		str+=(d.getMonth()+1+"-");
		str+=d.getDate();
		$("#Calendar").attr("value",str);
		$("#Calendar2").attr("value",str);
	});

	</script>
	
<script type="text/javascript">
	$(function(){
		//根据房间号事件来获取当前已经入住人的详细信息
		$("select[name=roomId]").change(function(){
			var v = $("select[name=roomId]>option:selected").val();
			$.ajax({
				url:"<%=basePath %>/getInRoomInfoByRoomId.do",
				type:"POST",
				dataType:"JSON",
				data:{roomId:v},
				success:function(result){
					var rs = JSON.parse(result);
					//回显给文本输入框设置值
					$("input[name=customerName]").val(rs.customer_name);
					//将状态设置为不可修改状态
					$("input[name=customerName]").attr("disabled","disabled");
					
					//入住时间
					$("input[name=createDate]").val(rs.create_date);
					$("input[name=createDate]").attr("disabled","disabled");
					
					//身份证号
					$("input[name=idcard]").val(rs.idcard);
					$("input[name=idcard]").attr("disabled","disabled");
					
					//手机号码
					$("input[name=phone]").val(rs.phone);
					$("input[name=phone]").attr("disabled","disabled");
				}
			});
		});
	});
</script>
	</div>
</body>
</html>
