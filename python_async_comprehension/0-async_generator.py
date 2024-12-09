#!/usr/bin env python3
""" this module contains a function  """
import asyncio
import random


async def async_generator():
    for i in range(10):
        yield random.uniform(1, 10)
        await asyncio.sleep(1)
