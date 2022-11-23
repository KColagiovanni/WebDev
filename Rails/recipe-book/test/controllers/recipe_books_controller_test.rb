require "test_helper"

class RecipeBooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @recipe_book = recipe_books(:one)
  end

  test "should get index" do
    get recipe_books_url
    assert_response :success
  end

  test "should get new" do
    get new_recipe_book_url
    assert_response :success
  end

  test "should create recipe_book" do
    assert_difference('RecipeBook.count') do
      post recipe_books_url, params: { recipe_book: { category: @recipe_book.category, comments: @recipe_book.comments, dairy_free: @recipe_book.dairy_free, difficulty: @recipe_book.difficulty, gluten_free: @recipe_book.gluten_free, ingredients: @recipe_book.ingredients, instructions: @recipe_book.instructions, keto: @recipe_book.keto, rating: @recipe_book.rating, recipe_description: @recipe_book.recipe_description, recipe_name: @recipe_book.recipe_name, submitted_by: @recipe_book.submitted_by, time_to_prepare: @recipe_book.time_to_prepare, vegan: @recipe_book.vegan, vegetarian: @recipe_book.vegetarian } }
    end

    assert_redirected_to recipe_book_url(RecipeBook.last)
  end

  test "should show recipe_book" do
    get recipe_book_url(@recipe_book)
    assert_response :success
  end

  test "should get edit" do
    get edit_recipe_book_url(@recipe_book)
    assert_response :success
  end

  test "should update recipe_book" do
    patch recipe_book_url(@recipe_book), params: { recipe_book: { category: @recipe_book.category, comments: @recipe_book.comments, dairy_free: @recipe_book.dairy_free, difficulty: @recipe_book.difficulty, gluten_free: @recipe_book.gluten_free, ingredients: @recipe_book.ingredients, instructions: @recipe_book.instructions, keto: @recipe_book.keto, rating: @recipe_book.rating, recipe_description: @recipe_book.recipe_description, recipe_name: @recipe_book.recipe_name, submitted_by: @recipe_book.submitted_by, time_to_prepare: @recipe_book.time_to_prepare, vegan: @recipe_book.vegan, vegetarian: @recipe_book.vegetarian } }
    assert_redirected_to recipe_book_url(@recipe_book)
  end

  test "should destroy recipe_book" do
    assert_difference('RecipeBook.count', -1) do
      delete recipe_book_url(@recipe_book)
    end

    assert_redirected_to recipe_books_url
  end
end
