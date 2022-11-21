from django import forms
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
#from .models import Profile

#from django.contrib import messages

class RegisterForm(UserCreationForm):

	first_name = forms.CharField(
		label='First Name',
		max_length=200,
		required=True,
		help_text='Required. 200 characters or less'
		)

	last_name = forms.CharField(
		label='Last Name',
		max_length=200,
		help_text='Required. 200 characters or less'
		)

	email = forms.EmailField(
		label='Email Address',
		help_text='Required. 254 characters or less'
		)

	class Meta:
		model = User
		fields = [
			'username',
			'first_name',
			'last_name',
		 	'email',
		  	'password1',
		   	'password2'
		]


	def clean(self):
		cleaned_data=super().clean()
		print(f'cleaned_data is: {cleaned_data}')
		if User.objects.filter(username=cleaned_data['username']).exists():
			print('That username already exists')
			raise ValidationError('That username is taken. Try another.')
		if User.objects.filter(email=cleaned_data['email']).exists():
			print('That email address is already exists')
			raise ValidationError('That Email address is already taken. Try another.')

class UpdateUserInfo(UserChangeForm):

	# So the password field doesn't show up
	password = None

	username = forms.CharField(
		label='Username',
		widget=forms.TextInput(attrs={'class': 'form-control'}),
		max_length=200,
		required=False,
		help_text='200 characters or less'
		)

	first_name = forms.CharField(
		label='First Name',
		max_length=200,
		required=False,
		help_text='200 characters or less'
		)

	last_name = forms.CharField(
		label='Last Name',
		max_length=200,
		required=False,
		help_text='200 characters or less'
		)

	email = forms.EmailField(
		label='Email Address',
		required=False,
		help_text='254 characters or less'
		)

	class Meta:
		model = User
		fields = [
			'username',
			'first_name',
			'last_name',
		 	'email'
 		]


	def clean(self):
		cleaned_data=super().clean()
		print(f'cleaned_data is: {cleaned_data}')
		# if User.objects.filter(username=cleaned_data['username']).exists():
		# 	print('That username already exists')
		# 	raise ValidationError('That username is taken. Try another.')
		if User.objects.filter(email=cleaned_data['email']).exists():
			print('That email address is already exists')
			raise ValidationError('That Email address is already taken. Try another.')