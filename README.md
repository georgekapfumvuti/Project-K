# Project-K
1- install node : npm install
2- clone from repo : git clone https://github.com/georgekapfumvuti/Project-K.git
3- open the folder where you clone the repo in visual code
4- open the project : npx cypress open
  then cypress window will open
5- click on test which is appear in cypress browser badpage.feature, multimodal.feature and htmlcss.feature 
   the test will then start to execute
6- on right top in cypress window there is option to change the browser

**************************************************************************************
To Run Though Docker Image
1- Pull image from dockerhub: docker pull p1810005/k-project-cypress-cucumber-bdd:v1
2- To run image on container using firefox: docker run p1810005/k-project-cypress-cucumber-bdd:v1 run --browser firefox
                        or
    To run image on container using chrome: docker run p1810005/k-project-cypress-cucumber-bdd:v1 run --browser chrome
