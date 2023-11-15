<html>
<head>
    <?php
        include 'conexao.php';
    ?>
</head>
<body>
    <a href='index.html'><input type='button' value='Novo Cliente'/></a>
    <h1>Dados do cliente</h1>
    <h3>Nome Completo: </h3>
    <?php
        echo $_GET["nome"];
        $nomecomplet = $_GET["nome"];
    ?> 
    <br>
    <h3>Telefone: </h3>
    <?php
        echo $_GET["telefone"];
        $telefone = $_GET["telefone"];
    ?>
    <br>
    <h3>Email: </h3>
    <?php
        echo $_GET["email"];
        $email = $_GET["email"];
    ?> 
    <br>
    <h3>Data de Nascimento: </h3>
    <?php
        echo $_GET["nascimento"];
        $datanasc = $_GET["nascimento"];
        $data = date_create_from_format('Y-m-d',$datanasc);
        echo " Data Formatada ". date_format($data,'d/m/Y');
    ?> 
    <br>
    <h3>CPF: </h3>
    <?php
        echo $_GET["cpf"];
        $cpf = $_GET["cpf"];
    ?> 
    <br>
    <h3>Unidade Federativa do Brasil: </h3>
    <?php
        echo $_GET["uF"];
        $uf = $_GET["uF"];
    ?> 
    <br>
    <h3>CEP: </h3>
    <?php
        echo $_GET["cep"];
        $cep = $_GET["cep"];
    ?> 
    <br>
    <?php
        $sql = "INSERT INTO Clientes (Nome_Completo, Telefone, Email, Data_Nascimento, CPF, UF, CEP) VALUES ('$nomecomplet', '$telefone', '$email', '$datanasc', '$cpf', '$uf', '$cep')";
        mysqli_query($con,$sql);
        if (mysqli_error($con)) {
            echo mysqli_error($con);
        } else {
            echo "<br>";
            echo "<h3>Cliente inserido com sucesso!</h3>";
        }
        mysqli_close($con);
    ?>
</body>
</html>