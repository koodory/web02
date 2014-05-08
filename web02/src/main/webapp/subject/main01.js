$(document).ready(function(){
	var pageCount = 1;
	loadSubjectList();

	$('#btnForward').click(function() {
		try {
            loadSubjectList(++pageCount);
		} catch (err) {
			alert(err);
		}
	})

	$('#btnBackward').click(function() {
		try {
			if(pageCount <=0){
				pageCount = 1;
			}
            loadSubjectList(--pageCount);
		} catch (err) {
			alert(err);
		}
	})
});

function clearSubjectList() {
	$('.dataRow').remove();
}

function loadSubjectList(pageCount){
	$.ajax('list.ajax', {
		type: 'POST',
		dataType: 'json', /*서버에서 보내는 데이터의 형식 지정 */
		data: { /* 서버쪽으로 보내는 데이터 */
			pageNo: pageCount
		},
		success: function(Obj){
			var subjects = Obj.ajaxResult.data;
			var subejctTable = $("#subjectTable");
			clearSubjectList();
			var tr = null, td = null, a = null;
			subjects.forEach(function(subject){
				tr = document.createElement('tr');
				tr.setAttribute('class', 'dataRow');
				[subject.no, subject.title].forEach(function(value,index,arr){
					 td = document.createElement('td');
				     td.innerHTML = value; 
					 tr.appendChild(td);
				 });
				td = document.createElement('td');
				a = document.createElement('a');
				a.href = '#';
				a.onclick = function(event) {
					deleteSubject(subject.no);
					event.preventDefault();
				};
				a.innerHTML = '삭제';
				td.appendChild(a);
				tr.appendChild(td);

				subejctTable.append(tr);
			});	
		},
		error: function(xhr, status, errorThrown){
			alert('오류 발생!');
			console.log(status);
			console.log(errorThrown);
		}
	});
	
	function deleteSubject(no, pageControl) {
		$.ajax('delete.ajax?no=' + no, {
			data: {
				pageNo: pageCount,
				no: $('#no').val()
			},
			method: 'GET',
			success: function(result){
				loadSubjectList();
			},
			error: function(msg){
				alert('회원 삭제 실패!');
				console.log(msg);
			}
		});
	}

	// 로그인 성공 후에 해야할 작업을 여기에 기술한다면,당신은 바보!
	//location.href="../subject/list.bit";
}

