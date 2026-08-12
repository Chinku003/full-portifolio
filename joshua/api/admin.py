from django.contrib import admin

from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'message', 'created_at', 'updated_at')
    search_fields = ('username', 'email', 'message')
    list_filter = ('created_at', 'updated_at')
