from django.contrib import admin
from .models import Group, GroupMember


class GroupMemberInline(admin.TabularInline):
    model = GroupMember
    extra = 1

class GroupAdmin(admin.ModelAdmin):
    list_display = ('name', 'owner', 'size', 'edition', 'experienceLevel', 'campaignType')
    search_fields = ('name', 'owner', 'size', 'edition', 'experienceLevel', 'campaignType')
    list_filter = ('name', 'owner', 'size', 'edition', 'experienceLevel', 'campaignType')
    inlines = [GroupMemberInline]

class GroupMemberAdmin(admin.ModelAdmin):
    list_display = ('group', 'user', 'joined', 'role')
    search_fields = ('group', 'user', 'joined', 'role')
    list_filter = ('group', 'user', 'joined', 'role')

admin.site.register(Group, GroupAdmin)
admin.site.register(GroupMember, GroupMemberAdmin)
