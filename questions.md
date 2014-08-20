how would you structure the backend response for those components? (provide an example JSON response)
=====================================================================================================

{
  options: {
    fillcolor: "#897123",
    strokecolor: "#FFF000"
  },
  reasults: [
    {label: "Label for value 1", value: 213, color: "#768746"}, //add color for pie charts
    {label: "Label for value 2", value: 213, color: "#768746"}
    {label: "Label for value 3", value: 213, color: "#768746"}
    ....
  ]
}
how would the configuration look like? (plain JS object / ConfigurationFactory / any other pattern?)
====================================================================================================

  I used for this purpose Factories provided by angular js(see my code). Configuration values can be provided by initial api call or can just in the app.

what framework (if any) would you use? Why? Why not?
====================================================

  I used Angular js. It's not necessary, but for it's really comfortable to have model binding, watches, services and all this stuff. This makes development fast and also - it's fun to use such a MVP framework. Using just jQuery or plain js would create a lot of code - harder to maintain and read.

how would the JS api for that component look like? (pseude-code examples)
=========================================================================

class API::Stats < SomeBaseApiController
  respond_with: :json

  def stats
    @data = SearchServise.stats_from_params(params)
    respond_with @data
  end
end

how would you divide responsibilities for such component (one big function / many smaller functions / etc...). Describe reasons for your decisions.
===================================================================================================================================================

I think that my answer for this question is in the code mainly. I'm always focusing on creating short and simple methods in js and ruby - better for testing, debugging and maintainence. One class should not have more then 100 lines, and it should never repeat code from other classes. 

From me
=======

Chart.js was not the best lib - i don't like the structure, it's not flexible, but i took the first one which looked good :)
Some places in the code would need refatoring - but this is the best i could do in ~12 hours