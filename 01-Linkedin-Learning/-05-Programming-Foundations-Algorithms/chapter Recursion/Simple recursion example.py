def countdown(x):
    if x == 0:
        print("Done!")
        return
    else:
        print(x, "...")
        countdown(x-1)
        print("foo")  # it will print after the condition terminate


countdown(5)
