/*create user Guto identified by 'Guto';
create table Floricultura_Araucarias_do_Alago;
grant all on Floricultura_Araucarias_do_Alago.* TO 'guto'@'%';
grant all on Floricultura.* TO 'Guto'@'%';*/

create database Floricultura;

use Floricultura;

drop table if exists `Clientes`;
create table if not exists `Clientes` (
`ID_Cliente` int(5) not null auto_increment primary key,
`Nome_Completo` varchar(80) collate utf8_bin not null,
`Telefone` bigint(13) collate utf8_bin not null,
`Email` varchar(50) collate utf8_bin not null,
`Data_Nascimento` date not null,
`CPF` bigint(14) collate utf8_bin not null,
`UF` char(2) collate utf8_bin not null,
`CEP` bigint(8) collate utf8_bin not null
) ENGINE=MyISAM AUTO_INCREMENT=99 DEFAULT CHARSET=utf8
COLLATE=utf8_bin;

select * from Clientes;