from django.contrib import admin

from .models import Learn, Resource


class ResourceInline(admin.TabularInline):
    model = Resource
    extra = 1


class LearnAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name', 'description')
    list_filter = ('name', 'description')
    inlines = [ResourceInline]

  
class ResourceAdmin(admin.ModelAdmin):
    list_display = ('learn', 'name', 'description', 'image', 'link')
    search_fields = ('learn', 'name', 'description', 'image', 'link')
    list_filter = ('learn', 'name', 'description', 'image', 'link')


admin.site.register(Learn, LearnAdmin)
admin.site.register(Resource, ResourceAdmin)
