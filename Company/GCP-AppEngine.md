# GCP AppEngine

참고 문서 :  https://cloud.google.com/appengine/docs/standard/java/

1. Java SE 8 Development Kit (https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)설치

2. Cloud SDK(https://cloud.google.com/sdk/docs/) 설치

   1. `./google-cloud-sdk/bin/gcloud init`

   2. 새 프로젝트 만들기

      1. `cd ./google-cloud-sdk/bin/`

      2. `./gcloud projects create [YOUR_PROJECT_ID] --set-as-default`

      3. 프로젝트가 만들어졌는지 확인

         1. `./gcloud projects describe [YOUR_PROJECT_ID]`
         2. ![image](https://user-images.githubusercontent.com/43080040/71459667-e9b56b00-27eb-11ea-8495-e5f7982f783e.png)

      4. 프로젝트로 App Engine 앱을 초기화하고 리전을 선택

         1. `./gcloud app create --project=[YOUR_PROJECT_ID]`
         2. ![image](https://user-images.githubusercontent.com/43080040/71459760-5597d380-27ec-11ea-8014-c24b9b648a28.png)

      5. App Engine 구성요소 설치

         1. `./gcloud components install app-engine-java`

            



## App Engine - 안내가이드 

#### 	**Cloud SDK 설치**

* **문제점** : 우선 gcloud 명령어가 안먹음.

* ```shell
  ## JAVA
  JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_231.jdk/Contents/Home
  
  ## Google Cloud
  export GOOGLE_CLOUD_SDK_PATH=/Users/ssorry_choi/Desktop/GCP/App\Engine/google-cloud-sdk
  export PATH=$PATH:$GOOGLE_CLOUD_SDK_PATH/bin
  ```

  * ***해결*** : shell 에서 해결했는데 .zshrc를 수정함. 이건 zsh를 쓰고있기 때문이고 bash쉘을 쓰는 경우엔 .bashrc를 수정해야함.
    * 이렇게하면 ./gcloud가 아니라 gcloud라는 명령어가 먹힘.

* Google Cloud SDK설치 후 `gcloud 구성요소` 설치

  * `gcloud components install app-engine-java`



#### 	**App Engine 에서 자바 8 앱 개발**

- `gcloud components install kubectl` 명령어로 kubectl 설치

- intelliJ에서 `Cloud Code` plugin 설치 (IntelliJ IDEA > Preferences > Plugins)

- Hello World 샘플 앱 다운로드

  -  `git clone https://github.com/GoogleCloudPlatform/getting-started-java.git`

- `~/GCP/App Engine` 위치에 Java 예제 프로그램을 다운로드

  - `git clone https://github.com/GoogleCloudPlatform/cloud-code-samples.git`
  - 이 디렉토리 안에 JAVA가 있음. 그 안에는 `java-guestbook` 과 `java-hello-world` 예제가 있음.

- `java-hello-world` 예제를 올려볼려고 함.

- `/java-hello-world/pom.xml` 에 추가해야함.

  - ```xml
    <!-- Java compiler Flag 설정 -->
    <properties>
      <maven.compiler.source>1.8</maven.compiler.source>
      <maven.compiler.target>1.8</maven.compiler.target>
    </properties>
    ```

  - ```xml
    <!-- Google App Engine Mavan 플러그인 추가-->
    <plugin>
      <groupId>com.google.cloud.tools</groupId>
      <artifactId>appengine-maven-plugin</artifactId>
      <version>2.0.0</version>
    </plugin>
    ```

- Gcloud에 있는 프로젝트를 바꾸려면 `gcloud init`

- 프로젝트를 빌드하려는 디렉터리로 이동( /java )

  - `mvn archetype:generate -Dappengine-version=1.9.59 -Dapplication-id=java-hello-world -Dfilter=com.google.appengine.archetypes:`
    - [com.google.appengine.archetypes:appengine-skeleton-archetype] 를 선택
    - 'groupId' => com.mycompany.myapp
    - 'artifactId' => myapp
    - 나머지는 기본 Default로 선택
  - 프로젝트가 완성되고 `myapp/`이라는 것이 생김 ( /java > java-hello-world > myapp)
  - `cd myapp`
    - `myapp$ mvn clean package`
  - `mvn appengine:run` 를 하면 서버가 돌아감. -> 'http://localhost:8080' 들어가면 앱이 실행됨.
  - `mvn appengine:deploy` 하면 배포가 됨.
    - https://jacob-pjt.appspot.com/ 들어가면 같은 앱이 실행됨.

