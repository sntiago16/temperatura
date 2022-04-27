let temp: string;
while (true) {
    temp = "" + input.temperature()
    if (input.temperature() > 30) {
        basic.showString("Alta")
        basic.showString(temp)
    } else if (input.temperature() >= 20 && input.temperature() <= 30) {
        basic.showString("Media")
        basic.showString(temp)
    } else {
        basic.showString("Baja")
        basic.showString(temp)
    }
    
}
