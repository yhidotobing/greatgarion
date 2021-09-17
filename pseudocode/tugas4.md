PROGRAM Rating

DECLARE nilaiAwal <- Integer

INPUT initialValue

If initialValue < 70  
Print(initialValue)
Else if initialValue > 70 and initialValue % 5 < 3
Print(initialValue)
Else if initialValue > 70 and initialValue % 5 > 2
Print(initialValue + (5 - initialValue % 5))
