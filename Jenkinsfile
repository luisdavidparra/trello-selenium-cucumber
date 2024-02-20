pipeline {
    agent any

    // Trigger to run every day at 8:34:23 p. m. Venezuela
    triggers {
        cron '''TZ=America/Caracas
        H 20 * * *'''
    }

    stages {
          stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Generate report') {
            steps {
                bat 'npm run html_report'
            }
        }

        stage('Save Report In Local') {
            steps {
                bat 'if not exist %JENKINS_HOME%\\cucumber-reports mkdir %JENKINS_HOME%\\cucumber-reports'
                bat 'move report\\cucumber_report.html %JENKINS_HOME%\\cucumber-reports\\'
            }
        }
    }

    // Post-proccess to save the HTML Reporter as file in Jenkins pipeline
    post {
        success {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'report', reportFiles: 'cucumber_report.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}
