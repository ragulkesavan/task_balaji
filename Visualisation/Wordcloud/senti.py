# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load in

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
from sklearn.model_selection import train_test_split # function for splitting data to train and test sets

import nltk
from nltk.corpus import stopwords
from nltk.classify import SklearnClassifier

from wordcloud import WordCloud,STOPWORDS
import matplotlib.pyplot as plt


# Input data files are available in the "../input/" directory.
# For example, running this (by clicking run or pressing Shift+Enter) will list the files in the input directory



import pandas as pd
data = pd.read_csv('balaji.csv')
data = data[['text']]
print(data)
# Splitting the dataset into train and test set
train, test = train_test_split(data,test_size = 0.1)
train=train['text']
print(type(train))
def wordcloud_draw(data, color = 'black'):
    words = ' '.join(data)
    cleaned_word = " ".join([word for word in words.split()
                            if 'http' not in word
                                and not word.startswith('@')
                                and not word.startswith('#')
                                and word != 'RT'
                                and word !='BJP'
                                and word !='congress'
                                and word !='hindu'
                                and word != 'Congress'
                                and word !='Hindu'
                            ])
    wordcloud = WordCloud(stopwords=STOPWORDS,
                      background_color=color,
                      width=2500,
                      height=2000
                     ).generate(cleaned_word)
    plt.figure(1,figsize=(13, 13))
    plt.imshow(wordcloud)
    plt.axis('off')
    plt.show()


tweets = []
stopwords_set = set(stopwords.words("english"))

for row in train:
    words_filtered = [e.lower() for e in row.split() if len(e) >= 3]
    words_cleaned = [word for word in words_filtered
                     if 'http' not in word
                     and not word.startswith('@')
                     and not word.startswith('#')
                     and word != 'RT'
                     and word != 'BJP'
                     and word != 'congress'
                     and word != 'hindu'
                     and word != 'Congress'
                     and word != 'Hindu'
                     and word != 'pas'
                     and word != 'pan'
                     and word != 'abortion'

                     ]
    words_without_stopwords = [word for word in words_cleaned if not word in stopwords_set]
    tweets.append((words_without_stopwords))


wordcloud_draw(train,'white')
