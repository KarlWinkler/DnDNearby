from django.db import models
from authentication.models import User


class Group(models.Model):
    name = models.CharField(max_length=255)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    size = models.IntegerField()
    edition = models.CharField(max_length=255)
    image = models.ImageField(upload_to='groups/', null=True, blank=True)
    description = models.TextField()
    experienceLevel = models.CharField(max_length=255)
    campaignType = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class GroupMember(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    joined = models.DateTimeField(auto_now_add=True)
    role = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.user.username} in {self.group.name}'