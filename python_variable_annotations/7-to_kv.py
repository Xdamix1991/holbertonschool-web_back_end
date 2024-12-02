#!/usr/bin/env python3
""" this module contains a function called  to_kv"""
from typing import List, Union


def to_kv(k: str, v: Union[int, float]) -> tuple[str, float]:
    """ function to return a tuple """
    sqr: float = v ** 2
    ressult = (k, sqr)
    return ressult
