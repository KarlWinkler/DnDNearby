from django.contrib import admin
from .models import Community, Post, Comment, Moderator, Like


class ModeratorInline(admin.TabularInline):
    model = Moderator
    extra = 1

class CommunityAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    inlines = (ModeratorInline,)


class PostAdmin(admin.ModelAdmin):
    list_display = ('user', 'image', 'title', 'content')


class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'post', 'content')


class ModeratorAdmin(admin.ModelAdmin):
    list_display = ('user', 'community')


class LikeAdmin(admin.ModelAdmin):
    list_display = ('user', 'post')


admin.site.register(Community, CommunityAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
