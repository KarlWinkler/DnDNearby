from django.db import models


class Learn(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class Resource(models.Model):
    learn = models.ForeignKey(Learn, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='resources/', null=True, blank=True)
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.name
