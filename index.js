const {
    Command
} = require('commander');
const program = new Command();

const {
    exec
} = require('node:child_process');

console.log("Hello Mom")

const ubuntuPath = String.raw`bcdedit /set "{bootmgr}" path \EFI\ubuntu\grubx64.efi`
console.log(ubuntuPath)
const windowPath = String.raw`bcdedit /set "{bootmgr}" path \EFI\Microsoft\Boot\bootmgfw.efi`
//    exec(ubuntuPath, (error, stdout, stderr) => {
//        //console.log(error);
//        console.log(stdout);
//    })

   exec(windowPath,(error, stdout, stderr)=>{
       console.log(stdout);
   })


exec('bcdedit /enum firmware', (error, stdout, stderr) => {
    console.log(stdout);
});


//exec('shutdown /r -t 15')