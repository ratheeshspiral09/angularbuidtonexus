const deployer = require('web-nexus-deployer');
const packageJson = require('./package.json')
const release_version = 'webapp-'+packageJson.version+'.RELEASE.zip'
const artifact_output = 'dist/'+ release_version
const nexus_repo_url = 'http://localhost:8081/repository/maven-release'
const groupId = 'group-id'
const artifactId = 'sample-id'
const version = packageJson.version+'.RELEASE'
const pom_dir = 'dist/pom'

if(process.env.NEXUS_USERNAME === undefined || process.env.NEXUS_PASSWORD === undefined) {
    throw new Error('NEXUS_USERNAME and NEXUS_PASSWORD is not set as environmental variables');
}

const release = {
    groupId: groupId,
    artifactId: artifactId,
    version: version,
    packaging: 'zip',
    auth: {
      username:process.env.NEXUS_USERNAME,
      password:process.env.NEXUS_PASSWORD
    },
    url: nexus_repo_url,
    artifact: artifact_output,
    noproxy: 'localhost',
    cwd: '',
    pomDir: pom_dir,
};
 
 
deployer.deploy(release, function(){
    console.log('Deployed ' + release_version + ' successfully in nexus.')
    console.log('Deployed path: ', nexus_repo_url)
    console.log('groupId: ', groupId)
    console.log('artifactId: ', artifactId)
    console.log('version: ', version)
});