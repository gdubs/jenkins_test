pipeline {

    environment{
        githubCredentials = 'github-cred'
        repositoryUrl = 'https://github.com/wilsoncychan/ifwd_hk_fe.git'
    }
    agent any

    stages {
        stage ('checkout repo'){
            steps {
                echo 'checking out repo'
                git credentialsId: 'github-cred', url: 'https://github.com/wilsoncychan/ifwd_hk_fe.git'
            }
        }

        stage ('build docker'){
            steps {
                echo 'build docker file from git'
            }
        }

        stage ('push docker to hub')
        {
            steps {
                echo "push docker to hub ${respositoryUrl}"
            }
        }
    }
}