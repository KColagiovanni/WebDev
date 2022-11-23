json.extract! recipe_book, :id, :recipe_name, :recipe_description, :submitted_by, :time_to_prepare, :rating, :difficulty, :category, :ingredients, :instructions, :comments, :vegetarian, :vegan, :gluten_free, :dairy_free, :keto, :created_at, :updated_at
json.url recipe_book_url(recipe_book, format: :json)
