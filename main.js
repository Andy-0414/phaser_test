var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('box', 'assets/box.png')
    this.load.image('ground', 'assets/ground.png')
}
function create() {
    var platforms = this.physics.add.staticGroup();

    this.box = this.physics.add.sprite(300, 300, 'box').setScale(0.5); // 박스 생성
    this.box.setCollideWorldBounds(true); // 박스가 맵 테두리와 충돌 여부
    this.box.setBounce(0.2); // 탄성 설정

    platforms.create(400, 600, 'ground').setScale(0.5).refreshBody(); // 지면 생성

    this.physics.add.collider(this.box, platforms); // platforms의 물체와 충돌할지 여부
}

function update() {
    cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
        this.box.setVelocityX(-160);
    }
    else if (cursors.right.isDown) {
        this.box.setVelocityX(160);
    }
    else {
        this.box.setVelocityX(0);
    }

    if (cursors.up.isDown && this.box.body.touching.down) {
        this.box.setVelocityY(-330);
    }
}