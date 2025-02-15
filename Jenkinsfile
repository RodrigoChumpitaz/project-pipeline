pipeline {
    agent any

    environment {
        IMAGE_NAME = "shopimax-apiv2"
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
        PORT = "3002"
        BUILD_ID = "${env.BUILD_ID}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/RodrigoChumpitaz/project-pipeline.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker-compose down'
                sh """
                    export BUILD_ID=${BUILD_ID}
                    docker-compose up -d --build
                """
                // sh 'docker stop shopimax-apiv2 shopimax-dbv2 || true'
                // sh 'docker rm shopimax-apiv2 shopimax-dbv2 || true'
                // sh 'docker-compose build --no-cache'
            }
        }

        stage('Run Services') {
            steps {
                // sh """
                //   export BUILD_ID=${BUILD_ID}
                //   docker-compose up -d --build
                // """
                sh 'docker-compose ps'
            }
        }

        // stage('Test') {
        //     steps {
        //         sh 'docker-compose exec shopimax-apiv2 yarn test'
        //     }
        // }
        // stage('Cleanup') {
        //     steps {
        //         sh 'docker system prune -f'
        //     }
        // }
    }

    post {
        always {
            sh 'docker-compose down'
        }
    }
}