$(document).ready(function() {
	// ユーザー一覧を取得する関数
	function fetchUsers() {
		$.ajax({
			url: '/api/user', // ユーザー情報を取得するAPIエンドポイント
			type: 'GET', // HTTPメソッド
			dataType: 'json', // 期待するデータ形式
			success: function(data) {
				// テーブルのtbodyにユーザー情報を追加
				const userTableBody = $('#userTable tbody');
				userTableBody.empty();

				$.each(data.userList, function(index, user) {
					console.log(user)
					userTableBody.append(`
                        <tr id="${user.userId}">
                            <td>${user.userName}</td>
                            <td>${user.userRole}</td>
                            <td>${user.departmentName}</td>
                            <td>
                                <button class="button updateBtn" data-id="${user.id}">更新</button>
                            </td>
                            <td><input type="checkbox" class="user-checkbox" /></td>
                            <td>
                            	<input type="hidden" class="user-id" value="${user.userId}" />
                            	<input type="hidden" class="user-name" value="${user.userName}" />
                            	<input type="hidden" class="user-role" value="${user.userRole}" />
                            	<input type="hidden" class="department-name" value="${user.departmentName}" />
                            </td>
                        </tr>
                    `);
				});

				// 更新ボタンのクリックイベント
				$('.updateBtn').click(function() {
					$('#userModal').fadeIn(); // モーダルを表示
					const userModal = $('#userModal');
					
					const userData = $(this).closest("tr");
					const userId = userData.find('.user-id').val();
					const userName = userData.find('.user-name').val();
					const userRole = userData.find('.user-role').val();
					const departmentName = userData.find('.department-name').val();
					userModal.append(`
				        <div class="modal-content">
				            <span id="closeModal" style="float:right; cursor:pointer;">&times;</span>
				            <h1>ユーザ更新</h1>
						    <form id="userForm">
						    	<input type="hidden" id="userId" value="${userId}">
						        <label for="userName">名前:</label>
						        <input type="text" id="userName" value="${userName}"required><br><br>
						        
						        <label for="userRole">役割:</label>
						        <input type="text" id="userRole" value="${userRole}"required><br><br>
						        
						        <label for="departmentName">部署名:</label>
						        <input type="text" id="departmentName" value="${departmentName}"required><br><br>
						        
						        <button type="submit">更新</button>
						    </form>
				    	</div>
				    `);

					$('#userForm').on('submit', function(event) {
						event.preventDefault(); // デフォルトの送信を防ぐ

						// インプット要素から値を取得
						const userData = {
							userId: $('#userId').val(),
							userName: $('#userName').val(),
							userRole: $('#userRole').val(),
							departmentName: $('#departmentName').val()
						};

						// AJAXリクエストを使用してユーザを登録
						$.ajax({
							url: '/api/user', // ユーザ登録用のAPIエンドポイント
							type: 'PUT',
							contentType: 'application/json',
							data: JSON.stringify(userData), // JSON形式に変換
							success: function(response) {
								alert('ユーザを更新しました。');
								// ここで追加の処理（例: フォームのクリア）を行うことができます
								window.location.href = "/main";
							},
							error: function(jqXHR, textStatus, errorThrown) {
								alert('ユーザ更新に失敗しました。エラー: ' + textStatus);
							}
						});
					});

					// モーダルを閉じる処理
					$('#closeModal').on('click', function() {
						$('#userModal').fadeOut(); // モーダルを非表示
						$('#userModal').empty();
					});
				});
			},
			error: function(err) {
				alert('ユーザー情報の取得に失敗しました。');
			}
		});
	}

	// ページ読み込み時にユーザー一覧を取得
	fetchUsers();
});