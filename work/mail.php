<html>

<head>
	<meta charset="utf-8" />
</head>

<body>
	<?php
	mb_language("Japanese");
	mb_internal_encoding("UTF-8");

	$to = "akasatana0064@gmail.com";
	$title = "contactForm";
	$content = $_POST['company-name'];
	$email = $_POST['email'];
	$headers = "From: $email";

	if (mb_send_mail($to, $title, $content, $headers)) {
		echo "送信が完了しました";
	} else {
		echo "送信に失敗しました";
	}
	?>
</body>

</html>