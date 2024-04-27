from django.db import models


class Character(models.Model):
    name = models.CharField(max_length=255)
    race = models.CharField(max_length=255)
    background = models.CharField(max_length=255)
    strength = models.IntegerField()
    dexterity = models.IntegerField()
    constitution = models.IntegerField()
    intelligence = models.IntegerField()
    wisdom = models.IntegerField()
    charisma = models.IntegerField()
    max_hp = models.IntegerField()
    current_hp = models.IntegerField()
    temp_hp = models.IntegerField()
    ac = models.IntegerField()
    speed = models.IntegerField()
    initiative = models.IntegerField()
    proficiency = models.IntegerField()
    death_save_successes = models.IntegerField()
    death_save_failures = models.IntegerField()
    image = models.ImageField(upload_to='characters/', null=True, blank=True)


class CharacterClass(models.Model):
    character = models.ForeignKey('Character', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    level = models.IntegerField()

    def __str__(self):
        return self.name


class CharacterSkill(models.Model):
    character = models.ForeignKey('Character', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class CharacterSave(models.Model):
    character = models.ForeignKey('Character', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class CharacterWeapon(models.Model):
    character = models.ForeignKey('Character', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    damage = models.CharField(max_length=255)
    range = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class CharacterSpell(models.Model):
    character = models.ForeignKey('Character', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    damage = models.CharField(max_length=255)
    range = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class CharacterAbility(models.Model):
    character = models.ForeignKey('Character', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class CharacterInventory(models.Model):
    character = models.ForeignKey('Character', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class Note(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.title


class ChildNote(models.Model):
    parent = models.ForeignKey('Note', on_delete=models.CASCADE, related_name='children')
    child = models.ForeignKey('Note', on_delete=models.CASCADE, related_name='parents')

    def __str__(self):
        return self.title
