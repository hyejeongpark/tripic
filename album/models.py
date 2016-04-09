from django.db import models

class Post(models.Model):
    photo = models.ImageField()
    content = models.CharField(max_length=100, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)