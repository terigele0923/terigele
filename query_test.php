<?
$connStr = "host=localhost dbname=library user=my_user password=my_password";
$conn = pg_connect($connStr);
if(!$conn){
    die("接続失敗");
}

$sql = "select id,title,author,published_year from books";
$result = pg_query($conn,$sql);

if(!$result){
    die("クエリ失敗");
}
while($row = pg_fetch_object($result)){
   $bookList[] = $row;
}

foreach($bookList as $book){
    
}
?>