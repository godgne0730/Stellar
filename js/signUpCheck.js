function checkForm() {
	newName = document.getElementById('new_account');
	newPassowrd = document.getElementById('new_passowrd');
	newConfirmPassword = document.getElementById('new_confirm_password');
	newEmail = document.getElementById('new_email');
	newNickname = document.getElementById('new_nickname');
	accountInfo = document.getElementById('account_info');
	passwordInfo = document.getElementById('password_info');
	confirmPasswordInfo = document.getElementById('confirm_password_info');
	emailInfo = document.getElementById('email_info');
	nicknameInfo = document.getElementById('nickname_info');

	newName.addEventListener('blur', checkAccount);
	newPassowrd.addEventListener('blur', checkPassword);
	newConfirmPassword.addEventListener('blur', checkConfirmPassword);
	newEmail.addEventListener('blur', checkEmail);
	newNickname.addEventListener('blur', checkNickname);
}


var acCheck = 0;
var pswCheck = 0;
var pswConfirmCheck = 0;
var emailCheck = 0;
var nnCheck = 0;

function checkAccount() {
	var checkPattern = /[A-Za-z0-9_]{6,}/;
	var result = checkPattern.test(newName.value);
	if (result) {
		accountInfo.firstChild.style.display = 'none';
		accountInfo.firstChild.nextSibling.style.display = 'block';
		acCheck = 1;
	} else {
		accountInfo.firstChild.style.display = 'block';
		accountInfo.firstChild.innerHTML = '請輸入至少6位數';
		accountInfo.firstChild.nextSibling.style.display = 'none';
		acCheck = 0;
	}
}

function checkPassword() {
	var checkPattern = /[A-Za-z0-9_]{6,}/;
	var result = checkPattern.test(newPassowrd.value);
	if (result) {
		passwordInfo.firstChild.style.display = 'none';
		passwordInfo.firstChild.nextSibling.style.display = 'block';
		pswCheck = 1;
	} else {
		passwordInfo.firstChild.style.display = 'block';
		passwordInfo.firstChild.innerHTML = '請輸入至少6位數';
		passwordInfo.firstChild.nextSibling.style.display = 'none';
		pswCheck = 0;
	}
}

function checkConfirmPassword() {
	if(newConfirmPassword.value != '') {
		if(newPassowrd.value==newConfirmPassword.value) {
			confirmPasswordInfo.firstChild.style.display = 'none';
			confirmPasswordInfo.firstChild.nextSibling.style.display = 'block';
			pswConfirmCheck = 1;
		} else {
			confirmPasswordInfo.firstChild.style.display = 'block';
			confirmPasswordInfo.firstChild.innerHTML = '密碼不相同';
			confirmPasswordInfo.firstChild.nextSibling.style.display = 'none';
			pswConfirmCheck = 0;
		}
	}
}

function checkNickname() {
	// 還有不可以填空白要寫進去
	if (newNickname.value != '') {
		nicknameInfo.firstChild.style.display = 'none';
		nicknameInfo.firstChild.nextSibling.style.display = 'block';
		nnCheck = 1;
	} else {
		nicknameInfo.firstChild.style.display = 'block';
		nicknameInfo.firstChild.innerHTML = '請輸入暱稱';
		nicknameInfo.firstChild.nextSibling.style.display = 'none';
		nnCheck = 0;
	}
}

function checkEmail() {
	emailPattern = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
	var result = emailPattern.test(newEmail.value);
	if (result) {
		emailInfo.firstChild.style.display = 'none';
		emailInfo.firstChild.nextSibling.style.display = 'block';
		emailCheck = 1;
	} else {
		emailInfo.firstChild.style.display = 'block';
		emailInfo.firstChild.innerHTML = '格式錯誤';
		emailInfo.firstChild.nextSibling.style.display = 'none';
		emailCheck = 0;
	}
}

//驗證未通過不要送出
$('#create_account').click(function(e) {
	if (acCheck == 1 && pswCheck == 1 && pswConfirmCheck ==1 && emailCheck == 1 && nnCheck == 1) {
		return true;
	} else {
		return false;
	}
})


window.addEventListener('load', checkForm);
