require "application_system_test_case"

class RecipeBooksTest < ApplicationSystemTestCase
  setup do
    @recipe_book = recipe_books(:one)
  end

  test "visiting the index" do
    visit recipe_books_url
    assert_selector "h1", text: "Recipe Books"
  end

  test "creating a Recipe book" do
    visit recipe_books_url
    click_on "New Recipe Book"

    fill_in "Category", with: @recipe_book.category
    fill_in "Comments", with: @recipe_book.comments
    check "Dairy free" if @recipe_book.dairy_free
    fill_in "Difficulty", with: @recipe_book.difficulty
    check "Gluten free" if @recipe_book.gluten_free
    fill_in "Ingredients", with: @recipe_book.ingredients
    fill_in "Instructions", with: @recipe_book.instructions
    check "Keto" if @recipe_book.keto
    fill_in "Rating", with: @recipe_book.rating
    fill_in "Recipe description", with: @recipe_book.recipe_description
    fill_in "Recipe name", with: @recipe_book.recipe_name
    fill_in "Submitted by", with: @recipe_book.submitted_by
    fill_in "Time to prepare", with: @recipe_book.time_to_prepare
    check "Vegan" if @recipe_book.vegan
    check "Vegetarian" if @recipe_book.vegetarian
    click_on "Create Recipe book"

    assert_text "Recipe book was successfully created"
    click_on "Back"
  end

  test "updating a Recipe book" do
    visit recipe_books_url
    click_on "Edit", match: :first

    fill_in "Category", with: @recipe_book.category
    fill_in "Comments", with: @recipe_book.comments
    check "Dairy free" if @recipe_book.dairy_free
    fill_in "Difficulty", with: @recipe_book.difficulty
    check "Gluten free" if @recipe_book.gluten_free
    fill_in "Ingredients", with: @recipe_book.ingredients
    fill_in "Instructions", with: @recipe_book.instructions
    check "Keto" if @recipe_book.keto
    fill_in "Rating", with: @recipe_book.rating
    fill_in "Recipe description", with: @recipe_book.recipe_description
    fill_in "Recipe name", with: @recipe_book.recipe_name
    fill_in "Submitted by", with: @recipe_book.submitted_by
    fill_in "Time to prepare", with: @recipe_book.time_to_prepare
    check "Vegan" if @recipe_book.vegan
    check "Vegetarian" if @recipe_book.vegetarian
    click_on "Update Recipe book"

    assert_text "Recipe book was successfully updated"
    click_on "Back"
  end

  test "destroying a Recipe book" do
    visit recipe_books_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Recipe book was successfully destroyed"
  end
end
