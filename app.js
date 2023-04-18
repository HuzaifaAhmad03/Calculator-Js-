const{app,BrowserWindow,Menu}=require("electron");
//import { changeTheme } from "./index.js";

const menuitems=[
    {
        label: "File",
        submenu: [
            {
                label: "Exit",
                click: ()=>{app.quit()}
            },
        ]
    },
    {
        label: "View",
        submenu: [
            {
                label: "Light Theme",
                click: ()=>{
                    app.quit();
                    const win2=new BrowserWindow({
                        width:410,
                        height:370,
                        resizable: false,
                        icon:'styles/icon.ico'
                    });
                    win2.loadFile("index.html");
                }
            },
            {
                label: "Dark Theme",
                click: ()=>{
                    app.quit();
                    const win2=new BrowserWindow({
                        width:400,
                        height:370,
                        resizable: false,
                        icon:'styles/icon.ico'
                    });
                    win2.loadFile("indexDark.html");
                }
            },
            {
                label: "Gold Theme",
                click: ()=>{
                    app.quit();
                    const win2=new BrowserWindow({
                        width:400,
                        height:370,
                        resizable: false,
                        icon:'styles/icon.ico'
                    });
                    win2.loadFile("indexGold.html");
                }
            },
            {
                label: "Anime Blues",
                click: ()=>{
                    app.quit();
                    const win2=new BrowserWindow({
                        width:400,
                        height:370,
                        resizable: false,
                        icon:'styles/icon.ico'
                    });
                    win2.loadFile("indexAnime.html");
                }
            }
        ]
    }
];
const menu=Menu.buildFromTemplate(menuitems);
Menu.setApplicationMenu(menu);

const createWindow=()=>
{
    const win=new BrowserWindow({
        width:410,
        height:370,
        resizable: false,
        icon:'styles/icon.ico'
    });
    win.loadFile("index.html");
}
app.whenReady().then(()=>{createWindow()});
