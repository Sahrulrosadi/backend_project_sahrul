# QUIZ App

## [ SIB6 x Sanber Foundation ] - BackEnd Java
    QUIZ App ini adalah aplikasi yang saya buat untuk memenuhi tugas BAB Backend menggunakan Node.js express dan Mysql
 <br />

## Include
- Restful API
- Modularizaton
<br>

## Technology
- Node
- Express
- Mysql
- JWT


## API Spec

### Register
<hr>

**Register**<br />
Request :
- Method : POST
- Endpoint : `/auth/register`
- Body :

```json
{
    "name" : "varchar",
    "username" : "varchar",
    "password" : "varchar"
}

```
### Login
<hr>

**Login**<br />
Request :
- Method : POST
- Endpoint : `/auth/login`
- Body :

```json
{
  "username" : "varchar",
  "password" : "varchar"
}
```
<br />

## Role User
- superadmin
- admin
- user(default)



### User
<hr>

**Get All User**<br />
  Request :
- Method : GET
- Endpoint : `/user/`
<br>
<br>

**Get byId User**<br />
  Request :
- Method : GET
- Params : id of the user
- Endpoint : `/user/:id`

<br>

**Update User**<br />
  Request :
- Method : POST
- Params : id of the user
- Endpoint : `/user/:id`
- Body :

```json
{
    "name" : "varchar",
    "userName": "varchar", 
    "password": "varchar"
}
```
<br>

**Delete User**<br />
Request :
- Method : DELETE
- Params : id of the user
- Endpoint : `/user/:id`

<br />



### Question
<hr>

**Create Question**<br />
Request :
- Method : POST
- Endpoint : `/quiz/`
- Body :

```json
{
   "pertanyaan" : "varchar",
   "opsi" : "a.opsi b.opsi c.opsi d.opsi" ,
   "correctAnswer" : "c.opsi"
```
<br>
<br>

**find All Question**<br />
Request :
- Method : GET
- Endpoint : `/quiz/`
<br><br/>

**Find byId Question**<br />
Request :
- Method : GET
- Params : id of the Question
- Endpoint : `/quiz/:id`

<br>
<br>

**Update Question**<br />
Request :
- Method : PUT
- Params : id of the Question
- Endpoint : `/quiz/:id`
- Body :

```json
{
   "pertanyaan" : "varchar",
   "opsi" : "a.opsi b.opsi c.opsi d.opsi" ,
   "correctAnswer" : "c.opsi"
}
```
<br>
<br>

**Delete Question**<br />
Request :
- Method : DELETE
- Params : id of the Question
- Endpoint : `/quiz/:id`
<br></br>


### Check Answer
**Post Check Answer**<br/>
Request :
- Method : POST
- Params : id of the Question
- Endpoint :  `/quiz/:id`
<br>
<br>

### Room
<hr>

**Creat Room**<br />
Request :
- Method : POST
- Endpoint : `/room/`
- Body :

```json
{
   "room_code":"varchar",
   "is_global": boolean,
   "room_name" :"varchar"
}
```
<br>

**Find byId Room**<br />
Request :
- Method : GET
- Endpoint : `/room/:id`
<br>
<br>


**Find All Room**<br />
Request :
- Method : GET
- Endpoint : `/room/`
<br>
<br>

**Delete Room**<br />
Request :
- Method : DELETE
- Params : id of the Room
- Endpoint : `/room/:id`
<br>
<br>
