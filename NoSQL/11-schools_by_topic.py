#!/usr/bin/env python3
""" this module contains a function """


def schools_by_topic(mongo_collection, topic):
    """ function that returns the list of school having a specific topic"""
    myquery = {"topics": topic}
    return mongo_collection.find(myquery)
