from django import forms

class CreateNewList(forms.Form):
	name = forms.CharField(label='List to Create', max_length=200, widget=forms.TextInput(attrs={
		'style': 'text-align: center; border-top-right-radius: 5px; border-bottom-right-radius: 5px',
		'placeholder':'Enter List Name Here'
		}))
	check = forms.BooleanField(required = False)

# class ListItem(forms.Form):
# 	item_in_list = forms.CharField(label='List Item to Add', max_length=300)
