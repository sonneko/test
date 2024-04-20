//フォームでログイン記録を作る
const sendForm (id) {
	//送信する内容を変更
	Element.update("ques", "<input name=\"entry.[回答場所]\" value=\"" & sendMessage & "\">");
	//送信ボタンを押す
	document.getElement(")
}

//ログイン失敗を反映
const loginMissUpdate = function () {
	pass-input.textContent = '';
	login-result = 'IDもしくはパスワードが違います。';
	Element.update("login_result", login-result);
}

//ログイン成功を反映
const loginSuccUpdate = function () {
	Element.update("my_page", myPageHtmlDate);
}

//パスワード用暗号化
const passCoding = function (content, key) {
	//要開発
	const code = content;
	return code;
}

//html解読
const htmlDecoding = function (code, pass) {
	//要開発
	const content = code;
	return content;
}

//ログインボタンのクリックイベントリスナー
login_btn.addEventListener("click", ()=>{
	//html要素の取得
	const login-page = document.getElementById(login_page);
	const id-input = document.getElementById(id_input);
	const pass-input = document.getElementById(pass_input);
	const login-result = document.getElementById(login_result);
	const login-btn = document.getElementById(login_btn);

	//スプレッドシートを取得し、配列に変換
	d3.csv("https://docs.google.com/spreadsheets/d/[スプレッドシートid]/export?format=csv&range=A3:H", function(error, svgData){
		//id番号を取得
		for( let i = 0; i < svgDate.length; i++){
			if (svgDate[i] === id-input){
				const id = i;
			}
		}
		
		//自分のデータをまとめて取り込み
		const accountInfo = svgDate.find((item) => item.id === id);
		//id名が見つからなかったら
		if (accountInfo === undefined) {
			console.log("not found accountInfo");
			loginMissUpdate();
			passKey = null;
		}
		
		//パスワード用公開keyを取得
		const passKey = accountInfo.passKey;
		//暗号化済みパスワードを取得
		const codedPass = accountInfo.codedPassKey;
		//暗号化済みhtmlを取得
		const codedHtml = accountInfo.codedHtml;
		
		//入力されたパスワードpass-inputをpassKeyで暗号化
		const inputCodedPass = passCoding(pass-input, passKey);
		
		//パスワードの正しさをチェック
		if (inputCodedPass = codedPass) {
			//正しい時
			console.log("succeeded login")
			const myPageHtmlDate = htmlDecoding(codedHtml, pass-input);		//htmlを復号
			loginSuccUpdate();														//htmlを更新しマイページを表示
			const loginOr = true;														//自動ログインをオンに設定
			sendForm(id);																//ログイン情報をフォームで送信
		} else {
			//違う時
			console.log("wrong the pass");
			loginMissUpdate();
			const loginOr = false;														//自動ログインをオフに設定
	}
});
