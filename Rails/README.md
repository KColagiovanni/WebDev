Insallation Guide: https://www.tutorialspoint.com/ruby-on-rails/rails-installation.htm

To install Ruby: https://rubyinstaller.org/downloads/
After ruby is installed, install Rails using the command line by typing: gem install rails

Check instalation and versions:
- Ruby Version: ruby -v
- Gem Version: gem -v
- Rails Version: rails -v

Tutorial for using rails: https://www.youtube.com/watch?v=fmyvWz5TUWg

Fix to an issue I ran into: https://stackoverflow.com/questions/71154916/rails-server-not-running-exiting

Create a CRUD site quickly:
  From the terminal (ideally Git Bash Terminal):
  - "rails new <name_of_app>" --> create app.
  - Change directories into the new folder that was created with the same name as the ass in the previous step.
  - "rails s" --> Start start server and check that its working.
  - "rails g controller home index" --> creates a home page and route. Go to "localhost:3000/home/index" in the browser and view the home page.
  - Using Sublime Text (or someother text editor) go to <name_of_app>/config/routes.rb and replace "get 'home/index'" with "root 'home#index'". This will make it so the     home page can be viewed by going to "localhost:3000" without appending home/index to it.
  - To manually add a new page, like an "About" page, create a new file (don'f forget to make the file type *.html.erb) in the same home folder mentioned above, then go     to <name_of_app>/app/controllers/home_controller.html.erb and add "def about end" (exactly the same way that the existing 'index' is in that file) and save, finally     go to the <name_of_app>/config/routes.rb file and add "get 'home/about'" and save. Now the about page can be viewed at "localhost:3000/home/about".
  - <name_of_app>/app/views/home/index.html.erb is the home page in HTML format. The views directoy is where all of the html pages will be stored.
  - <name_of_app>/app/views/layouts/application.html.erb is the "base" page. All of the other HTML pages will render in the yield tags on that page.
  - To create a CRUD scaffold type "rails g scaffold <name_of_column>:<datatype> <name_of_column2>:<datatype> and so on..."
