<?php 
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no">
	<link rel="stylesheet" type="text/css" href="css/knowledge.css">
	<title></title>
</head>
<!-- 1107 ver 3.0-->
<body class="nav_scope_unique">
	
	<div class="wrap_header_nav">
		<input type="checkbox" name="" id="translate_view">
		<div class="main_header_content">

			<header class="header_content">
				<label for="translate_view" class="mobile_display">
					<div class="wrap_hbg" id="hbg_controller">
						<div class="wrap_hbg_d">
							<div class="hbg hbg_1"></div>
							<div class="hbg hbg_2"></div>
							<div class="hbg hbg_2_1"></div>
							<div class="hbg hbg_3"></div>
						</div>
					</div>
				</label>

				<div class="logo">
					<a href="stellar.php"><img src="img/logo1.png"></a>
				</div>

				<div class="wrap_mobile_bell mobile_display">
					<!-- 登入才出現 -->
					<?php
						if( isset($_SESSION["mem_nickName"]) ){
					?>
						<div class="bell mobile_bell" id="mobile_bell">
							<img class="mobile_display" src="img/icon_yellow_bell.png">
							<div class="showinfo mobile_display">
								<span>3</span>
							</div>
						</div>					
					<?php	
						}
					?>
				</div>

				<nav>
					<ul class="nav_list">
						<li>
							<!-- 登入才出現 -->
							<?php
								if( isset($_SESSION["mem_nickName"]) ) {
							?>
							
								<div class="mem_info" class="when_login">
									<div class="bell web_bell web_display" id="web_bell_web">
										<img class="web_display" src="img/icon_yellow_bell.png">
										<div class="showinfo web_display">
											<span>3</span>
										</div>
									</div>

									<div class="mem_img mem_name_center">	
										<img src="img/p.jpg">
									</div>

									<div class="mem_name_center" id="mem_name_center">
										<p class="mem_name mobile_display"><?php echo $_SESSION['mem_nickName']?> </p> 
										<p class="mem_center mobile_display"><a href="member_center.php">會員中心</a></p>
									</div>
								</div>

							<?php
								}
							?>

							<!-- 未登入出現 -->
							<?php
								if( !isset($_SESSION["mem_nickName"]) ){
							?>
								<p class="when_logout login_box"><a>登入/註冊</a></p>
							<?php	
								}
							?>						

							<?php
								if( isset($_SESSION["mem_nickName"]) ){
							?>
	 							<ul class="member_list web_display">
									<li><p class="mem_name"> <?php echo $_SESSION["mem_nickName"] ?> </p></li>
		                            <li><a href="member_center.php" class="p_normalformat">會員中心</a></li>
		                            <li class="web_logout"><a href="logout.php">登出</a></li>
		                        </ul>
							<?php	
								}
							?>
						</li>
						<li class="link_style"><a href="event_filter_surfing2.php">揪團觀星</a></li>
						<li class="link_style"><a href="album_surfing.php">星空相簿</a></li>		
						<li class="link_style"><a href="knowledge.php">觀星知識</a></li>

						<?php
							if( isset($_SESSION["mem_nickName"]) ){
						?>
							<li class="mobile_display mobile_logout"><a href="logout.php">登出</a></li>
						<?php	
							}
						?>

					</ul>
				</nav>

				<div class="show_info_detail" id="show_info_detail">
					<ul class="info_detail_list">
						<li>
							<p>您的文章<span>「推薦觀星景點」</span>有新回覆</p>
							<p><span>Jone</span><span>台北陽明山、花蓮七星潭...</span></p>
						</li>
						<li>
							<p>您的相簿<span>「台北烘爐地」</span>被檢舉超過三次將停權</p>
							<p>因政治商業內容不符本站規範，您將被停權一個月</p>
						</li>
						<li>
							<p>您的文章<span>「推薦觀星景點」</span>有新回覆</p>
							<p><span>Jone</span><span>台北陽明山、花蓮七星潭...</span></p>
						</li>
						<li>
							<p>您的相簿<span>「台北烘爐地」</span>被檢舉超過三次將停權</p>
							<p>因政治商業內容不符本站規範，您將被停權一個月</p>
						</li>
						<li>
							<p>您的文章<span>「推薦觀星景點」</span>有新回覆</p>
							<p><span>Jone</span><span>台北陽明山、花蓮七星潭...</span></p>
						</li>
						<li><a href="#">查看所有通知</a></li>
					</ul>
				</div>

			</header>
		</div>


		<div class="main_content_camera">
			<div class="main_content_space">
				<div class="main_content">

					<!-- 下面這塊相當於原本的body -->
					<div id="stellar_knowledge_content">
						<!-- 第一區塊 -->
						<section id="stellar_info_sec">
							<div id="stellar_info_content">
								<canvas id="stellar_canvas"></canvas>
								<canvas id="stellar_canvas_mobile"></canvas>
								<div id="stellar_text_content">
									<h2>太陽與星星</h2>
									<h3 id="stellar_title"></h3>
									<p id="stellar_introduction">
									</p>
								</div>
								<div id="control_text">
									<p>使用 W A S D 及 滑鼠 操作畫面</p>
								</div>
							</div>
						</section>
						<!-- 第二區塊 -->
						<section id="special_countdown_sec">
							<div id="special_countdown_content">
								<div id="countdown_timer_bar">
									<h2>流星雨倒數</h2>
									<div id="all_countdown_content">
										
									</div>
								</div>
								<div id="meteor_shower_background">
									<canvas id="meteor_shower_canvas">	
									</canvas>
								</div>
							</div>
						</section>

						<!-- 第三區塊  -->
						<section id="horoscope_info_sec">
							<div id="horoscope_info_content">
								<div id="horoscope_banner">
									<div id="particles-js"></div>
									<div id="left_block"></div>
									<div id="horoscope_box_container">
										<div class="horoscope_box">
											<div class="horoscope_img_box">
												<img class="horoscope_img" src="" alt="" id="banner_left_img">
											</div>
										</div>
										<div class="horoscope_box">
											<div class="horoscope_img_box">
												<img class="horoscope_img" src="" alt="" id="banner_center_img">
											</div>
											<div class="horoscope_text_box">
												<h4 class="horoscope_title"></h4>
												<p class="horoscope_date"></p>
												<p class="horoscope_info"></p>
												<div id="left_arrow">
													<div id="left_arrow_top"></div>
													<div id="left_arrow_bottom"></div>
												</div>
												<div id="right_arrow">
													<div id="right_arrow_top"></div>
													<div id="right_arrow_bottom"></div>
												</div>
											</div>
										</div>
										<div class="horoscope_box">
											<div class="horoscope_img_box">
												<img class="horoscope_img" src="" alt="" id="banner_right_img">
											</div>
										</div>
									</div>
									<div id="right_block"></div>
								</div>
							</div>
						</section>

					</div>
					
	
				</div>	
			</div>
		</div>



	</div>

	<!-- 登入註冊燈箱從這開始 -->

	<section class="login_signup_sec">
		<div class="login_signup_content">
			<div class="wrap_login_signup">
				<div class="wrap_logo_switch clearfix">
					<div class="decorate_logo">
						<img src="img/logo1.png">
					</div>
					<div class="switch_display">
						<div class="close_box" id="close_box">
							<img id="close_login_signup_box" src="img/icon_white_X.png">
						</div>

						<div class="switch_selector">
							<p id="login">登入</p>
							<p id="signup">註冊</p>
							<div class="switch_light"><!--切換光條--></div>
						</div>
						
					</div>
				</div>



				<div class="member_signup_input">

					<!-- 登入 -->
					<div class="wrap_login_box login_display">
						<form action="check_account_passpword.php" method="POST">
							<div class="input_bar">
								<label class="show_account_info" id="show_account_text">帳號</label>
								<div class="wrap_account_input">
									<input class="input1" type="text" name="user_account" id="account_input"placeholder="帳號">
								</div>
							</div>
							<div class="input_bar">
								<label class="show_account_info" id="show_account_password">密碼</label>
								<div>
									<input class="input1" id="account_password" type="password" name="user_password" placeholder="密碼">
								</div>
							</div>
						

							<div class="error_forgot_submit_bar ">
								<p class="show_error" id="show_error">
									<?php
										if ( isset($_SESSION["pswErrorMsg"]) ) {
											echo $_SESSION["pswErrorMsg"];
									} ?>
									　
								</p>
								<a class="forget_password login_display">忘記密碼</a>
							</div>

							<div class="wrap_login_btn">
								<input type="image" class="login_btn form_submit_btn" src="img/icon_white_goleftarrow.png">	
							</div>
						</form>
					</div>




					<!-- 註冊 -->
					<div class="wrap_signup_box signup_display">
						<form action="create_account.php" method="POST" id="create_account">
							<div class="input_bar">
								<div class="wrap_input_item">
									<label class="show_signup_info" id="show_account_password">帳號</label>
									<input class="input1" type="text" name="new_account" maxlength="16" placeholder="至多16位英數字" id="new_account">
									<div class="check_value" id="account_info"><p>1232</p><img src="img/icon_green_correct.png" alt="" />
									</div>
								</div>
							</div>
							
							<div class="input_bar">
								<div class="wrap_input_item">
								<label class="show_signup_info" id="show_account_password">密碼</label>
									<input class="input1" type="password" name="new_password" maxlength="16" placeholder="至多16位英數字" id="new_passowrd">
									<div class="check_value" id="password_info"><p>2</p><img src="img/icon_green_correct.png" alt="">
									</div>
								</div>
							</div>

							<div class="input_bar">
								<div class="wrap_input_item">
								<label class="show_signup_info" id="show_account_password">確認密碼</label>
									<input class="input1" type="password" name="" maxlength="16" placeholder="至多16位英數字" id="new_confirm_password">
									<div class="check_value" id="confirm_password_info"><p>3</p><img src="img/icon_green_correct.png" alt="">
									</div>
								</div>
							</div>
							
							<div class="input_bar">
								<div class="wrap_input_item">
								<label class="show_signup_info" id="show_account_password">暱稱</label>
									<input class="input1" type="text" name="new_nickname" id="new_nickname">
									<div class="check_value" id="nickname_info"><p>4</p><img src="img/icon_green_correct.png" alt="">
									</div>
								</div>
							</div>
							
							<div class="input_bar">
								<div class="wrap_input_item">
								<label class="show_signup_info" id="show_account_password">E-mail</label>
									<input class="input1" type="text" name="new_email"  id="new_email">
									<div class="check_value" id="email_info"><p>5</p><img src="img/icon_green_correct.png" alt="">
									</div>
								</div>
							</div>
							<div class="wrap_signup_btn">
								<input type="submit" class="signup_btn form_submit_btn" value="註冊">
							</div>
						</form>


					</div>
					


				</div>
			</div>
			
		</div>
	</section>

	<!-- 登入註冊燈箱在這結束 -->

	<script	src="https://code.jquery.com/jquery-3.3.1.min.js"></script>	
	<script src="js/nav_login_signup_box.js"></script>
	<script src="js/signUpCheck.js"></script>
	<script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.js"></script>
	<script src="js/knowledge/three.js"></script>
	<script src="js/knowledge/firstPersonControl.js"></script>
	<script src="js/knowledge/helvetiker_regular.typeface.js"></script>
	<script src="js/knowledge/stellar_canvas.js"></script>
	<script src="js/knowledge/stellar_canvas_mobile.js"></script>
	<script src="js/knowledge/stellar_text.js"></script>
	<script src="js/knowledge/meteor_shower.js"></script>
	<script src="js/knowledge/horoscope_banner.js"></script>
	<script src="js/knowledge/countdown_box.js"></script>
	<script src="js/knowledge/particles_background.js"></script>
</body>
</html>