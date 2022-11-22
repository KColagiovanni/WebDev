from django.contrib import admin
from .models import ToDoList, Items

admin.site.register(ToDoList)
admin.site.register(Items)