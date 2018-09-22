class first extends Phaser.Scene {
    constructor(){
        super({key:"first"})
    }
    preload(){
        this.load.image('box','assets/box.png')
    }
    create(){
        this.image = this.add.image(0,0,'box')
    }
}