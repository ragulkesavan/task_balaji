import matplotlib.pyplot as plt
from matplotlib import cm
from math import log10

labels = list(['Election','Technology','Economy','Culture','Demography','Rights, acts and law','Great Persons','Politics','Cricket','History','India','Language','Government','Country','Plan','Environment','Finance','Invento Robotics','Civilization','Corporates'])
data = [400,200,100,700,34,900,100,345,940,984,300,234,393,194,93,433,545,435,656,10]
data.sort(reverse=True)
#number of data points
n = len(data)
#find max value for full ring
k = 10 ** int(log10(max(data)))
m = k * (1 + max(data) // k)
print(m)
#radius of donut chart
r = 1.5
#calculate width of each ring
w = r / n

#create colors along a chosen colormap
colors = [cm.terrain(i / n) for i in range(n)]

#create figure, axis
fig, ax = plt.subplots()
ax.axis("equal")

#create rings of donut chart
for i in range(n):
    #hide labels in segments with textprops: alpha = 0 - transparent, alpha = 1 - visible
    innerring, _ = ax.pie([m - data[i], data[i]], radius = r - i * w, startangle = 90, labels = ["", labels[i]], labeldistance = 1 - 1 / (1.5 * (n - i)), textprops = {"alpha": 0}, colors = ["white", colors[i]])
    plt.setp(innerring, width = w, edgecolor = "white")
plt.legend()
plt.show()


