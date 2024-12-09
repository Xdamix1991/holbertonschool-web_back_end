#!/usr/bin/env python3
""" this module contains a function  coroutine"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """ async function coroutine random float return """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
