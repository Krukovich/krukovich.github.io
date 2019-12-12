
<meta charset="utf-8"> 
<?php
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['name']))			{$name	    	= $_POST['name'];		if ($name == '')	{unset($name);}}
if (isset($_POST['phone']))	    	{$phone	    	= $_POST['phone'];		if ($phone == '')	{unset($phone);}}
//стирание треугольных скобок из полей формы
if (isset($name) ) {
    $name=stripslashes($name);
    $name=htmlspecialchars($name);
}
if (isset($phone) ) {
    $phone=stripslashes($phone);
    $phone=htmlspecialchars($phone);
}
// адрес почты куда придет письмо
$address="Shaht3r@mail.ru";
// текст письма 
$note_text="Имя : $name \r\n Email : $phone";

if (isset($name)  &&  isset ($phone) ) {
    mail($address, $note_text, "Content-type:text/plain; windows-1251"); 
    // сообщение после отправки формы
    echo "<p style='color:#009900;'>Уважаемый(ая) <b>$name</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b> $email1</b>.</p>";
}
header("Location: ../../public/index.html");
?>