f = open("quora_answers.txt")

for month in f.readlines():
    print("Month : "+month.strip())