const sketch = (p5) => {
    let cnv
    let clientW
    let clientH

    let theta = 0
    let color = '#EAA221'
    let brand

    p5.preload = () => {
        brand = p5.loadImage('./images/actOut.png')
    }

    p5.setup = () => {
        clientW = document.getElementById('brand-ctn').clientWidth
        clientH = document.getElementById('brand-ctn').clientHeight

        cnv = p5.createCanvas(clientW, clientH, p5.WEBGL)
    }

    p5.draw = () => {
        p5.ortho()
        p5.background(0, 0)
        p5.translate(0, 0, 100)

        //generate responsize rotating box primative
        p5.push()
        p5.rotateZ(theta * 0.1)
        p5.rotateX(theta * 0.1)
        p5.rotateY(theta * 0.1)
        p5.texture(brand)
        p5.strokeWeight(2)
        p5.stroke(color)
        if (clientW >= clientH) {
            p5.box(clientH / 2)
        } else {
            p5.box(clientW / 2)
        }
        p5.pop()

        //rotation increment
        theta += 0.005
    }

    // p5.windowResized = () => {
    //     cnv = p5.resizeCanvas(clientW, clientH)
    // }
}

export default sketch

// let cnv;
// let brand;
// let clientH;
// let clientW;
// let offSetH;
// let offSetW;

// let theta = 0;

// let color;

// function preload() {
//     brand = loadImage('/sources/images/actOut.png');
// }

// function setup() {
//     clientH = document.getElementById('brand-ctn').clientHeight;
//     clientW = document.getElementById('brand-ctn').clientWidth;
//     offSetH = document.getElementById('brand-ctn').offsetHeight;
//     offSetW = document.getElementById('brand-ctn').offsetWidth;
//     cnv = createCanvas(clientW, clientH, WEBGL);
//     cnv.parent('brand-ctn');
    // color = getComputedStyle(document.documentElement)
    //     .getPropertyValue('--emphasized-text');

// }

// function draw() {
//     ortho();
//     background(0, 0);
//     translate(0, 0, 100);
//     //generate responsize rotating box primative
//     push();
//     rotateZ(theta * 0.1);
//     rotateX(theta * 0.1);
//     rotateY(theta * 0.1);
//     texture(brand);
//     strokeWeight(2);
//     stroke(color);
//     if (clientW >= clientH) {
//         box(clientH / 2);
//     } else {
//         box(clientW / 2);
//     }
//     pop();
//     //rotation increment
//     theta += 0.005;
// }

// function windowResized() {
//     canvas = resizeCanvas(clientW, clientH);
// }

