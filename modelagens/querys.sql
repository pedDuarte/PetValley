-- Querys - Valores exemplos
-- Cadastro de usuario externo
-- Cadastre primeiro o endereço
insert into address (POSTAL_CODE, LOCATION, TYPE_LOCATION, 
NEIGHBORHOOD, CITY, STATE, COMPLEMENT, NUMBER_HOUSE) values ('33120150', 'São Geraldo',
 'Rua', 'Asteca' ,'Santa Luzia', 'MG', 'complemento', 148);

-- Caso não tenha complemento
insert into address (POSTAL_CODE, LOCATION, TYPE_LOCATION, 
NEIGHBORHOOD, CITY, STATE, NUMBER_HOUSE) values ('33120150', 'São Geraldo',
 'Rua', 'Asteca' ,'Santa Luzia', 'MG', 148);

-- Depois insira o user (sem telefone fixo e sem imagem) Eles podem ser null
insert into user (CODE_CPF, NAME, SURNAME, BIRTHDATE, SEX, EMAIL,
 PASSWORD, CREATE_TIME, CELLPHONE, ID_ADDRESS_FK) values ('01861885519', 'NODE', 
 'NODE', '2017-08-09', 'FEMININO', 'something@hotmail.com', 'lalala', current_timestamp(), 
 '31890499995', 1);
 -- Com o telefone fixo passado e imagem
insert into user (CODE_CPF, NAME, SURNAME, BIRTHDATE, SEX, EMAIL,
 PASSWORD, CREATE_TIME, CELLPHONE, PHONENUMBER, IMAGE, ID_ADDRESS_FK) values ('01861885519', 'NODE', 
 'NODE', '2017-08-09', 'FEMININO', 'something@hotmail.com', 'lalala', current_timestamp(), 
 '31890499995','3136352008', 'imagem em  blob', 1);
 
 -- Com imagen
 insert into user (CODE_CPF, NAME, SURNAME, BIRTHDATE, SEX, EMAIL,
 PASSWORD, CREATE_TIME, CELLPHONE, IMAGE, ID_ADDRESS_FK) values ('01861885519', 'NODE', 
 'NODE', '2017-08-09', 'FEMININO', 'something@hotmail.com', 'lalala', current_timestamp(), 
 '31890499995', 'imagem em  blob', 1);
 
 -- Com telefone fixo 
 insert into user (CODE_CPF, NAME, SURNAME, BIRTHDATE, SEX, EMAIL,
 PASSWORD, CREATE_TIME, CELLPHONE, PHONENUMBER, ID_ADDRESS_FK) values ('01861885519', 'NODE', 
 'NODE', '2017-08-09', 'FEMININO', 'something@hotmail.com', 'lalala', current_timestamp(), 
 '31890499995','3136352008', 1);


-- Cadastro de suprimento supply - deve ser pedido o código do usuário que faz isso alter
-- e qual o tipo de supply






 