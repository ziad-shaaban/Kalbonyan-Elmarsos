--using join keyword
SELECT FristName, LastName, FavoriteDish, Dishes.`Name` FROM customers
join Dishes ON customers.FavoriteDish = Dishes.DishesID;