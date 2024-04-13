const letterStyle = {
    border:'solid 2px #fff',
    color:"white",
    paddingLeft:'5px',
    paddingRight:'5px',
    paddingTop:'2px',
    paddingBottom:'2px',
    position:'relative',
    left:"150px",
    display:"inline-block",
    transition:"0.8s cubic-bezier(0.61,-0.23, 0.4, 1.24) 0s",
    fontSize:'25px',
    marginRight:'3px',
    marginTop:'5px'
}
const menuBarStyle = {
    position:'absolute',
    height:'35px',
    width:'100%',
    paddingTop:'10px',
    paddingBottom:'10px',
    backgroundColor:'rgb(20,20,30)',
   boxShadow:"0 4px 8px 0 rgba(100, 0, 255, 0.2), 0 6px 20px 0 rgba(100, 0, 255, 0.19)",
   

}
class MainView extends Activity {
    draw() {
        const entryText = new View("p");
        entryText.set({
            innerHTML:"So who am I?"
        })
        entryText.setStyle(
            {
                position:'absolute',
                top:'160px',
                width:"100%",
                textAlign:'center'
            }
        )
        this.add(entryText);
        const nameBox = new View("div");
        nameBox.setStyle({
            height:"400px",
            width:"250px",
            position:"absolute",
            left:"calc(50% -  100px)",
            top:"calc(50% - 50px)"
        })
        this.add(nameBox)
        const addLetter = (letter)=>{
            if(letter=='\n'){
                nameBox.add(new View('br'));
                return;
            }
            
            const temp = new View("div")
          
           
            temp.setStyle(letterStyle);
           
            temp.set({
                innerHTML:letter
            })
            nameBox.add(temp);
            setTimeout(()=>{
                temp.setStyle({
                    left:0,
                    border:'none',
                    //borderLeft:`solid 2px rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`

                    borderBottom:`solid 2px rgb(${0+parseInt(Math.random()*255)},${0+parseInt(Math.random()*255)},${70+parseInt(Math.random()*155)})`
                 })
                 if(letter==' '){
                    letter='A'
                    temp.setStyle({
                        color:'transparent',
                        border:'none',
                    })
                }
            },120);
        }
        const str =  "Hi there,\nI am\nVedansh"
        for(let i = 0;i<str.length;i++){
            setTimeout(()=>{
                addLetter(str.charAt(i));
            },100*i)
        }
        const menuBar  = new View("div");
        menuBar.setStyle(menuBarStyle)
        this.add(menuBar)
        const icon = new View('span');
        icon.set({
            innerHTML:'VED'
        })
        icon.setStyle({
            fontSize:'30px',
            color:'blue',
            paddingLeft:'20px',

            background:"linear-gradient(to right, #980DCF 0%, #0BCFCC 100%)",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent"
        })
        menuBar.add(icon);

        let porjectsb
       
        porjectsb = new View("button").set({
            innerHTML:"My projects"
        });
        const bstyle=  {
            float:'right'
            ,backgroundColor:'transparent',
            borderRadius:'0',
            borderBottom:'2px solid blue',
            background:"linear-gradient(to right, #ffffff 0%, #ff99ff 100%)",
            boxShadow:"none",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
            marginRight:'20px',
            
        }
        porjectsb.setStyle(bstyle);

        menuBar.add(porjectsb)
        const tagsDiv = new View("div");
        tagsDiv.setStyle({
            height:"400px",
            width:"250px",
            position:"absolute",
            left:"calc(50% -  100px)",
            top:"calc(50% + 120px)"

        })
        const tagStyle = {
            padding:'5px',
            fontSize:'16px',
            backgroundColor:'rgb(30,30,20)',
            color:'white',
            borderRadius:'5px',
            border:`solid 1px rgb(${0+parseInt(Math.random()*255)},${0+parseInt(Math.random()*255)},${70+parseInt(Math.random()*155)})`
            
        }
        tagsDiv.add(new View("p").set({
            innerHTML:"I am a:"
        }))
        tagsDiv.add(new View("span").set({
            innerHTML:"Programmer"
        }).setStyle(tagStyle
        )).add(BREAK()).add(BREAK()).add(new View("span").set({
            innerHTML:"Science enthusiast"
        }).setStyle(tagStyle
        )).add(BREAK()).add(BREAK()).add(new View("span").set({
            innerHTML:"And I roast normies"
        }).setStyle(tagStyle
        ));
        this.add(tagsDiv);

        //slide 2 from here

        const transitionImage = new View('img')
        transitionImage.set({
            src:'temp.png',
            height:'50',
        })
        transitionImage.setStyle({
            position:"absolute",
            top:"calc(100% - 25px)",
            width:"100%",
            left:'0%',
            zIndex:'1',
        })
        this.add(transitionImage)
        const slide2 = new View("div")
        slide2.setStyle({
            position:"absolute",
            top:"100%",
            left:'0%',
            width:'100%',
            height:'100%',
            background:"linear-gradient(to bottom,rgb(10,10,10),rgb(30,20,30))",
            textAlign:'center'
        })
        this.add(slide2)
        const aboutDiv = new View("div");
        slide2.add(aboutDiv)
        aboutDiv.set({
            innerHTML:"16 Y/O diabolical personality, surely will steal your project ideas but smart enough to create my own. Jack of all trades, master of few."
            +"<br><br><br>"
            +"<h1>Yes, I play games not a pure nerd</h1>"
            +"<br><br><br>"
            +"Not a dozen but here are my:"
            +"<br><br>"

        })
       
        aboutDiv.setStyle({
            position:"relative",
            top:"30%",
            color:'white',
            width:"290px",
            textAlign:'left',
            display:"inline-block"
        })
        const achievements = new View("button").set({
            innerHTML:'Achievements ;)'
        }).setStyle({
            position:"relative",
            left:'0',
            top:"28%",
            color:'white',
            display:"inline-block"
        })
        slide2.add(BREAK()).add(BREAK()).add(achievements);

    }
}

function start() {
    Magma.importTheme("dark");
    new MainView();
}
