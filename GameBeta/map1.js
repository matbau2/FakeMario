function MakeMap1() {
    boxes.push({//box for the ground
        x: 0,
        y: height - 10,
        width: width,
        height: 50,
        color: 'orange'
    });

    boxes.push({//box on left
        x: 0,
        y: height / 4 + 10,
        width: 10,
        height: height,
        color: 'white'
    });
    boxes.push({//box on left
        x: 0,
        y: 0,
        width: 10,
        height: height / 4 - 15,
        color: 'black'
    });
    boxes.push({//box on right
        x: width - 10,
        y: 0,
        width: 50,
        height: height,
        color: 'yellow'
    });
    boxes.push({
        x: 290,
        y: 200,
        width: 260,
        height: 10,
        color: 'blue'
    });
    boxes.push({
        x: 590,
        y: 200,
        width: 80,
        height: 10,
        color: 'blue'
    });
    boxes.push({
        x: 120,
        y: 250,
        width: 150,
        height: 10,
        color: 'red'
    });
    boxes.push({
        x: 220,
        y: 300,
        width: 80,
        height: 10,
        color: 'black'
    });
    boxes.push({
        x: 340,
        y: 350,
        width: 90,
        height: 10,
        color: '#655643'
    });
    boxes.push({
        x: 740,
        y: 300,
        width: 160,
        height: 10,
        color: 'black'
    });
    boxes.push({
        x: 0,
        y: 350,
        width: 90,
        height: 10,
        color: 'black'
    });
    boxes.push({
        x: 90,
        y: 350,
        width: 10,
        height: 50,
        color: 'black'
    });



    powerup.push({
        x: 810,
        y: 250,
        width: 20,
        height: 20,
        color: '#BF4D28',
        effect: 'shrink'
    });

    powerup.push({
        x: 400,
        y: 150,
        width: 20,
        height: 20,
        //sprite: new Sprite('img/sprites.png', [0, 39], [18, 8]),
    });
    powerup.push({
        x: 0,
        y: 300,
        width: 20,
        height: 20,
        color: '#222',
        effect: 'tele',
        rotate: 20,
        px: 20,//where they get teleported
        py: 370,
        stay: true
    });
    powerup.push({
        x: 60,
        y: 365,
        width: 20,
        height: 20,
        color: '#2A5D77',
        effect: 'win',
        stay: true
    });
}


