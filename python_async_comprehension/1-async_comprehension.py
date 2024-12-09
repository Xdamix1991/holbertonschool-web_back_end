#!/usr/bin/env python3
""" this module contains a function """
from typing import List, AsyncGenerator
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> AsyncGenerator[List[float], None]:
    """ function that returns a random float  """
    result = []
    async for i in async_generator():
        result.append(i)
    return result
