INSERT INTO `endereco` (`id`, `bairro`, `cidade`, `estado`) VALUES (1, 'Vila mirim', 'Praia Grande', 'São Paulo');
INSERT INTO `endereco` (`id`, `bairro`, `cidade`, `estado`) VALUES (2, 'Copacabana', 'Rio de janeiro', 'Rio de janeiro');
INSERT INTO `endereco` (`id`, `bairro`, `cidade`, `estado`) VALUES (3, 'Forte', 'Praia Grande', 'São Paulo');

INSERT INTO `foco` (`codigo`, `como_limpar`, `nome`) VALUES (1, 'Eliminando a água', 'PNEU');
INSERT INTO `foco` (`codigo`, `como_limpar`, `nome`) VALUES (2, 'Inseticida', 'Ralo');

INSERT INTO `prevencao` (`codigo_celular`, `data_criacao`, `data_efetuada`, `data_prazo`, `foco_codigo`, `endereco_id`) VALUES ('12', '2015-09-15 00:00:00', '2015-12-15 17:26:20', '2015-11-15 17:25:50', 1, 1);
INSERT INTO `prevencao` (`codigo_celular`, `data_criacao`, `data_efetuada`, `data_prazo`, `foco_codigo`, `endereco_id`) VALUES ('13', '2015-10-15 00:00:00', '2015-12-15 17:26:46', '2015-11-15 17:25:50', 2, 1);
INSERT INTO `prevencao` (`codigo_celular`, `data_criacao`, `data_efetuada`, `data_prazo`, `foco_codigo`, `endereco_id`) VALUES ('13', '2015-11-15 00:00:00', NULL, '2015-11-15 17:25:50', 2, 2);

