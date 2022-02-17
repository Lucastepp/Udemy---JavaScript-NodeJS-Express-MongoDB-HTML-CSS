






const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.backgroundColor = color;
            resolve();
        }, delay)
    })
}


async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "All Done!"
}

// rainbow().then(() => console.log('End of Rainbow'))

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!")
}