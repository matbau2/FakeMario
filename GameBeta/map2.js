function MakeMap2() {
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



}


