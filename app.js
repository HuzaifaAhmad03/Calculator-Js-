const{app,BrowserWindow}=require("electron");

const createWindow=()=>
{
    const win=new BrowserWindow({
        width:500,
        height:470,
        resizable: false,
        icon: 'styles/LOG1_opaque.png'
    });
    win.loadFile("index.html");
}
app.whenReady().then(()=>{createWindow()});