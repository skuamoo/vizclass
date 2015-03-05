Questions
=========

0.1 The horizontal positions of the nodes represent the x values and the vertical positions of the nodes represent the y values. In this case the x and y values are set to random numbers before the force layout is applied. If no x and y values are explicityly set, the force layout chooses them randomly. It then adjusts the positions of the nodes to be evenly spaced according to the specified linknDistance parameter.

0.2 Shape, texture, saturation/luminance, tilt/angle, motion.

0.3 No, not all visual variables are independent of each other. Size is dependent on several channels, including color and shape. However, color and position can be used independently.

1.1 The relative rankings are effective because they are easily readable and clearly show the order of each attribute, but the issue with relative rankings is that they do not show the magnitude of the differences. For example, China's population is far greater than any other country's population, but this is not apparent when viewing rankings in relative terms. Showing rankings in absolute terms conveys the magnitude of differences to the viewer, but the view becomes extremely cluttered and difficult to read, especially when there are outliers because the majority of entities are crammed into a small space.

1.2 Quantitative data is best displayed in scatterplots while ordinal and categorical data are best displayed using other means. For example, plotting the finish times of runners by age would work well for a scatterplot. However, if the goal was to plot t-shirt size by gender a scatterplot would not work (all of the points would be in a set number of spots). A bar chart would be much more effective in this case.

2.1 The primary pro of using D3 layouts is that they require very little coding - all the work is done already, you just have to set the attributes. The layouts also automatically calculate and transform (sometimes very complex) values for you according to the data. This is why it was beneficial to use the D3 pie layout instead of a simple circle because D3 calculated the angles and arc lengths for us (we would have had to calculate these manually otherwise). The downside of using layouts is that they may not be as customizeable as working from scratch, and there may not be layouts available for everything you need to do.

3.1 While I think edge bundling would be the most effective strategy, another strategy would be to use color to highlight the attributes of selected nodes and their associated links. This would make the selected items stand out. Another method would be to apply clustering and a force layout to arrange countries by their trade routes and minimize crossing links. A third method would be to show the representations in a matrix format instead of a link-node view, which would avoid crossing links altogether.

