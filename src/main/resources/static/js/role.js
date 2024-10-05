$(document).ready(function() {
	// ユーザ権限一括更新ボタンをクリックしたときの処理
	$('#roleBtn').on('click', function() {
		// チェック済みユーザ情報の取得
		var checkedUserList = [];
		
		var checkFlag = false;
		
		$('#userTable tbody tr').each(function() {
			if ($(this).find('.user-checkbox').is(':checked')) {
				checkFlag = true;
				var userId = $(this).find('.user-id').val();
				var userName = $(this).find('.user-name').val();
				var userRole = $(this).find('.user-role').val();
				var departmentName = $(this).find('.department-name').val();
				checkedUserList.push({
					userId: userId,
					userName: userName,
					userRole: userRole,
					departmentName: departmentName
				});
			}
		});
		
		if(!checkFlag){
			alert("権限を変更したいユーザをチェックしてください");
			return;
		}
		
		$('#userModal').fadeIn(); // モーダルを表示
		const userModal = $('#userModal');
		
		userModal.append(`
            <div class="modal-content">
	            <span id="closeModal" style="float:right; cursor:pointer;">&times;</span>
	            <h1>ユーザ権限一括更新</h1>
			    <form id="userRoleForm">
			        <label for="userRole">役割:</label>
			        <input type="text" id="userRole" required><br><br>

			        <button type="submit">更新</button>
			    </form>
        	</div>
        `);

		$('#userRoleForm').on('submit', function(event) {
			event.preventDefault(); // デフォルトの送信を防ぐ

			// インプット要素から値を取得
			const userRole = $('#userRole').val();
			
			// チェック済みユーザのロール情報を取得値に変更
			const updateUserList = checkedUserList.map(user => {
				return {
					...user,
					userRole: userRole
				};
			});

			// AJAXリクエストを使用してユーザを登録
			$.ajax({
				url: '/api/user-role', // ユーザ登録用のAPIエンドポイント
				type: 'PUT',
				contentType: 'application/json',
				data: JSON.stringify(updateUserList), // JSON形式に変換
				success: function(response) {
					alert('ユーザを登録しました。');
					// ここで追加の処理（例: フォームのクリア）を行うことができます
					window.location.href = "/main";
				},
				error: function(jqXHR, textStatus, errorThrown) {
					alert('ユーザ登録に失敗しました。エラー: ' + textStatus);
				}
			});
		});

		// モーダルを閉じる処理
		$('#closeModal').on('click', function() {
			$('#userModal').fadeOut(); // モーダルを非表示
			$('#userModal').empty();
		});
	});
});