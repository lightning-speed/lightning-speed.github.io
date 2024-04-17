const projectsContainerStyle = {
    width:'320px',
    backgroundColor:'rgb(30,30,30)',
    display:'inline-block',
    marginTop:'30px',
    borderRadius:'10px',
    maxWidth:'80%',
    padding:'20px',
    textAlign:'left',
    color:'white'
}
class Projects extends Activity {
    draw() {
        this.setStyle({
            textAlign:'center',
            height:'fit-content'
        })
        const backButton = new View("button")
        backButton.set({
            innerHTML:'Back'
        }).setStyle({
            margin:'20px',
            float:'left'
        })
        this.add(backButton);
        backButton.set({
            onclick:()=>{
                this.finish();
            }
        })
        const hub = new View("div")
         hub.setStyle(projectsContainerStyle);
        this.add(BREAK()).add(BREAK()).add(BREAK()).add(BREAK()).add(hub);
        hub.add(new View('img').set({
            src:'hub.jpg',
            height:'70',
            width:'70'
        }).setStyle({
            borderRadius:'100%'
        
        })).add(new View('a').set({
            innerHTML:'Profile',
            href:'https://github.com/lightning-speed'
        }).setStyle({
            position:'relative',
            left:'30px',
            top:'-45px',
            fontSize:'18px'
        })).add(BREAK())
        .add(new View('a').set({
            innerHTML:'Repositories',
            href:'https://github.com/lightning-speed?tab=repositories'
        }).setStyle({
            position:'relative',
            left:'100px',
            top:'-25px',
            fontSize:'18px'
        }))
        this.addProject("Graph Database",
        "A lightweight and fast database in one file",
        "https://user-images.githubusercontent.com/82322282/204299165-f232aef6-9128-4732-8678-27e8078e5d87.png",
        "https://github.com/lightning-speed")

        this.addProject("Bat To Exe Converter",
        "Converts Bat Files to Exe files",
        "https://user-images.githubusercontent.com/82322282/134860014-66996730-89c8-40aa-bd53-ada628d2a430.PNG",
             "https://github.com/lightning-speed/JET/")
        this.addProject("Storytime web app","",
             "https://lightning-speed.github.io/old/lightning-speed.github.io-main/stor1.png",
            "https://replit.com/@opengi/stories")
        this.addProject("A Special AI model","An AI model but it doesn't use any kind of neural netowrk unlike other AI models",
            "https://aicontentfy.com/hubfs/Blog/6d562139-6db0-4c67-aa4f-f965bfaaf3ae.jpg",        "https://github.com/lightning-speed/GridModel")
        this.add(BREAK()).add(BREAK())
        }
    addProject(title,description,images,code_link){
        this.add(BREAK()).add(new View('div').set({
            innerHTML:`<h2>${title}</h2><br>`
            +`${description}<br><br>`+
            `<img src='${images}' class='inline_img'><br><br>`+
            `<a href="${code_link}">See Code</a>`
        }).setStyle(projectsContainerStyle)).add(BREAK())
    }

}


