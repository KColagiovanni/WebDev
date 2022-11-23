class CreateRecipeBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_books do |t|
      t.string :recipe_name
      t.text :recipe_description
      t.string :submitted_by
      t.string :time_to_prepare
      t.integer :rating
      t.string :difficulty
      t.string :category
      t.text :ingredients
      t.text :instructions
      t.text :comments
      t.boolean :vegetarian
      t.boolean :vegan
      t.boolean :gluten_free
      t.boolean :dairy_free
      t.boolean :keto

      t.timestamps
    end
  end
end
