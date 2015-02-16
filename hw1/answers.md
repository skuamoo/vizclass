Questions
=========

1.1 The DOM as shown by the DOM inspector contains only the static model of the final HTML code parsed by the browser to display the page while the HTML source code contains all scripting used to dynamically calculate the final display. You would use the DOM inspector to see the output of your code (how it will be displayed to the user). The HTML source is useful if you want to add dynamic functionality or debug your code.

1.2 The web browser generates the table from the HTML code using D3 to bind the data to HTML elements. The original data are stored in the online data source file and bound to HTML elements upon execution of the script.

2.1 No I would not use checkboxes to filter other columns from the table. Since the other columns are quantitative as opposed to categorical using range sliders and/or text inputs to filter them would work much better.

3.1 I don't think there would be much value in aggregating by other values in the table, however you could aggregate by year to show in a single view how values differ across time. If you needed to aggregate on any other dimensions you could bin them into ranges (i.e for life expectancy: <50 years, 50-60 years, 60-70 years, etc.). If you enable different aggregtion types I would replact the radio buttons with a drop-down list (select element) populated with the aggregation options including None.

4.1 The years attribute holds for each country an array of objects (one object for each year) containing the year value and quantitave measures for each year (gdp, population, life expectancy).

5.1 