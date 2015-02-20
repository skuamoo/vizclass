Questions
=========

1.1 The DOM as shown by the DOM inspector contains only the static model of the final HTML code parsed by the browser to display the page while the HTML source code contains all scripting used to dynamically calculate the final display. You would use the DOM inspector to see the output of your code (how it will be displayed to the user). The HTML source is useful if you want to add dynamic functionality or debug your code.

1.2 The web browser generates the table from the HTML code using D3 to bind the data to HTML elements. The original data are stored in the online data source file and bound to HTML elements upon execution of the script.

2.1 No I would not use checkboxes to filter other columns from the table. Since the other columns are quantitative as opposed to categorical using range sliders and/or text inputs to filter them would work much better.

3.1 I don't think there would be much value in aggregating by other values in the table, however you could aggregate by year to show in a single view how values differ across time. If you needed to aggregate on any other dimensions you could bin them into ranges (i.e for life expectancy: <50 years, 50-60 years, 60-70 years, etc.). If you enable different aggregtion types I would replact the radio buttons with a drop-down list (select element) populated with the aggregation options including None.

4.1 The years attribute holds for each country an array of objects (one object for each year) containing the year value and quantitave measures for each year (gdp, population, life expectancy).

5.1 HTML is necessary for tabular visualizations of data but for drawing objects it is subject to inconsistencies across browsers. For this purpose SVG is simpler, faster, more visually consistent, and more reliable for displaying the intended effect. However, one con for SVG is that it is not supported by older Internet Explorer browsers. For drawing bar charts with rectangles though the HTML div element is the most simple solution. HTML and SVG can be used together with D3 to create powerful visualizations, and the best method depends on the type of visualization.
What are the pros and cons of using HTML vs. SVG? Give some examples in the context of creating visualizations.

7.1 Visualization is appropriate when questions about the data are not well defined. An example of a such a situation would be using visualization on a set of data to see how the values change over time. In this case a computer alone might not be able to define trends or patterns that a human would detect easily when presented with a visualization of the data. 

7.2 Static charts cannot show everything at once for very large data sets due to display limitations. They also can only show a single aspect of the data and as aresult can only be used to answer a limited set of questions. Interactivity solves these issues by enabling the user to interact with different aspects of the data.

7.3 The limitations of visualization are: computational capacity, human cognitive capacity (memory, attention, and perceptive abilities), and display capacity (size of the medium used to present the visualization).

7.4 Data semantics are important because they provide context on the real-world meaning of the data and as a result are necessary in order to make sense of and correctly present the data.

7.5 (a) Equality (equal/not equal), ordering (greater/less than), and arithmetic comparison (addition, subtraction, multiplication, division) 
(b) Equality (equal/not equal) 
(c) Equality (equal/not equal), ordering (greater/less than)

7.6 Position, length/size, value/saturation, color, shape (limited), orientation, texture

7.7 Position, length/size, value/saturation, orientation