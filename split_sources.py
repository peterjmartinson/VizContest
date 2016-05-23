# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import csv

inFile = open('PJM_20160516_FLOWFEB.csv', 'r')
ReadMe = csv.reader(inFile)

names = []
iterNames = iter(ReadMe)
next(iterNames)
for row in iterNames:
  names.append(row[0])

for name in set(names):
  print(name)




inFile.close()

