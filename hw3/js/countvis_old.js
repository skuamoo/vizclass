CountVis = function(_parentElement, _data, _metaData, _eventHandler){
    this.parentElement = _parentElement;
    this.data = _data;
    this.metaData = _metaData;
    this.eventHandler = _eventHandler;
    this.displayData = [];
    this.yScale;
    this.svg;

    // TODO: define all "constants" here

    this.initVis();
}


/**
 * Method that sets up the SVG and the variables
 */
CountVis.prototype.initVis = function(){

    var that = this; // read about the this



    //TODO: implement here all things that don't change

    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 650 - margin.left - margin.right,
        height = 330 - margin.top - margin.bottom;

    var xScale = d3.time.scale().range([0, width]);
    //var yScale = d3.scale.linear().range([height, 0]);
    yScale = d3.scale.pow().exponent(1).range([height, 0]);
    svg = d3.select("#countVis").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    var brush = d3.svg.brush()
        .x(xScale)
        .on("brush", brushed);
    function brushed() {
    }

    //TODO: implement here all things that need an initial status
        xScale.domain(d3.extent(that.data, function(d) { return d.time; }));
        yScale.domain([0, d3.max(that.data, function(d) { return d.count; })]);

        area = d3.svg.area()
            .x(function(d) {return xScale(d.time)})
            .y0(height)
            .y1(function(d) {return yScale(d.count)});
  
        var path = svg.append("path")
            .datum(that.data)
            .attr("class", "area")
            .attr("d", area);

          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          var yaxis = svg.append("g")
              .attr("class", "y axis")
              .attr("id", "yaxis")
              .call(yAxis);

        svg.append("g").attr("class", "brush").call(brush)
          .selectAll("rect")
            .attr("height", height);

    // Examples are:
    // - construct SVG layout
    // - create axis
    // -  implement brushing !!
    // --- ONLY FOR BONUS ---  implement zooming

    // TODO: modify this to append an svg element, not modify the current placeholder SVG element
//    this.svg = this.parentElement.select("svg");

    //TODO: implement the slider -- see example at http://bl.ocks.org/mbostock/6452972
    this.addSlider()


    // filter, aggregate, modify data
    this.wrangleData();

    // call the update method
    this.updateVis();
}


/**
 * Method to wrangle the data. In this case it takes an options object
  */
CountVis.prototype.wrangleData= function(){

    // displayData should hold the data which is visualized
    // pretty simple in this case -- no modifications needed
    this.displayData = this.data;

}



/**
 * the drawing function - should use the D3 selection, enter, exit
 * @param _options -- only needed if different kinds of updates are needed
 */
CountVis.prototype.updateVis = function(){
var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");
    // TODO: implement update graphs (D3: update, enter, exit)
d3.select("path.area").attr("d", area);
d3.select("#yaxis").call(yAxis);

//path.attr("d", area);
//yaxis.call(yAxis);

}

/**
 * Gets called by event handler and should create new aggregated data
 * aggregation is done by the function "aggregate(filter)". Filter has to
 * be defined here.
 * @param selection
 */
CountVis.prototype.onSelectionChange= function (selectionStart, selectionEnd){

    // TODO: call wrangle function

    // do nothing -- no update when brushing


}


/*
 *
 * ==================================
 * From here on only HELPER functions
 * ==================================
 *
 * */





/**
 * creates the y axis slider
 * @param svg -- the svg element
 */
CountVis.prototype.addSlider = function(){
    var that = this;

    // TODO: Think of what is domain and what is range for the y axis slider !!
    var sliderScale = d3.scale.linear().domain([1,200]).range([0,200])

    var sliderDragged = function(){
        var value = Math.max(1, Math.min(200,d3.event.y));

        var sliderValue = sliderScale.invert(value);

        yScale.exponent(sliderValue/200);

        d3.select(this)
            .attr("y", function () {
                return sliderScale(sliderValue);
            })

        that.updateVis();
    }
    var sliderDragBehaviour = d3.behavior.drag()
        .on("drag", sliderDragged)

    var sliderGroup = svg.append("g").attr({
        class:"sliderGroup",
        "transform":"translate("+0+","+30+")"
    })

    sliderGroup.append("rect").attr({
        class:"sliderBg",
        x:5,
        width:10,
        height:200
    }).style({
        fill:"lightgray"
    })

    sliderGroup.append("rect").attr({
        "class":"sliderHandle",
        y:0,
        width:20,
        height:10,
        rx:2,
        ry:2
    }).style({
        fill:"#333333"
    }).call(sliderDragBehaviour)


} 
