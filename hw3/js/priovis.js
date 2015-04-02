/**
 * Created by Hendrik Strobelt (hendrik.strobelt.com) on 1/28/15.
 */


//TODO: DO IT ! :) Look at agevis.js for a useful structure
PrioVis = function(_parentElement, _data, _metaData){
    this.parentElement = _parentElement;
    this.data = _data;
    this.metaData = _metaData;
    this.displayData = [];



    // TODO: define all constants here
    this.margin = {top: 20, right: 20, bottom: 160, left: 90};
    this.width = 650 - this.margin.left - this.margin.right;
    this.height = 440 - this.margin.top - this.margin.bottom;

    this.initVis();

}


/**
 * Method that sets up the SVG and the variables
 */
PrioVis.prototype.initVis = function(){

    var that = this; // read about the this

    //TODO: construct or select SVG
    //TODO: create axis and scales
    this.xScale = d3.scale.ordinal().rangeRoundBands([0, that.width], .05);
    this.yScale = d3.scale.linear().range([that.height, 0]);

    this.svg = this.parentElement.append("svg")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
        .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    this.xAxis = d3.svg.axis()
    	.scale(this.xScale)
    	.orient("bottom");

    this.yAxis = d3.svg.axis()
        .scale(this.yScale)
        .orient("left");

    this.svg.append("g")
        .attr("class", "x axis")
      	.attr("transform", "translate(0," + this.height + ")");

    this.svg.append("g")
        .attr("class", "y axis");

    // filter, aggregate, modify data
    this.wrangleData(null);

    // call the update method
    this.updateVis();
}


/**
 * Method to wrangle the data. In this case it takes an options object
 * @param _filterFunction - a function that filters data or "null" if none
 */
PrioVis.prototype.wrangleData= function(_filterFunction){

    // displayData should hold the data which is visualized
    this.displayData = this.filterAndAggregate(_filterFunction);
    //// you might be able to pass some options,
    //// if you don't pass options -- set the default options
    //// the default is: var options = {filter: function(){return true;} }
    //var options = _options || {filter: function(){return true;}};

}



/**
 * the drawing function - should use the D3 selection, enter, exit
 */
PrioVis.prototype.updateVis = function(){
    var that = this;
    // Dear JS hipster,
    // you might be able to pass some options as parameter _option
    // But it's not needed to solve the task.
    // var options = _options || {};

    // TODO: implement...
    // TODO: ...update scales
    // TODO: ...update graphs
    this.xScale.domain(d3.range(that.displayData.length));
    this.yScale.domain([0, d3.max(that.displayData)]);

    this.xAxis.tickFormat(function(d, i) { return that.metaData.priorities[i]["item-title"];});

    this.svg.select(".x.axis")
        .call(this.xAxis)
        .selectAll("text")
      		.style("text-anchor", "end")
      		.attr("dx", "-.9em")
      		.attr("dy", ".15em")
      		.attr("transform", function(d) { return "rotate(-45)"});

    this.svg.select(".y.axis")
        .call(this.yAxis);

    var bar = this.svg.selectAll(".bar")
        .data(this.displayData, function(d) { return d; });

    var bar_enter = bar.enter().append("g");

    bar_enter.append("rect");

    bar
        .attr("class", "bar")
      .style("fill", function(d, i) { return that.metaData.priorities[i]["item-color"];})
        .attr("transform", function(d, i) {return "translate(" + that.xScale(i) + " , " + that.yScale(d) + ")"; });

    bar.exit()
        .remove();

    bar.selectAll("rect") 
      .attr("x", 0) 
      .attr("y", 0) 
      .attr("height", function(d) { return that.height - that.yScale(d);})
      .attr("width", this.xScale.rangeBand());

}


/**
 * Gets called by event handler and should create new aggregated data
 * aggregation is done by the function "aggregate(filter)". Filter has to
 * be defined here.
 * @param selection
 */
PrioVis.prototype.onSelectionChange= function (selectionStart, selectionEnd){
    // TODO: call wrangle function
    this.wrangleData(function(d) {return d.time >= selectionStart && d.time <= selectionEnd;});
    this.updateVis();  
}


/*
*
* ==================================
* From here on only HELPER functions
* ==================================
*
* */



/**
 * The aggregate function that creates the counts for each age for a given filter.
 * @param _filter - A filter can be, e.g.,  a function that is only true for data of a given time range
 * @returns {Array|*}
 */
PrioVis.prototype.filterAndAggregate = function(_filter){


    // Set filter to a function that accepts all items
    // ONLY if the parameter _filter is NOT null use this parameter
    var filter = function(){return true;}
    if (_filter != null){
        filter = _filter;
    }
    //Dear JS hipster, a more hip variant of this construct would be:
    // var filter = _filter || function(){return true;}

    var that = this;
    // create an array of values for prios 0-15
    var res = d3.range(16).map(function () {
        return 0;
    });

    this.data
        .filter(filter)
        .forEach(function(d, i) {
            for(var j=0; j< d.prios.length; j++){
                res[j] += d.prios[j];
            }
        });   
    // accumulate all values that fulfill the filter criterion

    // TODO: implement the function that filters the data and sums the values
    return res;

}