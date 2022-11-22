"""twt_tutorial URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from register import views as v

urlpatterns = [
    path('admin', admin.site.urls),
    path('register/', v.register, name = 'register'),
    path('update_password/', v.change_password, name='update_password'),
    path('update_profile/', v.update_profile, name='update_profile'),
    path('profile/', v.profile, name='users_profile'),
    path('forgot_password/', v.forgot_password, name='forgot_user_password'),
    path('', include('twt_tutorial_app.urls')),
    path('', include('django.contrib.auth.urls')),
]
