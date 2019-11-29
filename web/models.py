from django.db import models
from django.utils import timezone


class Comment(models.Model):
    name = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    content = models.CharField(max_length=1000)
    created = models.DateTimeField()
