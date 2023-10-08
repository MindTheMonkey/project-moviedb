# Project Movie Database

This is the week two assignment for "Tecnnigo - Fall 2023 - JavaScript React upskill course". The purpose is to build a library of items that we display and then give the user a number of filters and sorting options.

Two item objects were provided in the initial code but to start from scratch I built my own movie object from scratch.

## The problem

The main problem was how to apply sorting and filter functions that achieve what we want with out creating custom function for exactly everything. We also want to be able to scale up easily so any solution should adapt to new cirumstances quickly.

### Techniques used
#### Populating filter options based on items in each property
When we populate the different filters we go through the properties of all our movies and build a list of all the distinct values. We cover properties that are set to a string or an array. This scales up well as if we introduce a new movie to our movie object that has for example a new movie genre like "Romance" then our filters would automatically adapt for this on the next run.

#### Reusable functions
We have two filter functions that we reuse for each filter. The populate function and the apply function. We use the same two functions to cover all four different filters: Actors, Release Year, Director, Genre. And if we introduce more properties for movies we can in a lot of cases reuse these functions as well. There are some drawbacks from this approach but for this task the benefits outweighed the drawbacks.

#### Chaining our filters and sorting
In our filter function we always start from a the global movie object and then we chain our filters so that each filter gets to work on the movies left from the previous filter. This once again has some drawbacks but at the same time it provides a very simple and clear logic for the filtration process.

Once the filteration has been done we then apply any sorting requested on the remaining movies before we finally render the final movie list with our render function.

#### Assigning a shared class name for all filter functions
This allows us to quickly envoke the addEventListner on all filters. And once again this allows us to scale up easier, as long as we apply the filter class to a new filter this is automatically added to Event Listner.

### Further improvements
There are endless possibilities in how we can improve this and the methods used would not work well on a bigger set of data but for this purpose it worked well. But the first step for improvement would be to build an filter object where we declare all the available filters, what kind of underlying data it filters and other properties connected to it.

## View it live
