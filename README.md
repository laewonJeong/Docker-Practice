# 🐋 Docker-Practice

간단한 Docker 실습 레포지토리

자세한 내용은 블로그에 기록: [[Docker] 4. 간단한 Docker 실습](https://laewonjeong.tistory.com/14)

<br/>
<br/>

## ✏️ Node.js Practice

#### **`git clone`을 통해 본 레포지토리를 받아옴**
```shell
$ git clone https://github.com/laewonJeong/Docker-Practice.git
```

<br/>

#### **nodejs_practice 디렉토리로 이동해 `docker build`를 통해 이미지를 build**
```shell
$ cd Docker-Practice/nodejs_practice

$ (sudo) docker build -t [IMAGE NAME]:[TAG] .
```

<br/>

#### **`docker images` 명령어를 통해 build된 이미지 확인**
```shell
$ (sudo) docker images
```

<br/>

#### **`docker run` 명령어를 통해 컨테이너 생성/실행**
```shell
$ (sudo) docker run -d -p 16800:16800 [IMAGE NAME]:[TAG]
```

<br/>

#### **`curl` 명령어 또는 직접 localhost:16800에 접속해 동작 확인**
```shell
$ curl localhost:16800
Docker Practice
```
<br/><br/>
## ✏️ Golang Practice

#### **go_practice 디렉토리로 이동해 `docker build`를 통해 이미지를 build**
```shell
$ cd Docker-Practice/go_practice

$ (sudo) docker build -t [IMAGE NAME]:[TAG] .
```

<br/>

#### **`docker images` 명령어를 통해 build된 이미지 확인**
```shell
$ (sudo) docker images
```

<br/>

#### **`docker run` 명령어를 통해 컨테이너 생성/실행**
```shell
$ (sudo) docker run [IMAGE NAME]:[TAG]
Hello World!
```
