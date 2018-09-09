import datetime as dt
import typing

from imports.domains import base_types
from imports.domains.blog.entities.category import Category


class Article(base_types.Entity):

    def __init__(self,
                 slug: str,
                 title: str,
                 date: typing.Optional[dt.date],
                 categories: typing.Optional[typing.List[Category]],
                 chicken_count: int,
                 content: str,
                 summary: str,
                 raw_summary: str,
                 modified_date: typing.Optional[dt.date] = None,
                 ):
        self.slug = slug
        self.title = title
        self.date = date
        self.categories = categories
        self.chicken_count = chicken_count
        self.content = content
        self.summary = summary
        self.raw_summary = raw_summary
        self.modified_date = modified_date

    def serialize(self):
        return {
            'slug': self.slug,
            'title': self.title,
            'date': self.date.isoformat(),
            'modified_date': self.modified_date.isoformat() if self.modified_date else None,
            'categories': [category.serialize() for category in self.categories],
            'chicken_count': self.chicken_count,
            'content': self.content,
            'summary': self.summary,
            'raw_summary': self.raw_summary,
        }

    def __lt__(self, article):
        return self.date < article.date
