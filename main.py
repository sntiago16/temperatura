while True:

    temp= str(input.temperature())

    if input.temperature() > 30:
        basic.show_string("Alta")
        basic.show_string(temp)
    
    elif input.temperature() >= 20 and input.temperature() <= 30:
        basic.show_string("Media")
        basic.show_string(temp)

    else:
        basic.show_string("Baja")
        basic.show_string(temp)