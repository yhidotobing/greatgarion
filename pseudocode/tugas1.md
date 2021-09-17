PROGRAM ConvertToCelsius

DECLARE Temperature <- Integer
DECLARE TipeTemperatur <- Text

INPUT Temperature
INPUT TemperatureType

If TemperatureType == Fahrenheit
Print((Temperature-32) \* (5/9))
Else if TemperatureType == Kelvin
Print(Temperature - 273.15)
Else if TemperatureType == Celcius
Print(Temperature)
