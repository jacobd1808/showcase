<? 
	include "../config/checkSession.php";
	include "../config/conn.php";

	$Profile = new Profile($conn);
	$User = new User($conn);
	$Inbox = new Inbox($conn);


	if(isset($_POST['action']) && !empty($_POST['action'])) {

		$act = $_POST['action'];

		switch($act){	
			case 'get_inbox':
				echo json_encode($Inbox->getInbox($_POST['user_id']));
			break;
			case 'get_convo':
				echo json_encode($Inbox->getConvo($_POST['inbox_id']));
			break;
			case 'send_message':
				$date = date('Y-m-d H:i:s');
				$data = array(
					'inbox_id' => $_POST['inbox_id'],
					'user_id' => $_POST['user_id'],
					'message' => $_POST['message'],
					'date_sent' => $date
				);
				echo json_encode($Inbox->sendMessage($data));
			break;
		}
	}

?>