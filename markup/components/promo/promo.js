var i = $('#canvas'),
    snakesCanvas = i[0],
    snakesContext = snakesCanvas.getContext('2d'),
    dimensions = {},
    padding = 80,
    offset = 30,
    centerOffset = .137,
    isHiding = !1,
    tweenDuration = 1.2,
    x = function() {
        new Snake({
            animation: C,
            offset: {
                x: -(dimentions.centerX - b.max) % 25,
                y: -(dimentions.centerY - b.max) % 25
            },
            area: {
                left: dimentions.centerX - b.max,
                top: dimentions.centerY - b.max,
                width: 2 * b.max,
                height: 2 * b.max
            }
        }),
        setTimeout(x, app.utils.random(500, 1e3))
    },
    v = function(t) {
        dimentions.centerX = dimentions.width / 2 + y.max * centerOffset * (1 - t),
        dimentions.centerY = dimentions.height / 2 - offset,
        _.max = Math.sqrt(Math.pow(dimentions.width - dimentions.width / 2 + y.max * centerOffset, 2) + Math.pow(dimentions.height - dimentions.centerY, 2)),
        app.device.isPhone && (dimentions.centerX = 120,
        dimentions.centerY = -90)
    },
    C = new CanvasAnimation({
            endless: !0
        });
        C.setCanvas(snakesCanvas),
        C.on("afterRender", function() {
            snakesContext.globalCompositeOperation = "destination-in",
            snakesContext.beginPath(),
            snakesContext.arc(dimentions.centerX, dimentions.centerY, b.current, 0, 2 * Math.PI, !1),
            snakesContext.fillStyle = "#FFF",
            snakesContext.fill(),
            snakesContext.globalCompositeOperation = "source-over"
        })
