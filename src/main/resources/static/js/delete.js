$(document).ready(function() {
	// ユーザ登録ボタンをクリックしたときの処理
	$('#deleteBtn').on('click', function() {
		var usersToDelete = [];
		var checkFlag = false;
		$('#userTable tbody tr').each(function() {
			if ($(this).find('.user-checkbox').is(':checked')) {
				checkFlag = true;
				var userId = $(this).find('.user-id').val();
				var userName = $(this).find('.user-name').val();
				var userRole = $(this).find('.user-role').val();
				var departmentName = $(this).find('.department-name').val();
				usersToDelete.push({
					userId: userId,
					userName: userName,
					userRole: userRole,
					departmentName: departmentName
				}); // IDと名前をオブジェクトとして追加
			}
		});
		
		if(!checkFlag){
			alert("削除したいユーザをチェックしてください");
			return;
		}

		// AJAXリクエストを使用してユーザを登録
		$.ajax({
			url: '/api/user/delete', // ユーザ削除用のAPIエンドポイント
			type: 'POST',
			contentType: 'application/json',
			data: JSON.stringify(usersToDelete), // JSON形式に変換
			success: function(response) {
				alert('ユーザを削除しました。');
				// 削除したらメイン画面に遷移
				window.location.href = "/main";
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert('ユーザ削除に失敗しました。エラー: ' + textStatus);
			}
		});
	});
});