$(document).ready(function() {
	// ユーザ登録ボタンをクリックしたときの処理
	$('#registerBtn').on('click', function() {
		$('#userModal').fadeIn(); // モーダルを表示
		const userModal = $('#userModal');
		userModal.append(`
            <div class="modal-content">
	            <span id="closeModal" style="float:right; cursor:pointer;">&times;</span>
	            <h1>ユーザ更新</h1>
			    <form id="userForm">
			        <label for="userName">名前:</label>
			        <input type="text" id="userName" required><br><br>
			        
			        <label for="userRole">役割:</label>
			        <input type="text" id="userRole" required><br><br>
			        
			        <label for="departmentName">部署名:</label>
			        <input type="text" id="departmentName" required><br><br>
			        
			        <button type="submit">更新</button>
			    </form>
        	</div>
        `);

		$('#userForm').on('submit', function(event) {
			event.preventDefault(); // デフォルトの送信を防ぐ

			// インプット要素から値を取得
			const userData = {
				userName: $('#userName').val(),
				userRole: $('#userRole').val(),
				departmentName: $('#departmentName').val()
			};

			// AJAXリクエストを使用してユーザを登録
			$.ajax({
				url: '/api/user', // ユーザ登録用のAPIエンドポイント
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify(userData), // JSON形式に変換
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