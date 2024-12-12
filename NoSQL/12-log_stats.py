#!/usr/bin/env python3
""" this module contains a script """
from pymongo import MongoClient
import pymongo


myclient = pymongo.MongoClient('mongodb://localhost:27017/')
mydb = myclient['logs']
mycol = mydb['nginx']

logs = mycol.count_documents({})
print("{} logs".format(logs))

method = ["GET", "POST", "PUT", "PATCH", "DELETE"]
myquery = {"method": {"$in": method}}
print("Methods:")
for x in method:
    count = mycol.count_documents({"method": x})
    print("     method {}: {}".format(x, count))
status = mycol.count_documents( {"method": "GET", "path": "/status"})
print("{} status check".format(status))
