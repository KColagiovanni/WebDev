from django.urls import path
from . import views

urlpatterns = [
	path('<int:id>', views.index, name='index'),
	path('', views.home, name='home'),
	path('delete_list/<int:id>', views.delete_list, name='delete_list')
	# path('create/', views.create, name='create'),
	# path('view/', views.view, name='view'),
 ]