<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Ссылка истекла</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            flex-direction: column;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <h1>⏰ Ссылка устарела</h1>
    <p>Срок действия истёк: {{ \Carbon\Carbon::parse($expired_at)->format('d.m.Y H:i') }}</p>
</body>
</html>