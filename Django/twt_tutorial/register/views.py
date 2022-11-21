from django.shortcuts import render, redirect
from .forms import RegisterForm, UpdateUserInfo
from django.contrib.auth.forms import PasswordChangeForm, UserChangeForm, PasswordResetForm
from .forms import UpdateUserInfo
from django.contrib import messages
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.contrib.auth import update_session_auth_hash

def profile(response):
	return render(response, 'register/profile.html')

# Create your views here.
def register(response):
	print(f'from register function in views.py response.user is: {response.user}')
	if response.method == 'POST':
		form = RegisterForm(response.POST)
		if form.is_valid():
			print(f'Registration Form is Valid. Creating new user.')
			form.save()
			return redirect('/')
		else:
			print('The form is not Valid!!!!!!!!!!!')

	else:
		form = RegisterForm()

	return render(response, 'register/register.html', {'form':form})

def change_password(response):
	print(f'from change_password function in views.py response.user is: {response.user}')
	print(f'from change_password function in views.py response.POST is: {response.POST}')
	print(f'from change_password function in views.py response.GET is: {response.GET}')
	if response.method == 'POST':
		form = PasswordChangeForm(response.user, response.POST)
		if form.is_valid():
			print(f'PasswordChangeForm is Valid. Creating new user.')
			user = form.save()
			update_session_auth_hash(response, user)
			return redirect('/')
		else:
			print('The PasswordChangeForm is not Valid!!!!!!!!!!!')

	else:
		form = PasswordChangeForm(response.user)

	return render(response, 'register/update_password.html', {'form':form})

def update_profile(response):
	print('update_profile function')
	if response.method == 'POST':
		form = UpdateUserInfo(response.POST, instance=response.user)
		if form.is_valid():
			print(f'UserChangeForm is Valid.')
			form.save()
			return redirect('/')
		else:
			print('The UpdateUserInfo is not Valid!!!!!!!!!!!')

	else:
		form = UpdateUserInfo(instance=response.user)

	return render(response, 'register/update_profile.html', {'form':form})

def forgot_password(response):
	print('forgot_password function')
	if response.method == 'POST':
		form = PasswordResetForm(response.POST)
		if form.is_valid():
			print(f'PasswordResetForm is Valid.')
			form.save()
			return redirect('/')
		else:
			print('The PasswordResetForm is not Valid!!!!!!!!!!!')

	else:
		form = PasswordResetForm()

	return render(response, 'register/forgot_password.html', {'form':form})