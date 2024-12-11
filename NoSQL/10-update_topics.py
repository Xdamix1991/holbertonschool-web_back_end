#!/usr/bin/env python3
""" this module contains a function """


def update_topics(mongo_collection, name, topics):
    """ changes all topics of a school document based on the name """
    myquery = {"name": name}
    newvalue = {"$set": {"topics": topics}}
    return mongo_collection.update_many(myquery, newvalue)
