from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import ToDoList, Items
from .forms import CreateNewList#, ListItem

# This function handles what happens on the page (list.html) that shows
# individual lists and the list items.
def index(response, id):
	print('\n\nWelcome to index()')

	input_value_list = []

	for key, value in response.POST.lists():
		print(f'Key: {key}')
		# print(f'Value: {value}')
		if 'z' in key:
			print(f'key with z is: id{key[1:]}')
		if key == 'listItem':
			print(f'Value list: {value}')
			for v in value:
				print(f'Value list, list item: {v}')
				input_value_list.append(v)

	# define the variable that will hold the list name
	# try:
	ls = ToDoList.objects.get(id=id)

	print(f'input_value_list is: {input_value_list}')
	if ls in response.user.todolist.all():
	# 	for item in enumerate(ls.items_set.all()):
	# 		print(f'{item[1]} is checked: {item[1].complete}')
			# if item[1].complete and item[1] not in complete:
			# 	complete.append(item[1])
			# if item[1].complete == False and item[1] not in incomplete:
			# 	incomplete.append(item[1])

		if response.method == 'POST':
			# print(f'response.POST is: {response.POST}')
			if response.POST.get('save'):# and ListItem(response.POST).is_valid():
				print('Save button has been clicked')
				# print(f'ls.items_set.all() is: {ls.items_set.all()}')
				for item in enumerate(ls.items_set.all()):
					if response.POST.get(f'z{str(item[1].id)}') == 'clicked':
						item[1].complete = True
					else:
						item[1].complete = False

					# print(f'\nitem[1].text is {item[1].text} and item[1].id is {item[1].id}')
					# print(f'input_value_list[item[0]] is: {input_value_list[item[0]]}')
					# print(f'item is {item}')
					# if item[1].text != input_value_list[item[0]]:
					# 	item[1].text = input_value_list[item[0]]

					item[1].save()

			elif response.POST.get('newItem'):
				txt = response.POST.get('new')
				print(f'from index txt is: {txt}')
				if len(txt) > 2:
					ls.items_set.create(text=txt, complete = False)
				else:
					print('Nothing was added because the input box was empty.')

		print(f'Returning {ls.name}')
		return render(response, 'twt_tutorial_app/list.html', {'ls':ls})#, 'complete':complete, 'incomplete':incomplete})
	return render(response, 'twt_tutorial_app/home.html', {})

# This function handles what is displayed as a home page. If the user is
# logged in, it will show the users lists (home.html), otherwise it will show
# the landing page (landing.html).
def home(response):
	lists = ToDoList.objects.all()
	if str(response.user) != 'AnonymousUser':

		num_of_lists_user_has = len(response.user.todolist.all())

		if response.method == 'POST':
			form = CreateNewList(response.POST)
			if form.is_valid():
				n = form.cleaned_data['name']
				t = ToDoList(name=n)
				t.save()
				response.user.todolist.add(t)
			return HttpResponseRedirect(f'/{t.id}')
		else:
			form = CreateNewList()
		return render(response, 'twt_tutorial_app/home.html', {'lists':lists, 'form':form, 'num_of_list_user_has': num_of_lists_user_has})
	else:
		return render(response, 'twt_tutorial_app/landing.html', {})

# This function deletes a list and all of it's items
def delete_list(response, id):
	response.user.todolist.get(id=id).delete()
	return HttpResponseRedirect('/')

def delete_list_item(response, id):
	response.user.todolist.get(id=id).delete()
#	return HttpResponseRedirect('/')
