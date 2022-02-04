const file_system = require('fs');
const archiver = require('archiver');
const packageJson = require('./package.json')
const release_version = 'webapp-'+packageJson.version+'.RELEASE.zip'
const artifact_output = 'dist/'+ release_version
const output = file_system.createWriteStream(artifact_output);
const archive = archiver('zip');
const build_output_dir = 'dist/build' // specfiying angualr output build directory to get files to zip

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log(artifact_output + ' is successfully created and ready to upload to nexus.');
});

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);

// append files from a sub-directory, putting its contents at the root of archive
archive.directory(build_output_dir, false);

archive.finalize();