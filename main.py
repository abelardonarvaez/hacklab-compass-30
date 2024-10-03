def on_button_pressed_ab():
    basic.show_number(input.compass_heading())
    basic.pause(100)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

grados = 0
bearing = "texto"
basic.show_string("Hello!")

def on_forever():
    global grados
    grados = input.compass_heading()
    if grados < 45:
        basic.show_string("N")
    elif grados < 135:
        basic.show_string("E")
    elif grados < 225:
        basic.show_string("S")
    elif grados < 315:
        basic.show_string("W")
    else:
        basic.show_string("N")
basic.forever(on_forever)
