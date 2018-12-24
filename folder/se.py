import sqlite3
connect=sqlite3.connect("queswer.db")
'''f=open("quora_answers.txt","r")
f.seek(0)
with open("quora_answers.txt", "r") as ins:
    array = []
    for line in ins:
        array.append(line)

print(list(array))
for i in array:
    print(i)
print("hai")
#f2=open("second.txt")
l1=[]
for j in f.readlines():
    l1.append(j)
#print(l1)'''
l2=[]
a1=connect.execute("Select question_link from balaji")
b1=a1.fetchall()
#print(b1)

for i in b1:
    l2.append(i[0])
print(l2)
'''print(l)
liss=[]

s1=set()
s2=set()
for i in b1:
    if i[0] in l:
        liss.append([i[0],l.index(i[0])+1])
        s1.add(l.index(i[0])+1)


liss.sort(key = lambda x: x[1])
li=[]
print("done ---------------------------------------------------------------------")
ji=input()
for i in b1:
    li.append(i[0])
    l.sort()
for m in l:
    if m not in li:
        print(m,l.index(m)+1)
        s2.add(l.index(m) + 1)
print(l)
print(li)
print(s1)
print(s2)

print(b1[0][0])'''