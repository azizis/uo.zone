import scrapy
from itemloaders.processors import Compose, MapCompose, Join, TakeFirst
from operator import methodcaller, itemgetter
from data_scraper.helpers import normalize_string


class Course(scrapy.Item):
    title = scrapy.Field(
        input_processor=MapCompose(normalize_string),
        output_processor=TakeFirst(),
    )
    units = scrapy.Field(
        input_processor=MapCompose(normalize_string),
        output_processor=TakeFirst(),
    )
    description = scrapy.Field(
        input_processor=Compose(Join(" "), str.strip),
    )
    mentioned_courses = scrapy.Field(
        input_processor=MapCompose(normalize_string),
    )
    components = scrapy.Field(
        input_processor=Compose(
            MapCompose(normalize_string),
        ),
        output_processor=Compose(
            Join(" "), 
            methodcaller("split", ": ", 1), 
            itemgetter(-1),
        ),
    )
    prereq_description = scrapy.Field(
        input_processor=Compose(
            MapCompose(normalize_string),
        ),
        output_processor=Compose(
            Join(" "), 
            methodcaller("split", ": ", 1), 
            itemgetter(-1),
        ),
    )
    prereq_courses = scrapy.Field(
        input_processor=MapCompose(normalize_string),
    )