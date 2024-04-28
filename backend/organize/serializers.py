from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from .models import (
  Character,
  CharacterClass,
  CharacterAbility,
  CharacterSkill,
  CharacterSave,
  CharacterWeapon,
  CharacterSpell,
  CharacterInventory,
  Note,
  ChildNote,
)


class CharacterClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = CharacterClass
        fields = '__all__'

    
class CharacterAbilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = CharacterAbility
        fields = '__all__'


class CharacterSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = CharacterSkill
        fields = '__all__'


class CharacterSaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = CharacterSave
        fields = '__all__'


class CharacterWeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = CharacterWeapon
        fields = '__all__'


class CharacterSpellSerializer(serializers.ModelSerializer):
    class Meta:
        model = CharacterSpell
        fields = '__all__'


class CharacterInventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CharacterInventory
        fields = '__all__'


class CharacterSerializer(serializers.ModelSerializer):
    character_class = CharacterClassSerializer(read_only=True)
    character_abilities = CharacterAbilitySerializer(many=True, read_only=True)
    character_skills = CharacterSkillSerializer(many=True, read_only=True)
    character_saves = CharacterSaveSerializer(many=True, read_only=True)
    character_weapons = CharacterWeaponSerializer(many=True, read_only=True)
    character_spells = CharacterSpellSerializer(many=True, read_only=True)
    character_inventory = CharacterInventorySerializer(many=True, read_only=True)

    class Meta:
        model = Character
        fields = '__all__'


class ChildNoteNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'


class ChildNoteSerializer(serializers.ModelSerializer):
    child = ChildNoteNoteSerializer(read_only=True)

    class Meta:
        model = ChildNote
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    child_notes = SerializerMethodField()
    parent_notes = SerializerMethodField()

    class Meta:
        model = Note
        fields = '__all__'

    def get_child_notes(self, obj):
        return ChildNoteSerializer(obj.children, many=True).data

    def get_parent_notes(self, obj):
        parent = ChildNote.objects.filter(child=obj).values_list('parent', flat=True)
        parent = Note.objects.filter(pk__in=parent)
