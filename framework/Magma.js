const importedActivities = [];
class Magma {
    init() {}
    static setContentPane(view) {
        document.body.innerHTML = "";
        document.body.appendChild(view.element);
    }
    static importTheme(link) {
        document.head.innerHTML += ` <link rel="stylesheet" type="text/css" href="themes/${link}.css"> `;
    }
    static importActivity(name, done) {
        if (importedActivities.includes(name)) done();
        else {
            importedActivities.push(name);

            const script = document.createElement("script");
            script.src = `./${name}.js`;
            script.onload = () => {
                done();
            };
            document.head.appendChild(script);
        }
    }
    static toast(text, time) {
        const tcontainer = new View("div").setStyle({
            position: "absolute",
            width: "100%",
            bottom: "-50px",
            transition: "0.2s cubic-bezier( 0.21, 1.3, 0.3, 1.5 )",
            textAlign: "center",
        });
        const tview = new View("div")
            .setStyle({
                display: "inline-block",
                textAlign: "center",
                color: "white",
                border: "1px solid white",
                backgroundColor: "black",
                padding: "10px",
                paddingLeft: "15px",
                paddingRight: "15px",

                borderRadius: "5px",
            })
            .set({
                innerHTML: text,
            });

        setTimeout(() => {
            tcontainer.setStyle({
                bottom: "-50px",
            });
        }, time - 100);
        setTimeout(() => {
            document.body.removeChild(tcontainer.element);
        }, time);

        document.body.appendChild(tcontainer.element);
        tcontainer.add(tview);
        setTimeout(() => {
            tcontainer.setStyle({
                bottom: "50px",
            });
        }, 30);
    }
}

class View {
    constructor(dom) {
        this.element = document.createElement(dom);
        this.domType = dom;
        this.children = [];
    }
    set(edits) {
        for (var prop in edits) this.element[prop] = edits[prop];
        return this;
    }
    add(view) {
        this.children.push(view);
        view.parent = this;
        this.element.appendChild(view.element);
        return this;
    }
    remove(view) {
        this.children.splice(this.children.indexOf(view), 1);
        this.element.remove(view.element);
        view.parent = null;
        return this;
    }
    setStyle(style) {
        for (var prop in style) this.element.style[prop] = style[prop];
        return this;
    }
}
const BREAK = () => {
    return new View("br");
};

const Activities = [];

class Activity extends View {
    constructor(data) {
        super("div");
        this.data = data;
        this.set({ className: "activity" });
        this.startActivity();
    }
    startActivity() {
        Activities.push(this);
        this.present();
        setTimeout(() => {
            this.setStyle({
                left: "-20%",
            });
        }, 20);
        setTimeout(() => {
            this.setStyle({
                left: "0%",
            });
        }, 40);
    }
    present() {
        Magma.setContentPane(this);
        this.draw(this.data);
    }

    finish() {
        if (Activities[Activities.length - 1] == this) {
            Activities.pop();
        }
        this.setStyle({
            left: "50%",
        });
        setTimeout(() => {
            if (Activities.length > 0)
                Magma.setContentPane(Activities[Activities.length - 1]);
        }, 200);
    }
}
